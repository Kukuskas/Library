//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
// import "uu5tilesg01";
import Calls from "calls";

import Config from "./config/config.js";
import Uu5Tiles from "uu5tilesg02";
import BooksReady from "../library/ready.js";
// import {dig} from "../helpers/object-utils.js";
// import {reportSuccess, reportError} from "../helpers/alert-helper";

// import "./books.less";
import LSI from "./books-lsi.js";
//@@viewOff:imports

export const Library = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.RouteMixin, UU5.Common.CcrReaderMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Books",
    classNames: {
      main: Config.CSS + "books"
    },
    lsi: LSI
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding

  onRouteChanged_() {
    let menu = this.getCcrComponentByKey(Config.LEFT_MENU_CCR_KEY);
    menu && menu.setActiveRoute("books");
  },
  //@@viewOff:overriding

  //@@viewOn:private
  _handleUpdate(data, updateBook) {
    // set new data (temporally)
    updateBook(data.id, { ...data, inProgress: true }, undefined, null, "updateBooks")
      .then(() => this._handleUpdateDone())
      .catch(response => this._handleUpdateFail(response));
  },

  // _handleUpdateDone() {
  //   // display alert
  //   reportSuccess(this.getLsiComponent("updateSuccessHeader"));
  // },

  // _handleUpdateFail(response) {
  //   // display alert
  //   reportError(this.getLsiComponent("updateFailHeader"), this._decideErrorDescription(response));
  // },

  // _handleRateDone() {
  //   // display alert
  //   reportSuccess(this.getLsiComponent("rateSuccessHeader"));
  // },

  // _handleRateFail(response) {
  //   // display alert
  //   reportError(this.getLsiComponent("rateFailHeader"), this._decideErrorDescription(response));
  // },

  _dig(object, ...keys) {
    let pointer = object;
    for (let key of keys) {
      if (!pointer[key]) {
        return null; // missing key, no need to continue
      }
      pointer = pointer[key];
    }
    return pointer;
  },

  _handleCreate(data, createJoke) {
    // add new one
    createBook({ ...data, inProgress: true })
      .then(() => this._handleCreateDone())
      .catch(response => this._handleCreateFail(response));
  },

  // _handleCreateDone() {
  //   // display alert
  //   reportSuccess(this.getLsiComponent("createSuccessHeader"));
  // },

  // _handleCreateFail(response) {
  //   // display alert
  //   reportError(this.getLsiComponent("createFailHeader"), this._decideErrorDescription(response));
  // },

  _handleDelete(data, deleteJoke) {
    deleteJoke(data.id)
      .then(() => this._handleDeleteDone())
      .catch(response => this._handleDeleteFail(response));
  },

  // _handleDeleteDone() {
  //   // display alert
  //   reportSuccess(this.getLsiComponent("deleteSuccessHeader"));
  // },

  // _handleDeleteFail(response) {
  //   // display alert
  //   reportError(this.getLsiComponent("deleteFailHeader"), this._decideErrorDescription(response));
  // },

  // _decideErrorDescription(response) {
  //   switch (response.status) {
  //     case 400: // app error
  //       switch (response.code) {
  //         case Config.ERROR_CODES.JOKE_RATING_NOT_AUTHORIZED:
  //           return this.getLsiComponent("rateRightsError");
  //         case Config.ERROR_CODES.JOKE_DELETE_NOT_AUTHORIZED:
  //         case Config.ERROR_CODES.JOKE_UPDATE_NOT_AUTHORIZED:
  //           return this.getLsiComponent("rightsError");
  //       }
  //       break;
  //     case 403:
  //       return this.getLsiComponent("rightsError");
  //   }
  //   return this.getLsiComponent("unexpectedServerError");
  // },

  // _filterOutVisibility(jokes, identity) {
  //   let canSeeAllUnpublished = UU5.Environment.App.authorization.canSeeAllUnpublished();
  //   let canSeeUnpublished = UU5.Environment.App.authorization.canSeeUnpublished();

  //   return jokes.filter(joke => {
  //     let result;

  //     if (canSeeAllUnpublished) {
  //       result = true;
  //     } else if (canSeeUnpublished && joke.uuIdentity === identity) {
  //       result = true;
  //     } else {
  //       result = joke.visibility;
  //     }
  //     return result;
  //   });
  // },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    let books = {data: (a, b, c)};
    function renderItem(item) {
      return <div book={item.data} colorschema="green"  />;
    }
   
    if (books.length === 0) {
      return <UU5.Common.Error content="No jokes!" />;
    }

    return (
      <UU5.Bricks.Div>

              
              <UU5.Forms.Form {...this.getMainPropsToPass()} ref_={this._registerForm}>
        <UU5.Bricks.Row className={this.getClassName().formRow} display="flex">
          <UU5.Bricks.Column colWidth="xs-12 s-6 m-5 l-4 xl-3">
            <UU5.Forms.Select
              name="type"
              value={this.state.selectedType}
              onChange={this._handleTypeSelection}
              inputColWidth="xs-12 s-11 m-7"
              placeholder={this.getLsiValue("filterTypePlaceholder")}
            >
                        <UU5.Forms.Select.Option value="Author" />
            <UU5.Forms.Select.Option value="Lokace" />
            <UU5.Forms.Select.Option value="Název" />  
            </UU5.Forms.Select>

          </UU5.Bricks.Column>
          
        </UU5.Bricks.Row>
      </UU5.Forms.Form>
              
                       <Uu5Tiles.Grid
     data={books}
     tileHeight="auto"
     tileMinWidth={200}
     tileMaxWidth={400}
     tileSpacing={8}
     rowSpacing={8}
   >
     {renderItem}
   </Uu5Tiles.Grid>     
              
      
        <UU5.Forms.Form 
          header={<UU5.Bricks.Box content="Add book" colorSchema="blue" className="font-size-xl" />}
          onSave={({ component, values }) => this._handleCreate(component, values)}
          
          // onCancel={({component}) => this._onCancel(component)}
        >
          <UU5.Bricks.Modal ref_={modal => (this._modal = modal)} />

          <UU5.Forms.Text style="width:65%" name="Title" label="Title" />
          <UU5.Forms.Text style="width:65%" name="author" label="Author" />
          <UU5.Forms.Select style="width:65%" name="location" label="Location" required>
            <UU5.Forms.Select.Option value="Prague" />
            <UU5.Forms.Select.Option value="Brno" />
            <UU5.Forms.Select.Option value="Pilsen" />
          </UU5.Forms.Select>
          <UU5.Bricks.Div style="width:90%" className="text-center">
            <UU5.Forms.Controls />
          </UU5.Bricks.Div>
        </UU5.Forms.Form>
        </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Library;
