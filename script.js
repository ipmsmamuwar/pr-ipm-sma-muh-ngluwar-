// Fitur Fullscreen
const fsBtn = document.getElementById('fullscreen-btn');
fsBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fsBtn.innerText = "Keluar Layar Penuh";
    } else {
        document.exitFullscreen();
        fsBtn.innerText = "Mode Layar Penuh 📱";
    }
});

// Fitur Lightbox (Klik Gambar Membesar)
const modal = document.getElementById('modal');
const modalImg = document.getElementById('full-img');
const closeBtn = document.querySelector('.close');
const images = document.querySelectorAll('.zoom-img');

images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

const modal = document.getElementById('modal');
const modalImg = document.getElementById('full-img');
const closeBtn = document.querySelector('.close');
const images = document.querySelectorAll('.zoom-img');

images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }
});

if(closeBtn) {
    closeBtn.onclick = () => modal.style.display = "none";
}

window.onclick = (e) => {
    if(e.target == modal) modal.style.display = "none";
}