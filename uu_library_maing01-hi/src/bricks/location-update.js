//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import LocationUpdateForm from "./location-update-form";
//@@viewOff:imports

const Mode = {
  BUTTON: "BUTTON",
  FORM: "FORM"
};

const LocationUpdate = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "LocationUpdate",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    location: UU5.PropTypes.shape({
      name: UU5.PropTypes.string.isRequired,
      capacity: UU5.PropTypes.number.isRequired
    }),
    onUpdate: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onUpdate: () => {}
  },
  //@@viewOff:defaultProps

  render({ onUpdate }) {
    //@viewOn:hooks
    const [mode, setMode] = useState(Mode.BUTTON);
    //@viewOff:hooks

    //@@viewOn:private
    function handleAddClick() {
      setMode(Mode.FORM);
    }

    function handleSave(opt) {
      onUpdate(opt.values);
      setMode(Mode.BUTTON);
    }

    function handleCancel(location) {
      setMode(Mode.BUTTON);
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderButton() {
      return (
        <UU5.Bricks.Button
          onClick={handleAddClick}
          colorSchema="yellow"
          style="float: left;"
        >
          <UU5.Bricks.Icon icon="mdi-pencil" />
        </UU5.Bricks.Button>
      );
    }

    function renderForm() {
      return <LocationUpdateForm onSave={handleSave} onCancel={handleCancel} />;
    }

    switch (mode) {
      case Mode.BUTTON:
        return renderButton();
      default:
        return renderForm();
    }
    //@@viewOff:render
  }
});

export default LocationUpdate;
