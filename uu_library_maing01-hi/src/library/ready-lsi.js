import Lsi from "../config/lsi.js";

export default {
  list: {
    cs: "Seznam knih",
    en: "List of books"
  },
  create: {
    cs: "Přidat knihu",
    en: "Add book"
  },
  createHeader: {
    cs: "Přidat knihu",
    en: "Add book"
  },
  updateHeader: {
    cs: "Upravit knihu",
    en: "Update book"
  },
  deleteHeader: {
    cs: "Smazat knihu",
    en: "Delete book"
  },

  deleteConfirm: {
    cs: 'Tato akce je nevratná. Opravdu chcete smazat vtip s názvem "%s"?',
    en: 'This action is permanent. Are you sure you want to delete joke "%s"?'
  },
  ...Lsi.buttons,


};
