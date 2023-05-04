(function(){
    console.log('Début du carrousel')
   let galerie__ouverte = document.querySelector("figure")
   /*---------------------------------- Variables du carrousel */
   let carrousel  = document.querySelector(".carrousel")
   let carrousel__x = document.querySelector(".carrousel__x")
   let carrousel__figure  = document.querySelector(".carrousel__figure")
   let carrousel__form  = document.querySelector(".carrousel__form")
   let bouton_precedent = document.querySelector(".carrousel__fleche__gauche");
   let bouton_suivant = document.querySelector(".carrousel__fleche__droite");

   //let carrousel__fleche__droite  = document.querySelector(".carrousel__fleche__droite")
   //let carrousel__fleche__gauche  = document.querySelector("carrousel__fleche__gauche")
   console.log(carrousel__form.tagName)
   /*---------------------------------- Variables du carrousel */
   let galerie = document.querySelector(".galerie")
   let galerie__img = galerie.querySelectorAll("img")
   // console.log("galerie__img: " + galerie__img.length)
   // console.log(carrousel.tagName)
   /*---------------------------------------------------- positionnement de l'image active du*/
   let index = 0 //identifier l'image courante du carrousel 
   let ancien_index = -1 //identifier image précédante
   let position = 0 //permet d'indexer les images de la galerie et de la 
/**
 * Permet d'initialiser l'ensemble des images du carrousel
 */
   for (const elm of galerie__img)
   {
    elm.dataset.index = position
    elm.addEventListener('mousedown', function(e){
      index = e.target.dataset.index
      afficher_image(index)
      console.log(index)
    })
    creation_img_carrousel(elm)
    creation_radio_carrousel()
   }



   /* ----------------------------------------------------  ouvrir boîte modale */
   galerie__ouverte.addEventListener('mousedown', function(){
       console.log('ouvrir la boîte modale')
       carrousel.classList.add('carrousel--activer')
       
       /*
       https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
       
       propriété classlist.contain('carrousel--activer') permet de vérifier si le carrousel est ouvert
       */ 
   })
   /* ----------------------------------------------------  fermer boîte modale */
   carrousel__x.addEventListener('mousedown', function(){
       console.log('fermer la boîte modale')
       carrousel.classList.remove('carrousel--activer')
   
   })
   
   /** 
    * ajouter_img_dans_carrousel
    * Ajouter l'ensemble des images de la galerie dans la boîte modale carrousel
    */

   


   function creation_img_carrousel(elm){
          //console.log(elm.getAttribute('src'))
          let img = document.createElement('img')
          //img.setAttribute('src', elm.getAttribute('src'))
          //retire les 12 caractères
          let longueur = elm.src.length-12
          //let extension = elm.src.substr(0,-4)
          img.src= elm.src.substr(0,longueur) + ".jpg"
          img.classList.add('carrousel__img')
          //console.log (img.getAttribute('src'))
          carrousel__figure.appendChild(img)
   }
   /**
    * Création d'un radio-bouton
    */
   
   function creation_radio_carrousel(){
    let rad = document.createElement('input')
    console.log(rad.tagName)
    rad.setAttribute('type','radio') //chercher le type radio
    rad.setAttribute('name', 'carrousel__rad') //selectioner le groupe de radio-bouton
    rad.classList.add('carrousel__rad')//permet que une seul bouton est actif
    rad.dataset.index = position //
    position = position + 1 //incrémation de 1
    // position += 1
    // position++
    carrousel__form.appendChild(rad)
    rad.addEventListener('mousedown',function(e){
      console.log(e.target.dataset.index)
      index = e.target.dataset.index
      afficher_image(index)
    })
   }
   
  function afficher_image(index){
    
    if(ancien_index!= -1){
      //carrousel__figure.children[ancien_index].style.opacity = 0
      carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
      carrousel__form.children[ancien_index].checked = false
    }
    //carrousel__figure.children[index].style.opacity = 1
    redimensionner_carrousel()
    carrousel__figure.children[index].classList.add('carrousel__img--activer')
    carrousel__form.children[index].checked = true
    ancien_index = index 
   }
function redimensionner_carrousel(){
  const windowWidth= window.innerWidth
  const windowHeight= window.innerHeight
  const imageWidth = carrousel__figure.children[index].naturalWidth
  const imageHeight =carrousel__figure.children[index].naturalHeight
  
  let carrouselWidth = windowWidth 
  if( carrouselWidth>1000) 
{
  carrouselWidth=windowWidth - windowWidth/2
}
   let carrouselHeight = carrouselWidth * imageHeight/imageWidth
   
   carrousel.style.width = `${carrouselWidth}px`
   carrousel.style.height = `${carrouselHeight}px`
   carrousel.style.top=`${(windowWidth-carrouselHeight)/2}px`
   carrousel.style.left=`${(windowWidth-carrouselWidth)/2}px`
  
  console.log(
  `imageWidth = ${imageWidth}
  imageHeight = ${imageHeight}
  windowWidth = ${windowWidth}
  windowHeight = ${windowHeight}
  
  `)
}

   /*
   permet de vérifier si la classe (carrousel--active) 
   se trouve dans la liste des classes carrousel
   carrousel.classList.contain('carrousel--activer') 
   
   mdn classList.contain()
   
   
   */
   
   //carrousel__fleche__droite
   //carrousel__fleche__gauche
   bouton_precedent.addEventListener('click', function(){
    index--
    if (index==-1){
      index = galerie__img.length -1;
    }
    afficher_image(index);
   })

   bouton_suivant.addEventListener('click', function(){
    index++ 
    if (index==galerie__img.length){
      index = 0;
    }
    afficher_image(index);
   }
  );


   })()//function exécute tout seule