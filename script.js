/* UPPGIFT 2----------------------------------------------------------------------------------------
Const används då man vill deklarera en variabel som är konstant. Const är scope bundet och kan inte kallas utanför ett givet block.
Let används när jag vill deklarera en variabel som kan ändras i framtiden, som ålder. Let är scope bundet och kan inte kallas utanför ett block.
Var är inte scope bundet och kan alltså kallas utanför ett block. Därför kan jag bara kalla på 'intresse' utanför blocket med en console.log
Jag kan inte kalla på const och let utanför blocket genom console.log för att de befinner sig inom blocket. */

{
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
}

let ålder = 35;
const namn = "Jack";
console.log(intresse + namn + ålder);

/*UPPGIFT 3-------------------------------------------------------------------------------------------
Två stycken = tecken betyder att den jämför värde utan att bry sig om datatypen.
Tre stycken = tecken jämför den både värde och datatyp. */
/* 
NaN = Not a number, representerar ett misslyckat talresultat.
Null = Ett värde som finns men medvetet om att det är tomt.
Undefined = Ett värde som inte finns. Det betyder att något inte fått ett värde ännu. */

console.log("9" == 9); //Här jämförs om null är undefined vilket är sant.
console.log("9" === 9); //Här jämförs om null och undefined är samma värde och datatyp vilket inte är sant.

console.log(NaN === NaN); //När NaN jämförs med NaN så är det alltid false. Det är bara så med NaN.
console.log(null == undefined);
console.log(null === undefined);

let resultat = undefined ? "Truthy" : "Falsy";
console.log("Undefined är: ", resultat);

/*
När ett uttryck står inne i en ternary/if så tolkas det som truthy eller falsy. 
Eftersom undefined är falsy kommer uttrycket undefined ? "Truthy" : "Falsy" att välja "Falsy".*/


/* 
UPPGIFT 4-------------------------------------------------------------------------------------------
Det finns tre vanliga sätt vi kan anropa funktioner. Exempelvis med en funktionsdeklaration kan anropas före där den står i koden. 
Arrowfunktion precis som funktionsuttryck, kan endast anropas efter att variabeln fått sitt värde.
I detta fall har vi använt ett funktionsuttryck. Denna sparas i en variabel och funktionen skapas när koden körs och inte i förväg. 
Om man anropar en function inom ett visst scope så har den endast de värdena som finns i detta scopet.
Exempelvis påverkas inte myName som befinner sig utanför scopet för funktionen greet utav det som befinner sig inom den.
Om jag ändrar let myName efter att jag deklarerat den så kommer den få det nya värdet. Man kan alltså ändra den hur många gånger som helst och det är alltid det nya värdet som gäller. */

const greet = function (myName) {
  return "Hej " + myName;
};
console.log(greet("George"));

let myName = "Hej Isabell";
myName = "Hej Stefan";
console.log(myName);

/* Förklaring av parameter: En parameter är ett namn som man kan skriva i en funktionsdeklaration, exempelvis: function add(x, y) där x och y är parametrar.
Förklaring av argument: Argumentet är det faktiskta värdet du skickar in när man anropar funktionen; add(4, 5) där 4 och 5 är argument
Förklaring av variabel: En namngiven behållare för en viss data i koden. Detta kan befinna sig utanför eller innanför funktionen. Exempelvis; let result = 9; där result är själva variabeln, alltså behållaren.
 */
