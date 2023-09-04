const expand = document.querySelector('.expand-button')
const expandText = document.querySelector('#expand-text')
const expandImage = document.querySelector('span.glyphicon')
const nexusAnnouncement = document.querySelector('.scrollableannouncements')

const frontButtonJourneyOngoing = document.querySelector(
  '#front-button-journey-ongoing'
)
const backButtonJourneyOngoing = document.querySelector(
  '#back-button-journey-ongoing'
)
const frontImageJourneyOngoing = document.querySelector(
  '#front-image-journey-ongoing'
)
const backImageJourneyOngoing = document.querySelector(
  '#back-image-journey-ongoing'
)

const frontButtonNexus = document.querySelector('#front-button-nexus')
const backButtonNexus = document.querySelector('#back-button-nexus')
const frontImageNexus = document.querySelector('#front-image-nexus')
const backImageNexus = document.querySelector('#back-image-nexus')

const frontButtonInterchange = document.querySelector(
  '#front-button-interchange'
)
const backButtonInterchange = document.querySelector('#back-button-interchange')
const frontImageInterchange = document.querySelector('#front-image-interchange')
const backImageInterchange = document.querySelector('#back-image-interchange')

const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.right-nav')

const onToggleNav = () => {
  navToggle.classList.toggle('toggled')
  nav.classList.toggle('toggled')
}

const onToggleFrontAndBackButtonJourneyOngoing = () => {
  frontButtonJourneyOngoing.classList.toggle('active')
  backButtonJourneyOngoing.classList.toggle('active')
  frontImageJourneyOngoing.classList.toggle('hidden')
  backImageJourneyOngoing.classList.toggle('hidden')
}

const onToggleFrontAndBackButtonInterchange = () => {
  frontButtonInterchange.classList.toggle('active')
  backButtonInterchange.classList.toggle('active')
  frontImageInterchange.classList.toggle('hidden')
  backImageInterchange.classList.toggle('hidden')
}

const onToggleFrontAndBackButtonNexus = () => {
  frontButtonNexus.classList.toggle('active')
  backButtonNexus.classList.toggle('active')
  frontImageNexus.classList.toggle('hidden')
  backImageNexus.classList.toggle('hidden')
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

frontButtonNexus.onclick = onToggleFrontAndBackButtonNexus
backButtonNexus.onclick = onToggleFrontAndBackButtonNexus

frontButtonInterchange.onclick = onToggleFrontAndBackButtonInterchange
backButtonInterchange.onclick = onToggleFrontAndBackButtonInterchange

frontButtonJourneyOngoing.onclick = onToggleFrontAndBackButtonJourneyOngoing
backButtonJourneyOngoing.onclick = onToggleFrontAndBackButtonJourneyOngoing
