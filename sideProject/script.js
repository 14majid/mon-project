const classes = document.querySelectorAll('.head');
const list = document.querySelectorAll('.student-list');

classes.forEach((classElement, index) => {
  classElement.addEventListener('click', () => {
    if(list[index].style.display === "none") {
      list[index].style.display = "block"
    } else {
      list[index].style.display = "none"
    }
  });
});



const bars = document.querySelector('.bars')
const closeBtn = document.querySelector('.close-btn')
const liste = document.querySelector('#navbar ul')

bars.addEventListener('click', () => {
  liste.style.width = '100%'
})

closeBtn.addEventListener('click', () => {
  liste.style.width = '0'
})

anSpecial.addEventListener('mouseover', () => {
  losy.forEach(los => {
    los.style.display = 'block'
  });
})

anSpecial.addEventListener('mouseout', () => {
  losy.forEach(los => {
    los.style.display = 'none'
  });
})

let year = document.querySelector('.date')
let date = new Date().getFullYear()
year.innerHTML = date