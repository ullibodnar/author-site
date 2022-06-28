const worksTab = document.querySelector('#works-tab')
const publicationsTab = document.querySelector('#publications-tab')
const works = document.querySelector('.material.works')
const publications = document.querySelector('.material.publications')

const onWorksTab = () => {
  if (worksTab.classList.contains('active')) {
  } else {
    worksTab.classList.add('active')
    publicationsTab.classList.remove('active')
    works.classList.toggle('hidden')
    publications.classList.toggle('hidden')
  }
}

const onPublicationsTab = () => {
  if (publicationsTab.classList.contains('active')) {
  } else {
    publicationsTab.classList.add('active')
    worksTab.classList.remove('active')
    works.classList.toggle('hidden')
    publications.classList.toggle('hidden')
  }
}

worksTab.onclick = onWorksTab
publicationsTab.onclick = onPublicationsTab
