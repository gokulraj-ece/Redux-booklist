export function selectBook(book) {
  // actioncreator (selectBook) returns an action (an object) that
  // further describes the event (payload) and a type/purpose (property of object)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
