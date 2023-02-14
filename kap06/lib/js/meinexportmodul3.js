// Modul mit Import eines anderen Moduls
import a from "./meinexportmodul2.js"; // Import Konstante aus anderem Modul
// antwort ist default in meinexportmodul2
function ausgabeAntwort(){
    console.log("Die Antwort ist " + a + ".\n");
} 
// Default-Export einer Funktion über Funktionszeiger
export default ausgabeAntwort;
