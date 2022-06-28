const expand = document.querySelector('.expand-button')
const expandText = document.querySelector('#expand-text')
const expandImage = document.querySelector('span.glyphicon')
const nexusAnnouncement = document.querySelector('.scrollableannouncements')
const frontButton = document.querySelector('#front-button')
const backButton = document.querySelector('#back-button')
const frontImage = document.querySelector('#front-image')
const backImage = document.querySelector('#back-image')

const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.right-nav')

const onToggleNav = () => {
  navToggle.classList.toggle('toggled')
  nav.classList.toggle('toggled')
}

const onToggleFrontAndBackButton = () => {
  frontButton.classList.toggle('active')
  backButton.classList.toggle('active')
  frontImage.classList.toggle('hidden')
  backImage.classList.toggle('hidden')
}

const onExpand = () => {
  expand.classList.toggle('toggled')
  nexusAnnouncement.classList.toggle('collapsed')

  if (expandImage.classList.contains('glyphicon-plus-sign')) {
    expandImage.classList.remove('glyphicon-plus-sign')
    expandImage.classList.add('glyphicon-minus-sign')
    expandText.textContent = 'Collapse'
  } else {
    expandImage.classList.remove('glyphicon-minus-sign')
    expandImage.classList.add('glyphicon-plus-sign')
    expandText.textContent = 'Expand'
  }
}

var mobileView = window.matchMedia('max-width: 800px;')
var w = window.innerWidth

console.log(w)

const onMobile = mobileView => {
  mobileView.matches ? console.log('mobile') : console.log('desktop')
}

onMobile(mobileView)
mobileView.addListener(onMobile)

navToggle.onclick = onToggleNav
expand.onclick = onExpand
frontButton.onclick = onToggleFrontAndBackButton
backButton.onclick = onToggleFrontAndBackButton
