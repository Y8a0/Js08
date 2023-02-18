function sortByLength(){
    const chaine =[
        "court", 
        "londlong", 
        "court"
    ];
        const chaine_tr = chaine.sort((a,b) => a.length - b.length);
    
    console.log(chaine_tr); 
}
sortByLength();


module.exports = sortByLength;