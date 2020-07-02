//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
//@@viewOff:imports

const LocationsFilter = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "LocationsFilter",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onChange: UU5.PropTypes.func,

  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onChange: () => {},

  },
  //@@viewOff:defaultProps

  render({ onChange }) {
    //@@viewOn:render
    return (
      <UU5.Forms.Form style="display: inline-block">
      <UU5.Forms.Select label="Filter" style="width:200px">
        <UU5.Forms.Select.Option value="Prague" />
        <UU5.Forms.Select.Option value="Brno" />
        <UU5.Forms.Select.Option value="Pilsen" />
        <UU5.Forms.Select.Option value="Hradec Kralove" />
        <UU5.Forms.Select.Option value="Storage" />
      </UU5.Forms.Select>
    </UU5.Forms.Form>
    );
    //@@viewOff:render
  }
});

export default LocationsFilter;