const locationCreateDtoInType = shape({
  name: string(255).isRequired(),
  capacity: integer(10000000).isRequired(),
});

const locationUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(255).isRequired(),
  capacity: integer(10000000).isRequired(),
  filled: integer(10000000)
});

const locationListDtoInType = shape({
  name: string(255),
  capacity: integer(10000000)
});

const locationGetByIDDtoInType = shape({
  id: id().isRequired(),
});

const locationDeleteDtoInType = shape({
  id: id().isRequired()
});
