(function(){
    console.log('début du carrousel');
    let bouton = document.querySelector('.carrousel__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');
    //console.log("galerie__img"+ galerie__img.length);
    /*------------------------- ouvrir la boite modale*/
    bouton.addEventListener('mousedown', function(){
        console.log("ouvrir la boîte modale")
        carrousel.classList.add('carrousel--activer')
        ajouter_img_dans_carrousel()
    })
    /*------------------------- fermer boite modale*/ 
    carrousel__x.addEventListener('mousedown', function(){
        console.log("fermer la boîte modale")
        carrousel.classList.remove('carrousel--activer')
    })
    /** 
     * function ajouter_img_dans_carrousel
     * ajouter l'ensemble des img de la galerie dans boite modale carrousel
     */
    function ajouter_img_dans_carrousel(){
        for(const elm of galerie__img){
            //console.log(elm.getAttribute('src'))
            let img =document.createElement('img')
            img.setAttribute('src', elm.getAttribute('src'))
            console.log(img.getAttribute('src'))
        }
    }
})()//function exécute tout seule