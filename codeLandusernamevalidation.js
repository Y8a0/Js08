// Définir la fonction CodelandUsernameValidation
function CodelandUsernameValidation(str) {
  /*

  premerierement on va Vérifier si la 
  chaîne est comprise entre 4 et 25 caractères

  */
  if (str.length < 4 || str.length > 25) {
    return false;
  }
  /* 
  En suite vérifier si le nom 
  d'utilisateur commence par une lettre
  */
  if (!/^[a-zA-Z]/.test(str)) {
    return false;
  }
  /* 
  Vérifier si le nom d'utilisateur ne 
  contient que des lettres, des chiffres 
  et des soulignements
  */
  if (!/^[a-zA-Z0-9_]+$/.test(str)) {
    return false;
  }
  /* 
  Vérifier si le nom d'utilisateur ne
   se termine pas par un soulignement
   */
  if (str.endsWith('_')) {
    return false;
  }
  /* Et en fin si toutes les règles sont 
  respectées, renvoyer true
  */
  return true;
}
console.log(CodelandUsernameValidation("u__hello_world123")); 
console.log(CodelandUsernameValidation("aa_")); 


module.exports = codeLandusernamevalidation;