## Tesena Cypress kurz
Ahoj! Volám sa Filip Hric a toto sú materiály k online Tesena Cypress kurzu. V tomto repozitári nájdše všetky cvičenia z videí, ako aj aplikáciu, ktorú v kurze používam.

### Technické požiadavky
- node.js v12 a vyššie
- git
- textový editor (VS code alebo iný)

### Inštalácia
Nie je nič jednoduchšie! Postačia Ti dva kroky:

```
git clone https://github.com/filiphric/tesena-cypress-course
cd tesena-cypress-course
npm install
```

Skripty nainštalujú všetko potrebné.

### Spustenie aplikácie
Príkazom:
```
npm start
```
Tento príkaz spustí aplikáciu na lokalite `http://localhost:3000`

Backend sa nachádza na `localhost:3001` no má routovaný alias cez `localhost:3000/api`.

Mimochodom, databáza je súbor `database.json` v zložke `trelloapp/backend/data`. Databázu môžeš teda ručne prepísať a naloadovať aplikáciu nanovo, alebo jednoducho sledovať, čo sa v nej deje.

### Cvičenia
Všetky cvičenia sa nachádzajú v zložke `cypress/integration` pod jednotlivými kapitolami.

### Workshop-scripts
Pre jednoduchšiu navigáciu v kurze som vytvoril paŕ workshop skriptov, ktoré urobia to, že naplnia databázu pred spustením testov. Vyhneš sa tak neustálym úpravám dát v aplikácii. Tieto zmeny sú však viazané na názov súboru, preto ich prosím nemeň.
