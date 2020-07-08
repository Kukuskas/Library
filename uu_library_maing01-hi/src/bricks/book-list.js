//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Book from "./book";
//@@viewOff:imports

const BookList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "BookList",
  //@@viewOff:statics

  

  //@@viewOn:propTypes
  propTypes: {
    books: UU5.PropTypes.array.isRequired,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    books: [],
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({ books, onDetail, onUpdate, onDelete, locationList }) {
    //@@viewOn:render

    
    
    if (books.length === 0) {
      return <UU5.Common.Error content="No books!" />;
    }

    return (
        <UU5.Bricks.Row>
        {books.map(book => (
          <Book
            key={book.id}
            locationList={locationList}
            book={book}
            colorSchema="blue"
            onDetail={onDetail}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </UU5.Bricks.Row>
    );
    //@@viewOff:render
  }
});

export default BookList;