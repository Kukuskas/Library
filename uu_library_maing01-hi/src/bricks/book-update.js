//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import BookUpdateForm from "./book-update-form";
//@@viewOff:imports

const Mode = {
  BUTTON: "BUTTON",
  FORM: "FORM"
};

const BookUpdate = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "BookUpdate",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    book: UU5.PropTypes.shape({
      title: UU5.PropTypes.string.isRequired,
      author: UU5.PropTypes.string.isRequired,
      location: UU5.PropTypes.string.isRequired,
    }),
    onUpdate: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onUpdate: () => {}
  },
  //@@viewOff:defaultProps

  render({ book, onUpdate }) {
    //@viewOn:hooks
    const [mode, setMode] = useState(Mode.BUTTON);
    //@viewOff:hooks

    //@@viewOn:private
    function handleAddClick() {
      setMode(Mode.FORM);
    }

    function handleSave(opt) {
      onUpdate(opt.values);
      setMode(Mode.BUTTON);
    }

    function handleCancel(book) {
      setMode(Mode.BUTTON);
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderButton() {
      return     (<UU5.Bricks.Button onClick={handleAddClick} colorSchema="yellow" style="
      float: right;

"><UU5.Bricks.Icon icon="mdi-pencil" /></UU5.Bricks.Button>);
    }

    function renderForm() {      
      return <BookUpdateForm onSave={handleSave} book={book} onCancel={handleCancel} />;
    }

    switch (mode) {
      case Mode.BUTTON:
        return renderButton();
      default:
        return renderForm();
    }
    //@@viewOff:render
  }
});

export default BookUpdate;