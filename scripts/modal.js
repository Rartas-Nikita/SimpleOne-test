const buttonElem = document.querySelector('.modal__btn');
const modalElem = document.querySelector('.modal');
const closeModalBtns = document.querySelectorAll('.modal__close');

export const closeModal = () => {
    modalElem.style.visibility = 'hidden';
    modalElem.style.opacity = 0;
}

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};

buttonElem.addEventListener('click', openModal);


closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

document.addEventListener('click', handleClick, false);
document.addEventListener('keydown', handleKeyPress, false);

function handleClick(event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
}

function handleKeyPress(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

