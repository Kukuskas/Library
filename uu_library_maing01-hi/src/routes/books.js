//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
// import "uu5tilesg01";
import Calls from "calls";

import Config from "./config/config.js";
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
    updateBook(data.id, {...data, inProgress: true}, undefined, null, "updateBooks")
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



  _handleCreate(data, createJoke) {
    // add new one
    createJoke({...data, inProgress: true})
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
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Common.ListDataManager
          onLoad={Calls.bookList}
          onCreate={Calls.bookCreate}
          onDelete={Calls.bookDelete}
          // onUpdate={{
          //   updateJoke: Calls.updateJoke
          // }}
        >
          {({data, handleCreate, handleUpdate, handleDelete}) => {
            if (data) {
              return (
                <UU5.Common.Identity>
                  {({identity}) =>
                    <BooksReady
                      detailId={dig(this.props, "params", "id")}
                      onCreate={data => {
                        return this._handleCreate(data, handleCreate);
                      }}
                      onUpdate={data => {
                        return this._handleUpdate(data, handleUpdate);
                      }}
                      onDelete={data => {
                        return this._handleDelete(data, handleDelete);
                      }}
                      onUpdateVisibility={data => {
                        return this._handleUpdateVisibility(data, handleUpdate);
                      }}
                    />
                  }
                </UU5.Common.Identity>
              );
            } else {
              return <UU5.Bricks.Loading/>;
            }
          }}
        </UU5.Common.ListDataManager>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Library;


  