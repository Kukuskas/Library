//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";

// import Uri from "../helpers/uri-helpers.js";
// import {nl2br} from "../helpers/string-helper";

import "./tile.less";
import Config from "./config/config";
//@@viewOff:imports

export const List = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "List",
    classNames: {
      main: Config.CSS + "list",
      header: Config.CSS + "list-header",
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onUpdate: UU5.PropTypes.func.isRequired,
    onDelete: UU5.PropTypes.func.isRequired,
    data: UU5.PropTypes.shape({
      id: UU5.PropTypes.string,
    }).isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _getMainProps() {
    let props = this.getMainPropsToPass();

    return props;
  },



  _handleUpdate() {
    this.props.onUpdate(this.props.data);
  },

  _handleDelete() {
    this.props.onDelete(this.props.data);
  },



  _canManage(book, identity) {
    return (
      UU5.Environment.App.authorization.canManageAll() ||
      (UU5.Environment.App.authorization.canManage() && book.uuIdentity === identity)
    );
  },

  //@@viewOff:private

  //@@viewOn:render vatvořit seznam knih
  render() {
    return (
      <UU5.Bricks.Div {...this._getMainProps()}>
        <UU5.Bricks.Div className={this.getClassName("header")}> 

          <span>
            {
              this.props.data.name
            }
          </span>
        </UU5.Bricks.Div>

        <UU5.Common.Identity>
          {({identity}) =>
              {this._canManage(this.props.data, identity) && ( //?????????????????????????????????????????
                <UU5.Bricks.Div>
                  {/* // EditButton */}
                  <UU5.Bricks.Icon icon="mdi-pencil" mainAttrs={{onClick: this._handleUpdate}}/>
                  
                  {/* // DeleteButton */}
                  <UU5.Bricks.Icon icon="mdi-delete" mainAttrs={{onClick: this._handleDelete}}/>
                </UU5.Bricks.Div>
              )}
            
          }</UU5.Common.Identity>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default List;
