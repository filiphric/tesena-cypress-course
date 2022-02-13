/// <reference types="cypress" />
/*
  ⚠️ vytvor si nový board a vypracuj nasledujúce úlohy
  pomocou .only si môžeš spustiť jeden test
  ℹ️ medzi jednotlivými stavmi si budeš musieť aplikáciu vrátiť do pôvodného stavu
  pomocou klávesy F2 si otvor nástroje, ktoré Ti s tým pomôžu
*/

beforeEach( () => {

  cy
    .visit(); // ⚠️ pridaj adresu k svojmu boardu

})

// #1: vytvor nový zoznam a over, že je viditeľný
it('vytvorenie zoznamu', () => {

})

// #2: vytvor si ešte jeden zoznam a over, že sú na stránke dva
it('overenie počtu zoznamov', () => {

})

// #3: začni tento test s jediným zoznamom na stránke. odstráň ho a over si, že naozaj zmizol
it('odstránenie zoznamu', () => {

})

// #4: vytvor si zoznam a kartu. na kartu klikni a over si, že sa Ti otvoril detail karty
it('overenie zobrazenia detailu karty', () => {

})

// #5: otvor si detail karty a opäť ho zavri. over si, že detail karty zo stránky zmizol
it('zatvorenie detailu karty', () => {

})