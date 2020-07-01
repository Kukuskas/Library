//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const LocationsTitle = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "LocationsTitle",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    locations: UU5.PropTypes.array.isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    locations: []
  },
  //@@viewOff:defaultProps

  render({ locations }) {
    //@@viewOn:hooks

    /* Title */
    useEffect(() => {
      const originalTitle = document.title;
      document.title = `${originalTitle} - ${locations.length} locations`;

      return () => (document.title = originalTitle);
    }, [locations.length]);
    //@@viewOff:hooks

    //@@viewOn:render
    return null;
    //@@viewOff:render
  }
});


export default LocationsTitle;