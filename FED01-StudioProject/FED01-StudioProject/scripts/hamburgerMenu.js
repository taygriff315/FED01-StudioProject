

function toggleNav() {
    let navList = document.getElementById('nav-list');
    navList.classList.toggle('expanded');

    let navBtn = document.getElementById('nav-btn');
    if (navList.classList.contains('expanded')) {
        navBtn.innerHTML = '&times';
    }
    else {
        navBtn.innerHTML = '&#9776';
    }
}