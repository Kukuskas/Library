//@@viewOn:imports
import { createComponent, usePagingListData } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
//@@viewOff:imports

const LocationProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "LocationProvider",
  //@@viewOff:statics

  render({ children }) {
    //@@viewOn:hooks
    let listDataValues = usePagingListData({
      dtoIn: { pageInfo: { pageIndex: 0, pageSize: 200 } },
      onLoad: Calls.listLocations,
      onCreate: Calls.createLocation,
      onUpdate: handleUpdateLocation,
      onDelete: handleDeleteLocation
    });

    let {
      viewState,
      error,
      errorState,
      syncData,
      asyncData,
      handleLoad,
      handleCreate,
      handleUpdate,
      handleDelete
    } = listDataValues;
    //@@viewOff:hooks

    //@@viewOn:private
    async function handleDeleteLocation(location) {
      return await Calls.deleteLocation({ id: location.id });
    }

    async function handleUpdateLocation(id, values) {
      try {
        return await Calls.updateLocation({ id, ...values });
      } catch {
        return Promise.reject();
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    return children({
      viewState,
      syncData,
      asyncData,
      handleLoad,
      handleCreate,
      handleUpdate,
      handleDelete,
      error,
      errorState
    });
    //@@viewOff:render
  }
});

export default LocationProvider;