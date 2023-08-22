// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const allHearts = document.getElementsByClassName("like-glyph")

for (heart of allHearts) {
heart.addEventListener('click', (event) =>{
  const newHeart= event.target
  if (newHeart.textContent == EMPTY_HEART) {
    
  
mimicServerCall ()
.then (response => {
   
  newHeart.textContent = FULL_HEART
  newHeart.className="activated-heart"
})
.catch (response => {
  console.log("This has failed")
  const modal = document.querySelector("#modal")
  modal.className=""
  setTimeout(x => modal.className = "hidden", 3000)
})
  }
  else {
    newHeart.textContent = EMPTY_HEART
    newHeart.className=""
  }
}); 

}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
