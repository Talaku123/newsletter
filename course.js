

let like = 0

function likeButton(){
   
   document.getElementById('like').innerHTML = `<i class="bi bi-hand-thumbs-up-fill"></i> ${like}`

   document.getElementById("like").style.cssText = 

   "color: navy; font-size: 2em; padding-left: 3rem; position: sticky"


   like++
}


let discount = 0

function dislikeButton(){

  document.getElementById("dislike").innerHTML = `<i class="bi bi-hand-thumbs-down-fill"></i> ${discount}`

  document.getElementById("dislike").style.cssText = "color: navy; font-size: 2em"

  discount--

    
}

function subscribe() {

  const clickButton = document.querySelector('.btn')

      if(clickButton.innerText === 'Subscribe'){

          clickButton.innerHTML = '<h5>Subscribed</h5>'
          clickButton.classList.add('is-subscribed')
      
      }else{
        clickButton.innerHTML = '<h6>Subscribe</h6>'
        clickButton.classList.remove('is-subscribed')
  }
}

