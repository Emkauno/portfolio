    window.onload = () => {

        const menuToggle = (boton, menu, content) => {

            boton.onclick = () => {
                boton.classList.contains('is-active') ? (
                    boton.classList.remove('is-active'),
                    menu.classList.remove('active'),
                    content.forEach((item) => {
                        item.classList.remove('active')

                    })
                ) : (
                        boton.classList.add('is-active'),
                        menu.classList.add('active'),
                        content.forEach((item) => {
                            item.classList.add('active')
                        })
                    )
            }
        }


        menuToggle(document.querySelector('.hamburger'), document.querySelector('.nav__content'), document.querySelectorAll('.main-content'));
    }
