const bookCreateDtoInType = shape({
  id: id().isRequired(),
  title: string(200).isRequired(),
  author: string(200),
  location: string(200)
});

const bookListDtoInType = shape({
  title: string(200),
  author: string(200),
  location: string(200)
});

const bookUpdateDtoInType = shape({
  id: id().isRequired(),
  title: string(200),
  author: string(200),
  location: string(200)
});

const bookDeleteDtoInType = shape({
  id: id().isRequired()
});

const bookGetBookDtoInType = shape({
  id: id().isRequired(),
});