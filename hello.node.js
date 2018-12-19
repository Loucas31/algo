
/**
 * @name hello.NodeJS
 * @desc Juste pour les algorithmes
 * @author Aélion - Déc. 2018
 * @version 1.0.0
 * @version 1.0.1
 * Externilastion des fonctions dans un fichier externe
 */


/** 
 * Retourne la valeur maximum entre deux valeurs
 * @param {*}currentMax Valeur maximum courante
 * @param {*}value valeur lue dans le tableau
 * @return number la valeur la plus élevée entre currentValue et value
 */
function maxMax(currentMax, value) {
    console.log('Compare : ' + currentMax + ' à ' + value)
    if (value > currentMax) {
        return value;
    } else {
        return currentMax;
    }
}
/** 
* Retourne la valeur maximum entre deux valeurs
* @param {*} currentMin Valeur maximum courante
* @param {*} value valeur lue dans le tableau
* @return number la valeur la plus élevée entre currentValue et value
*/
function minMin(currentMin, value) {
   console.log('Compare : ' + currentMin + ' à ' + value)
   if (value < currentMin) {
       return value;
   } else {
       return currentMin;
   }
}
/** 
* Retourne la valeur maximum entre deux valeurs
* @param {*} currentMM Valeur maximum ou minimum courante
* @param {*} value valeur lue dans le tableau
* @param {*} wantMax true pour demander le max, false pour min
* @return number la valeur la plus élevée entre currentValue et value
*/
function minOrmax(currentMM, value, wantMax = true) {

    if (wantMax) {
        currentMM = maxMax(currentMM, value);
    } else {
        currentMM = minMin(currentMM, value);
    }
    return currentMM;
 }

 /** 
* Retourne un tableau avec tri dans l'odre croissant ou decroissant
* @param {*} tabb Tableau à trier
* @param {*} wantcroissant true croissant, false decroissant
* @return tableau trié
*/

function ordreCroissant(tabb)
{ 
    let temp;
    for (let i = 0; i < tabb.length; i++)
    {
        for (let j = i+1; j < tabb.length; j++)
        {
            if(tabb[j]>tabb[i])
            {
                temp = tabb[j];
                tabb[j] = tabb[i];
                tabb[i] = temp;
            }
        }
        console.log(tabb[i]);



    }
    
}

console.log('Hello world from NodeJS');

// Création d'une variable de type tableau
/**
 * @var array
 * Tableau de nombres entiers
 */

const tablo = [25, 50, 256, 312, 3, 22, 8];
let tablof;
let total = 0;
let max = tablo[0];
let min = tablo[0];
/*  */
// Boucle de parcours du tableau
for (let i = 0; i < tablo.length; i++) {
    if (tablo[i] % 2 == 0) {
        console.log('Indice ' + i + ' est pair ' + tablo[i]);
    } else {
        console.log('Indice ' + i + ' est impair ' + tablo[i]);
    }
    total = total + tablo[i];
    /*if (tablo[i]>max){
        max = tablo[i];*/
        if(i>0){
    /*max = maxMax(max, tablo[i]);
    min = minMin(min, tablo[i]);*/

    max = minOrmax(max, tablo[i], true);
    min = minOrmax(max, tablo[i], false);


}
}

ordreCroissant(tablo);


    

console.log("Le total est " + total);
console.log('le max est ' + max);
console.log('le min est ' + min);

