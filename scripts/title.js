let lastScrollPosition = 0;
window.addEventListener('scroll', function () {
    const subtask = document.querySelector('.subtask');
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > lastScrollPosition) {
        subtask.classList.add('subtask__roll');
    } else if (currentScrollPosition <= 0) {
        subtask.classList.remove('subtask__roll');
    }
    lastScrollPosition = currentScrollPosition;
});