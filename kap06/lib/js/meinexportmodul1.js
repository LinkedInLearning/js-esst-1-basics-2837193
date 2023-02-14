// Erweiterung js - identisch mit Modul mit Erweiterung mjs
// Deklarationen
var variable1 = true;
var variable2 = [2,3,5,7,11];
function fkt1(){
    console.log(variable1);
}
function fkt2(){
    console.log(variable2);
}

// Export mit Wertzuweisung auch var oder const - ohne nicht erlaubt
export let antwort=42; 
// Export Funktion mit Deklaration
export function frage() { 
    console.log("Was ist der Sinn des Ganzen?");
 }
// Export Klasse 
export class MeineKlasse { 
    constructor(nname,vname) {
        this.nname = nname;
        this.vname = vname;
      }
 }


// Export Liste mit Verweis auf Funktionsdeklarationen
export { fkt1,fkt2 };
// Export Liste mit deklaraierten Variablen und Alias
export { variable1 as boolVar, variable2 as arrayVar };
// Default-Export des Moduls - nur ein Default-Export pro Modul erlaubt
export { variable2 as default };

