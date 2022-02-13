it('class, id, attr', { baseUrl: null }, () => {

  cy
    .visit('./mini-apps/shapes.html');

})

it('cypress príkazy', { baseUrl: null }, () => {

  cy
    .visit('./mini-apps/rainbow.html');

  // označenie prvého elementu
  cy
    .get('li')

  // označenie pomocou indexu
  cy
    .get('li')

  // vyhľadanie child elementu
  cy
    .get('.list')

  // vyhľadanie parent elementu
  cy
    .contains('violet')

});