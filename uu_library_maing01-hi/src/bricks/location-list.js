//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Location from "./location";
//@@viewOff:imports

const LocationList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "LocationList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    locations: UU5.PropTypes.array.isRequired,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    locations: [],
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({ locations, onDetail, onUpdate, onDelete }) {
    //@@viewOn:render
    if (locations.length === 0) {
      return <UU5.Common.Error content="No locations!" />;
    }

    return (
        <UU5.Bricks.Row>
        {locations.map(location => (
          <Location
            key={location.id}
            location={location}
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

export default LocationList;