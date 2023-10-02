console.log('Hello World')
// option-2
function makeBlue(){
    document.body.style.backgroundColor = "blue";
}
// option-3 part-1

const yellow =document.getElementById('makeyellow')
yellow.onclick = makesyellow


function makesyellow() {
    document.body.style.backgroundColor = 'yellow'
    
}
// option-3 part-2

const purple =document.getElementById('makepurple')
purple.onclick = function makespurple() {
    document.body.style.backgroundColor = 'purple'
} 

// option-4
const makePink = document.getElementById('make-pink') ;
makePink.addEventListener('click', makesPink)

function makesPink (){
    document.body.style.backgroundColor ='pink'
}
  
// option-4 part-1
const makeGreen = document.getElementById('make-green') ;
makeGreen.addEventListener('click',  function makesGreen (){
    document.body.style.backgroundColor ='green'
})

// option-4 part final 
document.getElementById('make-red').addEventListener('click', function(){document.body.style.backgroundColor='red'})
