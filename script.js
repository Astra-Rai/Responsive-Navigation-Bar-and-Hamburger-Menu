
const toggleButton = document.getElementsByClassName('toggle-button')[0]//target frist matching element of class 'toggle-button' 
const navbarLinks = document.getElementsByClassName('navbar-links')[0]//target first matching element of class 'navbar-links'

//add event listener to toggle-button class which is housed in toggleButtton variable
//when element with class 'toggle-button' is clicked...
toggleButton.addEventListener('click', () => {
  //toggle elment with active class 
  navbarLinks.classList.toggle('active')
})

/* Notes
const toggleButton = document.getElementsByClassName('toggle-button') // a list of matching elements, *not* the element itself
const toggleButton = document.getElementsByClassName('toggle-button')[0]//target first element in class list






*/