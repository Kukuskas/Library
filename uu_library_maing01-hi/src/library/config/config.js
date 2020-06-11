import Config from "../../config/config.js";

export default {
  ...Config,

  TAG: Config.TAG + "Books.",
  CSS: Config.CSS + "books-"
};
