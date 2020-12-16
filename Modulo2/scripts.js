const modaloverlay = document.querySelector('modal_overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        modaloverlay.classList.add('active')
    })
}

document.querySelector(".close_modal").addEventListener("click", function() {
    modaloverlay.classList.remove('active')
})