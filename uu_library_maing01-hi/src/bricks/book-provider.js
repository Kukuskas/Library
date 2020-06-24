//@@viewOn:imports
import { createComponent, usePagingListData } from "uu5g04-hooks";
import Calls from "../calls";
import Config from "./config/config";
//@@viewOff:imports

const BookProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "BookProvider",
  //@@viewOff:statics

  render({ children }) {
    //@@viewOn:hooks
    let listDataValues = usePagingListData({
      dtoIn: { pageInfo: { pageIndex: 0, pageSize: 200 } },
      onLoad: Calls.listBooks,
      onCreate: Calls.createBook,
      onUpdate: handleUpdateBook,
      onDelete: handleDeleteBook
    });

    let {
      viewState,
      error,
      errorState,
      syncData,
      asyncData,
      handleLoad,
      handleCreate,
      handleUpdate,
      handleDelete
    } = listDataValues;
    //@@viewOff:hooks
console.log("správný", viewState, syncData, asyncData);



    //@@viewOn:private
    async function handleDeleteBook(book) {
      return await Calls.deleteBook({ id: book.id });
    }

    async function handleUpdateBook(id, values) {
      try {
        return await Calls.updateBook({ id, ...values });
      } catch {
        return Promise.reject();
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    console.log(viewState, syncData, asyncData);
    
    return children({
      viewState,
      syncData,
      asyncData,
      handleLoad,
      handleCreate,
      handleUpdate,
      handleDelete,
      error,
      errorState
    });
    //@@viewOff:render
  }
});

export default BookProvider;