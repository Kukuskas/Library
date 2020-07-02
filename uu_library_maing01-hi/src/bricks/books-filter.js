//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
//@@viewOff:imports

const BooksFilter = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "BooksFilter",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onChange: UU5.PropTypes.func,

  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onChange: () => {},

  },
  //@@viewOff:defaultProps

  render({ onChange }) {
    //@@viewOn:render
    return (
      <UU5.Forms.Form style="display: inline-block">
      <UU5.Forms.Select label="Filter" style="width:200px">
        <UU5.Forms.Select.Option value="Author" />
        <UU5.Forms.Select.Option value="Title" />
        <UU5.Forms.Select.Option value="Location" />
      </UU5.Forms.Select>
    </UU5.Forms.Form>
    );
    //@@viewOff:render
  }
});

export default BooksFilter;