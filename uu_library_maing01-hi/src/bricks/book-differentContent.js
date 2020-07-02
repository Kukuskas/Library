//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
import Css from "./book.css.js";
//@@viewOff:imports

const Book = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Book",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    book: UU5.PropTypes.shape({
      title: UU5.PropTypes.string.isRequired,
      text: UU5.PropTypes.string,
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

  render({ book, colorSchema, onDetail, onUpdate, onDelete }) {
    //@@viewOn:private
    function handleDetail() {
      onDetail(book);
    }

    function handleUpdate() {
      onUpdate(book);
    }

    function handleDelete() {
      onDelete(book);
    }
    //@@viewOff:private

    //@@viewOn:render
    if (!book) {
      return null;
    }

    return (
      <UU5.Bricks.Card className={Css.main} colorSchema={colorSchema}>
        <div className={Css.header} onClick={handleDetail}>
          {book.name}
        </div>
        <div className={Css.content} onClick={handleDetail}>
          <div className={Css.text}>
            {book.text}
            {book.image && (
              <UU5.Bricks.Image
                className={Css.image}
                src={Calls.getCommandUri(`/uu-app-binarystore/getBinaryData?code=${book.image}`)}
                authenticate
              />
            )}
          </div>
        </div>
        <div className={Css.footer}>
          <UU5.Bricks.Rating value={book.averageRating} />
          <div>
            <UU5.Bricks.Button onClick={handleUpdate} bgStyle="transparent">
              <UU5.Bricks.Icon icon="mdi-pencil" />
            </UU5.Bricks.Button>
            <UU5.Bricks.Button onClick={handleDelete} bgStyle="transparent">
              <UU5.Bricks.Icon icon="mdi-delete" />
            </UU5.Bricks.Button>
          </div>
        </div>
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  }
});

export default Book;
