//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const BooksTitle = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "BooksTitle",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    books: UU5.PropTypes.array.isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    books: []
  },
  //@@viewOff:defaultProps

  render({ books }) {
    //@@viewOn:hooks

    /* Title */
    useEffect(() => {
      const originalTitle = document.title;
      document.title = `${originalTitle} - ${books.length} books`;

      return () => (document.title = originalTitle);
    }, [books.length]);
    //@@viewOff:hooks

    //@@viewOn:render
    return null;
    //@@viewOff:render
  }
});


export default BooksTitle;