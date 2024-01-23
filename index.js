////////////////////////////////// NAVBAR
const bars = document.querySelector('.bars')
const closeBtn = document.querySelector('.close-btn')
const liste = document.querySelector('#navbar ul')

const anSpecial = document.querySelector('.trye')
const losy = document.querySelectorAll('.suib li')
const suib = document.querySelector('.suib')
let add = 0

bars.addEventListener('click', () => {
  liste.style.width = '100%'
})

closeBtn.addEventListener('click', () => {
  liste.style.width = '0'
})

/////////////////////////////////// NAVBAR END



/////////////////////////////////// HEADER
let currentindex = 0

let allSlisde = document.querySelectorAll('.slides')

let nextButtton = document.querySelector('[data-next-button]')
let prevButtton = document.querySelector('[data-prev-button]')

nextButtton.addEventListener('click', ()=> {
   if (currentindex === allSlisde.length - 1) {
    currentindex = 0;
  } else {
    currentindex++;
  }

  mySlide(currentindex)
})

prevButtton.addEventListener('click', ()=> {
  if (currentindex < 1) {
     currentindex = allSlisde.length - 1;
  }else {
    currentindex--;
  }

  mySlide(currentindex)
})


function mySlide(index) {
  for(var i = 0; i < allSlisde.length; i++) {
    allSlisde[i].style.display = 'none'
  }

  allSlisde[currentindex].style.display = 'block'
}

let interVal = setInterval(()=>{
  if (currentindex === allSlisde.length - 1) {
    currentindex = 0;
  } else {
    currentindex++;
  }
  mySlide(currentindex)
}, 7000)

///////////////////////////////////////// HEADER END




////////////////////////////////////// TEXTAREA
const body = document.body.clientWidth
const textArea = document.querySelector('textarea')

if (body < 760) {
  textArea.cols = "20"
}
/////////////////////////////////////// TEXTAREA END


/////////////////////////////////////// COPYWRIGHT
let year = document.querySelector('.date')
let date = new Date().getFullYear()
year.innerHTML = date
/////////////////////////////////////// COPYWRIGHT END




mySlide(currentindex)
