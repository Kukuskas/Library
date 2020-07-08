//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import BookList from "../bricks/book-list";
import BookProvider from "../bricks/book-provider";
import BookCreate from "../bricks/book-create";
import BooksFilter from "../bricks/books-filter";
// import LocationProvider from "../bricks/location-provider";
// import LocationList from "../bricks/location-list";
//@@viewOff:imports


const Books = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Books",
  //@@viewOff:statics
  propTypes: {
    locations: UU5.PropTypes.array.isRequired,

  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    locations: [],
  },
  render() {
    // console.log(LocationProvider);
    // console.log("++++++++++++++++++++++++");
    
    //@@viewOn:hooks
    const createBookRef = useRef();
    const updateBookRef = useRef();
    const deleteBookRef = useRef();
    //@viewOff:hooks

    //@@viewOn:private
    function showError(content) {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content,
          colorSchema: "red"
        });
    }

    async function handleCreateBook(book) {
      try {
        await createBookRef.current(book);
      } catch {
        showError(`Creation of ${book.name} failed!`);
      }
    }

    /* eslint no-unused-vars: "off" */
    async function handleUpdateBook(book, values) {
      try {
        await updateBookRef.current(book.id, values);
      } catch {
        showError(`Update of ${book.name} failed!`);
      }
    }

    async function handleDeleteBook(book) {
      try {
        await deleteBookRef.current(book);
      } catch {
        showError(`Deletion of ${book.name} failed!`);
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(books) {
      // let locationList =LocationProvider(({asyncData})=>{return asyncData})
      let locationList=[
        {id: "49bff38c47124dcc83c20f61ae1c5d9b", location: "Storage"},
        {id: "67a196d9e4ea4163abb54d3cb14c52b1", location: "Prague"},
        {id: "da6a61856bb44e13bbfb33d6a0d407ac", location: "Pilsen"},
        {id: "19a22f8ee9aa418a848dab15e396cfe7", location: "Brno"},
        {id: "6332baf54a004da289e1ba9c793c2c78", location: "Hradec Kralove"}];
// console.log(locationList);


      return (
        <div >
          <BookCreate locationList={locationList} onCreate={handleCreateBook} style="float: left" />
          <BooksFilter />
          <br />
          <br />
          <BookList books={books} locationList={locationList} onDelete={handleDeleteBook} onUpdate={handleUpdateBook}/>
        </div>
      );
    }

    function renderError(books, errorState) {
      switch (errorState) {
        case "create":
        case "update":
        case "delete":
          return renderReady(books);
        case "load":
        default:
          return <UU5.Bricks.Error content="Error happened!" />;
      }
    }

    return (
      <UU5.Bricks.Container>
        <BookProvider>
          {({ viewState, asyncData, handleCreate, handleUpdate, handleDelete, errorState }) => {
            createBookRef.current = handleCreate;
            updateBookRef.current = handleUpdate;
            deleteBookRef.current = handleDelete;

            switch (viewState) {
              case "load":
                return renderLoad();
              case "error":
                return renderError(asyncData, errorState);
              default:
                return renderReady(asyncData);
            }
          }}
        </BookProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  }
});

export default Books;
