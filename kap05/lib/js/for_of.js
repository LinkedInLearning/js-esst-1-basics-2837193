const a = ['a', 'b', 'c'];  // Array
var p1 = {                  // JSON
    "nname":"Dent",
    "vname":"Arthur"
};
class Person{
    constructor(nname,vname) {
        this.nname = nname;
        this.vname = vname;
      }
}
let p2 = new Person("Mumm", "Samuel"); // Objekt über Konstruktor der Klasse
const str = "Jerakeen"; // String

const m = new Map([ // Map
    ["Elefant 1", "Berilia"],
    ["Elefant 2", "Tubul"],
    ["Elefant 3", "Groß-T'Phon"],
    ["Elefant 4", "Jerakeen"]
  ]);
const s = new Set([2, 3, 5,7,11,13,17]); // Set
console.log("---- Array ----");
console.log("*** of a")
for (var e of a) {
  console.log(e);
}
console.log("in a *** ")
for (var v in a) {
    console.log(v);
}
console.log("---- String ----");
console.log("*** of str")
for (var e of str) {
  console.log(e);
}
console.log("in str *** ")
for (var v in str) {
    console.log(v);
}
console.log("---- Set ----");
console.log("*** of s")
for (var e of s) {
  console.log(e);
}
console.log("in s *** ")
for (var v in s) {
    console.log(v);
}
console.log("---- Map ----");
console.log("*** of m")
for (var e of m) {
  console.log(e);
}
console.log("in m *** ")
for (var v in m) {
    console.log(v);
}

// Nicht iterierbar
console.log("---- JSON ----");
console.log("*** of p1");
try{
for (var e of p1) {
  console.log(e);
}
}
catch(e){
    console.log("p1 nicht iterierbar");
}

console.log("in p1 *** ")
for (var v in p1) {
    console.log(v);
}
console.log("---- Konstruktor-generiertes Objekt ----");  
console.log("*** of p2")
try{
for (var e of p2) {
  console.log(e);
}
}
catch(e){
    console.log("p2 nicht iterierbar");
}
console.log("in p2 *** ")
for (var v in p2) {
    console.log(v);
}  
