document.querySelectorAll('.toggle-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        const icon = button.querySelector('i');
        const isCollapsed = icon.classList.contains('bi-plus-lg');

        if (isCollapsed) {
            icon.classList.remove('bi-plus-lg');
            icon.classList.add('bi-dash-lg');
        } else {
            icon.classList.remove('bi-dash-lg');
            icon.classList.add('bi-plus-lg');
        }
    });
});
