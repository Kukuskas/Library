//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
//@@viewOff:imports

const LocationUpdateForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "LocationUpdateForm",
  //@@viewOff:statics
  propTypes: {
    location: UU5.PropTypes.shape({
      title: UU5.PropTypes.string.isRequired,
      author: UU5.PropTypes.string.isRequired,
      location: UU5.PropTypes.string.isRequired
    }),
    //@@viewOn:propTypes
    onSubmit: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    location: null,
    onSubmit: () => {},
    onCancel: () => {}
  },
  //@@viewOff:defaultProps

  render({ location, onSave, onCancel}) {
    //@@viewOn:render

    return (
      <UU5.Forms.Form onSave={onSave} onCancel={onCancel} labelColWidth="xs-12 m-1" inputColWidth="xs-12 m-11">
        <br></br>

        <UU5.Forms.Text label="Name" name="name" value={location.name} />

        <UU5.Forms.Number label="Capacity" name="capacity" value={location.capacity} />

        <UU5.Forms.Controls />
      </UU5.Forms.Form>
    );
    //@@viewOff:render
  }
});

export default LocationUpdateForm;
