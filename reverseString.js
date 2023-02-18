function reverseString(str) {

  /*

  Premerierement, on va declaré 
  une variable renverse et on l'attribut 
  a cette variable une valeur vide

  */
  var reverse = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  /*

 En suite on vas retourner
     le parametre de la fonction

  */
  return reverse;
}
console.log(reverseString("cool"));




module.exports = reverseString;