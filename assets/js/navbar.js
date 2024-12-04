    // Cuando el documento esté listo
    document.addEventListener('DOMContentLoaded', function() {
        // Obtén el navbar
        const navbar = document.querySelector('.navbar');

        // Función para cambiar el fondo del navbar al hacer scroll
        function handleScroll() {
            if (window.scrollY > 0) {
                // Si se hace scroll, agrega la clase 'scrolled'
                navbar.classList.add('scrolled');
                navbar.classList.remove('transparent');
            } else {
                // Si no hay scroll, agrega la clase 'transparent'
                navbar.classList.remove('scrolled');
                navbar.classList.add('transparent');
            }
        }

        // Ejecuta la función cada vez que se haga scroll
        window.addEventListener('scroll', handleScroll);

        // Inicializa el estado del navbar (en caso de que haya scroll al cargar la página)
        handleScroll();
    });

    // Obtener todos los enlaces de la barra de navegación
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Añadir un evento de clic a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Eliminar la clase 'active' de todos los enlaces
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Añadir la clase 'active' al enlace clicado
        this.classList.add('active');
    });
});


