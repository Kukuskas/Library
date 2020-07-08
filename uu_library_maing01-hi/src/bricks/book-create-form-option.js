//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
//@@viewOff:imports

const OptionForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "BookCreateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
    onCancel: () => {}
  },
  //@@viewOff:defaultProps

  render({ onSave, onCancel, locationList }) {
    //@@viewOn:render
    return (

          <UU5.Forms.Select.Option value={locationList.id}>{locationList.location}</UU5.Forms.Select.Option>

    );
    //@@viewOff:render
  }
});

export default OptionForm;