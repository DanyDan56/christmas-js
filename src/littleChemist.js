/*
 * Mélangez des produits et découvrez ce qu'il se passe grâce au jeu du "petit chimiste" !
 * Attention ce jeu est interdit aux moins de 16 ans. Le père noël ne saurait être tenu pour responsable
 * de toute brûlure / explosion / maux de tête ou autres désagréments
 *
 * la fonction littleChemist reçoit en paramètre un objet avec des mixtures de 4 couleurs (rouge, jaune, bleu, verte)
 * - Après mélange, si la mixture reste de couleur primaire alors on retourne "Il ne se passe rien..."
 * - Après mélange, si la mixture est verte : "Hum, ça sent bon !"
 * - Après mélange, si la mixture est violette : "Waaa, la mixture devient solide !"
 * - Après mélange, si la mixture est orange : "Hahahahaha, mais pourquoi je rigole ! Hahahaha !"
 * - Dans les autres cas, "Tous aux abris, ça va exploser !"
 *
 * Exemple :
 *
 * let mixture = {
 *      yellowMixture: true,
 *      greenMixture: true,
 *      blueMixture: true,
 *      redMixture: false
 * };
 *
 * alors littleChemist(mixture) retournera : "Hum, ça sent bon !"
 *
 */
function littleChemist(mixture) {
   // violette
   if(mixture.redMixture && mixture.blueMixture && !mixture.greenMixture && !mixture.yellowMixture)
      return "Waaa, la mixture devient solide !";
   // orange
   else if(mixture.redMixture && mixture.yellowMixture && !mixture.greenMixture && !mixture.blueMixture)
      return "Hahahahaha, mais pourquoi je rigole ! Hahahaha !";
   // verte
   else if(mixture.greenMixture && !mixture.redMixture )
      return "Hum, ça sent bon !";
   // primaire
   else if(((mixture.redMixture && !mixture.blueMixture && !mixture.yellowMixture) ||
            (!mixture.redMixture && mixture.blueMixture && !mixture.yellowMixture) ||
            (!mixture.redMixture && !mixture.blueMixture && mixture.yellowMixture)) && !mixture.greenMixture)
      return "Il ne se passe rien...";
   else
      return "Tous aux abris, ça va exploser !";
}

export { littleChemist };
