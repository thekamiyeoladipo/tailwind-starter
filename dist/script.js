document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('translate-x-full');
    document.getElementById('overlay').classList.remove('hidden');
});

document.getElementById('close-btn').addEventListener('click', function () {
    closeMenu();
});

document.getElementById('overlay').addEventListener('click', function () {
    closeMenu();
});

function closeMenu() {
    document.getElementById('mobile-menu').classList.add('translate-x-full');
    document.getElementById('overlay').classList.add('hidden');
}

document.addEventListener('click', function (event) {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');

    // Check if the click is outside the menu and overlay
    if (!menu.contains(event.target) && !menuBtn.contains(event.target) && !closeBtn.contains(event.target)) {
        closeMenu();
    }
});
