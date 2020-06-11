// This file was auto-generated according to the "namespace" setting in package.json.
// Manual changes to this file are discouraged, if values are inconsistent with package.json setting.
import UU5 from "uu5g04";

const TAG = "UuLibrary.";

export default {
  TAG,
  Css: UU5.Common.Css.createCssModule(
    TAG.replace(/\.$/, "")
      .toLowerCase()
      .replace(/\./g, "-")
      .replace(/[^a-z-]/g, ""),
    process.env.NAME + "/" + process.env.OUTPUT_NAME + "@" + process.env.VERSION // this helps preserve proper order of styles among loaded libraries
  ),
  LEFT_MENU_CCR_KEY: "UuLibrary.LeftMenu",

  AUTH_HOME_ROUTE: "books",
  NOT_AUTH_HOME_ROUTE: "login",

  FEEDBACK: {
    LOADING: "loading",
    READY: "ready",
    ERROR: "error",
    INITIAL: "initial",
    SUCCESS: "success"
  },

  SCREEN_SIZE: {
    XS: "xs",
    S: "s",
    M: "m",
    L: "L",
    XL: "xl"
  },

  PROFILES: {
    AUTHORITIES: "Authorities",
    EXECUTIVES: "Executives"
  },

  STATES: {
    ACTIVE: "active",
    CLOSED: "closed",
    UNDER_CONSTRUCTION: "underConstruction"
  },

};
