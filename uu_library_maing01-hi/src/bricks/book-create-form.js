//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
//@@viewOff:imports

const BookCreateForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "BookCreateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
    onCancel: () => {}
  },
  //@@viewOff:defaultProps

  render({ onSave, onCancel }) {
    //@@viewOn:render

    return (
      <UU5.Forms.Form onSave={onSave} onCancel={onCancel} labelColWidth="xs-12 m-1" inputColWidth="xs-12 m-11" >
        <UU5.Forms.Text label="Title" name="title" />
        <UU5.Forms.Text label="Author" name="author" />
        <UU5.Forms.Select label="Location" name="location" >
          <UU5.Forms.Select.Option value="49bff38c47124dcc83c20f61ae1c5d9b">Storage</UU5.Forms.Select.Option>
          <UU5.Forms.Select.Option value="67a196d9e4ea4163abb54d3cb14c52b1">Prague</UU5.Forms.Select.Option>
          <UU5.Forms.Select.Option value="da6a61856bb44e13bbfb33d6a0d407ac">Pilsen</UU5.Forms.Select.Option>
          <UU5.Forms.Select.Option value="19a22f8ee9aa418a848dab15e396cfe7">Brno</UU5.Forms.Select.Option>
          <UU5.Forms.Select.Option value="6332baf54a004da289e1ba9c793c2c78">Hradec Kralove</UU5.Forms.Select.Option>
        </UU5.Forms.Select>
          
        <UU5.Forms.Controls />
      </UU5.Forms.Form>
    );
    //@@viewOff:render
  }
});

export default BookCreateForm;