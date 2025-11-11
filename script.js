//UPPGIFT 2
//Const används då man vill deklarera en variabel som är konstant. Const är scope bundet och kan inte kallas utanför ett givet block.
//Let används när jag vill deklarera en variabel som kan ändras i framtiden, som ålder. Let är scope bundet och kan inte kallas utanför ett block.
//Var är inte scope bundet och kan alltså kallas utanför ett block. Därför kan jag bara kalla på 'intresse' utanför blocket med en console.log
//Jag kan inte kalla på const och let utanför blocket genom console.log för att de befinner sig inom blocket.
/* {
  const namn = "Raf";
  let ålder = 28;
  var intresse = "mat";

  console.log(
    "Hej jag heter " +
      namn +
      " och är " +
      ålder +
      " och har ett intresse för " +
      intresse
  );
} */

//const namn = "Pori";
//console.log(intresse + namn);

/*UPPGIFT 3 */
//console.log("9" == 9); //Två stycken = tecken betyder att den jämför värde utan att bry sig om datatypen.
//console.log("9" === 9); //Tre stycken = tecken jämför den både värde och datatyp.

//NaN = Not a number, representerar ett misslyckat talresultat.
//Null = Ett värde som finns men medvetet om att det är tomt.
//Undefined = Ett värde som inte finns. Det betyder att något inte fått ett värde ännu.
//console.log(NaN === NaN); //När NaN jämförs med NaN så är det alltid false. Det är bara så med NaN.
//console.log(null == undefined); //Här jämförs om null är undefined vilket är sant.
//console.log(null === undefined); //Här jämförs om null och undefined är samma värde och datatyp vilket inte är sant.

//let resultat = undefined ? "Truthy" : "Falsy";
//console.log("Undefined är: ", resultat);

//UPPGIFT 4
//I detta fall har vi använt ett funktionsuttryck. Denna sparas i en variabel och funktionen skapas när koden körs och inte i förväg.
//Om man anropar en function inom ett visst scope så har den endast de värdena som finns i deta scopet.
//Exempelvis påverkas inte myName som befinner sig utanför scopet för funktionen greet utav det som befinner sig inom den.
//Om jag ändrar let myName efter att jag deklarerat den så kommer den få det nya värdet. Man kan alltså ändra den hur många gånger som helst och det är alltid det nya värdet som gället.
//En variabel är en datatyp
const greet = function (myName) {
  return "Hej " + myName;
};
console.log(greet("George"));

let myName = "Hej Isabell";
myName = "Hej Stefan";
console.log(myName);
