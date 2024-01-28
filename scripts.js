const modalOverlay = document.querySelector('.modal-overlay')
const cardinfo = document.querySelectorAll('.cardinfo')

for (let cardbutton of cardinfo) {
    cardbutton.addEventListener("click", function(){
        const videoId = cardbutton.getAttribute("id")
        window.location.href = `/video?id=${videoId}`
    })
}


const closeModal = document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})
