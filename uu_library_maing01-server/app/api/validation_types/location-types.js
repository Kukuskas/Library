const locationCreateDtoInType = shape({
  name: string(255).isRequired(),
  capacity: integer(10000000).isRequired(),
  id: id().isRequired(),
});

const locationUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(255).isRequired(),
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
