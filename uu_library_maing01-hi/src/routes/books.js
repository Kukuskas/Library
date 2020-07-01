//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import BookList from "../bricks/book-list";
import BookProvider from "../bricks/book-provider";
import BookCreate from "../bricks/book-create";
import BooksTitle from "../bricks/books-title";
//@@viewOff:imports

const Books = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Books",
  //@@viewOff:statics

  render() {
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
      return (
        <>
          <BooksTitle books={books} />
          <BookCreate onCreate={handleCreateBook} />
          <BookList books={books} onDelete={handleDeleteBook} />
        </>
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
