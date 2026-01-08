const items = document.querySelectorAll('.portfolio-item');
const modal = document.getElementById('modal');
const modalBox = document.querySelector('.modal-box');

items.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalBox.style.background = getComputedStyle(item).background;
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
