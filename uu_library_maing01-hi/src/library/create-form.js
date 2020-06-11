//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";

import Config from "./config/config.js";

import {BooksConsumer} from "../core/books-provider.js";

import "./create-form.less";
import LSI from "./create-form-lsi.js";
//@@viewOff:imports

export const Form = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.PureRenderMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "CreateForm",
    classNames: {
      main: Config.CSS + "CreateForm"
    },
    lsi: LSI,
    opt: {
      pureRender: true
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    showPublished: UU5.PropTypes.bool
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _getLocationOptions(locations) {
    return locations.map(location => (
      <UU5.Forms.Select.Option value={location.id} key={location.id}>
        {location.name}
      </UU5.Forms.Select.Option>
    ));
  },



  _registerFile(cmp) {
    this._file = cmp;
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <BooksConsumer>
        {({ locationList }) => (
          <UU5.Bricks.Div {...this.getMainPropsToPass()}>
            {/* // Name */}
            <UU5.Forms.Text inputAttrs={{ maxLength: 255 }} label={this.getLsiComponent("name")} name="name" required />
           
            {/* // Categories */}
            <UU5.Forms.Select
              label={this.getLsiComponent("location")}
              name="locationList"
              multiple
              openToContent={true}
            >
              {this._getLocationOptions(locationList)}
            </UU5.Forms.Select>
            <UU5.Forms.Text inputAttrs={{ maxLength: 255 }} label={this.getLsiComponent("author")} name="author" required />
          </UU5.Bricks.Div>
        )}
      </BooksConsumer>
    );
  }
  //@@viewOff:render
});

export default Form;
