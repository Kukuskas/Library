//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Left from "../core/left";
//@@viewOff:imports

const Book = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Book",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    book: UU5.PropTypes.shape({
      name: UU5.PropTypes.string.isRequired,
      author: UU5.PropTypes.string.isRequired,
      location: UU5.PropTypes.string.isRequired,
      averageRating: UU5.PropTypes.number.isRequired
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

  render({ book, colorSchema, onDelete }) {
    //@@viewOn:private
    function handleDelete() {
      onDelete(book);
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <>
          {book.name}
          <UU5.Bricks.Button onClick={handleDelete} colorSchema="red">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
        </>
      );
    }

    if (!book) {
      return null;
    }
    let text = {style:"float:Left; width:33% "};
    return (
      <UU5.Bricks.Card  colorSchema={colorSchema} colorSchema="blue">
        <UU5.Bricks.Text colorSchema="black"className={text} style="
        float: left;

  width: 33%"
>{book.name}</UU5.Bricks.Text>
        <UU5.Bricks.Text style="
        float: left;

  width: 33%">{book.author}</UU5.Bricks.Text>
        <UU5.Bricks.Text style="
        float: left;

  width: 22%">{book.location}</UU5.Bricks.Text>
  <UU5.Bricks.Button onClick={handleDelete} colorSchema="red" style="
        float: left;

  ">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
        <UU5.Bricks.Rating  colorSchema="red" style="overflow:hidden; width : 0; height: 30px"/>
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  }
});

export default Book;
