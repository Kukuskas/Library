const locationCreateDtoInType = shape({
  location: string(255).isRequired(),
  capacity: integer(10000000).isRequired()
});

const locationUpdateDtoInType = shape({
  id: id().isRequired(),
  location: string(255).isRequired(),
  capacity: integer(10000000).isRequired()
});

const locationListDtoInType = shape({
});

const locationGetByIDDtoInType = shape({
  id: id().isRequired(),
});

const locationDeleteDtoInType = shape({
  id: id().isRequired()
});
