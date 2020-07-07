//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
//@@viewOff:imports

const BookUpdateForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "BookUpdateForm",
  //@@viewOff:statics
  propTypes: {
    book: UU5.PropTypes.shape({
      title: UU5.PropTypes.string.isRequired,
      author: UU5.PropTypes.string.isRequired,
      location: UU5.PropTypes.string.isRequired,
    }),
  //@@viewOn:propTypes
    onSubmit: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  
  //@@viewOn:defaultProps
  defaultProps: {
    book: null,
    onSubmit: () => {},
    onCancel: () => {}
  },
  //@@viewOff:defaultProps

  render({ book, onSave, onCancel}) {
    //@@viewOn:render
    switch (book.location) {
      case "Storage":  book.location= "49bff38c47124dcc83c20f61ae1c5d9b";
        break;
      case "Prague":  book.location= "67a196d9e4ea4163abb54d3cb14c52b1";
        break;
      case "Pilsen":  book.location= "da6a61856bb44e13bbfb33d6a0d407ac";
        break;
      case "Brno":  book.location= "19a22f8ee9aa418a848dab15e396cfe7";
        break;
      case "Hradec Kralove":  book.location= "6332baf54a004da289e1ba9c793c2c78";
        break;
      default:
        break;
    }

    return (
      <UU5.Forms.Form onSave={onSave} onCancel={onCancel} labelColWidth="xs-12 m-1" inputColWidth="xs-12 m-11" >
        <br></br>
        
        <UU5.Forms.Text label="Title" name="title" value={book.title} />

        <UU5.Forms.Text label="Author" name="author" value={book.author}/>
        <UU5.Forms.Select label="Location" name="location" value={book.location}>
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

export default BookUpdateForm;