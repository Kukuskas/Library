//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import LocationList from "../bricks/location-list";
import LocationProvider from "../bricks/location-provider";
import LocationCreate from "../bricks/location-create";
import LocationsFilter from "../bricks/locations-filter";
//@@viewOff:imports

const Location = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Location",
  //@@viewOff:statics

  render() {
    //@@viewOn:hooks
    const createLocationRef = useRef();
    const updateLocationRef = useRef();
    const deleteLocationRef = useRef();
    //@viewOff:hooks

    //@@viewOn:private
    function showError(content) {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content,
          colorSchema: "red"
        });
    }

    async function handleCreateLocation(location) {
      try {
        await createLocationRef.current(location);
      } catch {
        showError(`Creation of ${location.name} failed!`);
      }
    }

    /* eslint no-unused-vars: "off" */
    async function handleUpdateLocation(location, values) {
      try {
        await updateLocationRef.current(location.id, values);
      } catch {
        showError(`Update of ${location.name} failed!`);
      }
    }

    async function handleDeleteLocation(location) {
      try {
        await deleteLocationRef.current(location);
      } catch {
        showError(`Deletion of ${location.name} failed!`);
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(locations) {
      return (
        <>
          <LocationCreate onCreate={handleCreateLocation} />
          <LocationsFilter />
          <br />
          <br />
          <LocationList locations={locations} onDelete={handleDeleteLocation} onUpdate={handleUpdateLocation}/>
        </>
      );
    }

    function renderError(locations, errorState) {
      switch (errorState) {
        case "create":
        case "update":
        case "delete":
          return renderReady(locations);
        case "load":
        default:
          return <UU5.Bricks.Error content="Error happened!" />;
      }
    }

    return (
      <UU5.Bricks.Container>
        <LocationProvider>
          {({ viewState, asyncData, handleCreate, handleUpdate, handleDelete, errorState }) => {
            createLocationRef.current = handleCreate;
            updateLocationRef.current = handleUpdate;
            deleteLocationRef.current = handleDelete;

            switch (viewState) {
              case "load":
                return renderLoad();
              case "error":
                return renderError(asyncData, errorState);
              default:
                return renderReady(asyncData);
            }
          }}
        </LocationProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  }
});

export default Location;
