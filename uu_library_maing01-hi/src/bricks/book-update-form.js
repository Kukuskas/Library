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
console.log(!book?"!!!!!!!!!!book is null and title doesn't exist":book.title);

    return (
      <UU5.Forms.Form onSave={onSave} onCancel={onCancel} labelColWidth="xs-12 m-1" inputColWidth="xs-12 m-11" >
        <br></br>
        
        <UU5.Forms.Text label="Title" name="title" value={book.title} />

        <UU5.Forms.Text label="Author" name="author" value={book.author}/>
        <UU5.Forms.Text label="Location" name="location" value={book.location}/>
        <UU5.Forms.Controls />
      </UU5.Forms.Form>
    );
    //@@viewOff:render
  }
});

export default BookUpdateForm;