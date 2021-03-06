const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const blogId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.classList.add('maximize')
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${blogId}`
    })
}

document.querySelector(".close_modal").addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector('.maximize_modal').addEventListener('click', function() {
    modalOverlay.classList.remove('maximize')
})