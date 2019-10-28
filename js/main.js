const seeMore = document.querySelector('.see-more')
const nexusAnnouncement = document.querySelector('.announcementsblock.expand')

const onSeeMore = () => {
  console.log('toggled')
  seeMore.classList.toggle('toggled')
  nexusAnnouncement.classList.toggle('expanded')
}

seeMore.onclick = onSeeMore
