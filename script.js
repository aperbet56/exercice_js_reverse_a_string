// Exercice JS : reverse a string

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString(".srevne'l à etircé esarhp enu tse icec"));

// Deuxième façon
//const reverseString = (str) => str.split("").reverse().join("");

// La méthode split() divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. La division est effectuée en recherchant un motif ; où le motif est fourni comme premier paramètre dans l'appel de la méthode.

//La méthode reverse() transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.

// La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau. La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
