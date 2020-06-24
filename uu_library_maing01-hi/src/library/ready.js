//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
// import "uu5tilesg01";???

import Config from "./config/config.js";
import FormModal from "../bricks/form-modal";
// import TileList from "../bricks/tile-list.js";

import List from "./list.js";
import CreateForm from "./create-form.js";
import UpdateForm from "./update-form.js";

import "./ready.less";
import LSI from "./ready-lsi.js";
//@@viewOff:imports

export const Books = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Ready",
    classNames: {
      main: Config.CSS + "ready",
      detail: Config.CSS + "ready-detail-modal"
    },
    lsi: LSI
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    detailId: UU5.PropTypes.string,
    // onCreate: UU5.PropTypes.func.isRequired,
    // onUpdate: UU5.PropTypes.func.isRequired,
    // onDelete: UU5.PropTypes.func.isRequired,
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  componentDidMount() {
    if (this.props.detailId) {
      let book = this.props.data.find(item => item.id === this.props.detailId);
      book && this._handleDetail(book);
    }
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _tileRenderer(tileProps) {
    const { data, ...props } = tileProps;
    if (data.inProgress) {
      props.disabled = true;
    }
    return (
      <List
        {...props}
        data={tileProps.data}
        onDelete={this._handleDelete}
        onUpdate={this._handleUpdate}
      />
    );
  },







  _registerModal(cmp) {
    this._modal = cmp;
  },

  _registerFormModal(cmp) {
    this._formModal = cmp;
  },

  _getActions() {
    let actions = [];
    if (UU5.Environment.App.authorization.canManage()) {
      actions.push({
        content: this.getLsi("create"), // CreateBook Button
        onClick: () => {
          this._formModal.open({
            header: this.getLsiComponent("createHeader"),
            content: <CreateForm />,
            onSave: this.props.onCreate,
            controls: {
              buttonSubmitProps: {
                content: this.getLsiComponent("createButton")
              }
            }
          });
        },
        icon: "mdi-plus-circle",
        active: true
      });
    }
    return actions;
  },

  _getSortItems() {
    return [
      {
        key: "name",
        name: { cs: "Název", en: "Name" }
      }
    ];
  },

  



  _handleUpdate(record) {
    this._formModal.open({
      header: this.getLsiComponent("updateHeader"),
      content: <UpdateForm />,
      onSave: data => {
        if (typeof data.image === "string") {
          delete data.image; // image code, not a binary
        }
        this.props.onUpdate({ id: record.id, ...data });
      },
      values: record,
      controls: {
        buttonSubmitProps: {
          content: this.getLsiComponent("updateButton")
        }
      }
    });
  },

  _handleDelete(record) {
    this._formModal.open({
      header: this.getLsiComponent("deleteHeader"),
      content: <UU5.Bricks.P>{this.getLsiComponent("deleteConfirm", null, record.name)}</UU5.Bricks.P>,
      onSave: () => this.props.onDelete(record),
      controls: {
        buttonSubmitProps: {
          content: this.getLsiComponent("deleteButton"),
          colorSchema: "danger"
        }
      }
    });
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Common.Identity>
        {({ uuIdentity }) => (
          <UU5.Bricks.Div {...this.getMainPropsToPass()}>
            <TileList
              tileRenderer={this._tileRenderer}
              data={this.props.data}
              actions={this._getActions}
              sortItems={this._getSortItems}
              tileHeight={196}
              title={this.getLsi("list")}
            >

            </TileList>
            <FormModal ref_={this._registerFormModal} />
            <UU5.Bricks.Modal ref_={this._registerModal} />
          </UU5.Bricks.Div>
        )}
      </UU5.Common.Identity>
    );
  }
  //@@viewOff:render
});

export default Books;
