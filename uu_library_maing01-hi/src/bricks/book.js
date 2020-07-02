//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import BookUpdate from "./book-update"
import Left from "../core/left";
//@@viewOff:imports

const Book = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Book",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    book: UU5.PropTypes.shape({
      title: UU5.PropTypes.string.isRequired,
      author: UU5.PropTypes.string.isRequired,
      location: UU5.PropTypes.string.isRequired,
    }),
    colorSchema: UU5.PropTypes.string,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    book: null,
    colorSchema: "blue",
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({ book, colorSchema, onDelete, onUpdate }) {
    //@@viewOn:private
    function handleDelete() {
      onDelete(book);
    }
    function handleUpdate() {
      onUpdate(book);
    }
    function showError(content) {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content,
          colorSchema: "red"
        });
    }
    //@@viewOff:private
    
    
    //@@viewOn:render


    if (!book) {
      return null;
    }
    
    return (
      <UU5.Bricks.Card   colorSchema={colorSchema} colorSchema="blue">
        <UU5.Bricks.Text colorSchema="black" style="
        float: left;

  width: 33%"
>{book.title}</UU5.Bricks.Text>
        <UU5.Bricks.Text style="
        float: left;

  width: 33%">{book.author}</UU5.Bricks.Text>
        <UU5.Bricks.Text style="
        float: left;

  width: 22%">{book.location}</UU5.Bricks.Text>
  <UU5.Bricks.Button onClick={handleDelete} colorSchema="red" style="
        float: left;

  "><UU5.Bricks.Icon icon="mdi-delete" /></UU5.Bricks.Button>

  <BookUpdate onUpdate={handleUpdate} />
        <UU5.Bricks.Rating  colorSchema="red" style="overflow:hidden; width : 0; height: 30px"/>
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  }
});

export default Book;
