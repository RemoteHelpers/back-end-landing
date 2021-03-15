class ModalHandler {
    mobileMenu = document.getElementById('burger-img')
    closeBtn = document.getElementsByClassName('mobile-close-btn')[0]
    nav = document.getElementsByTagName('nav')[0]

    applyStyle = (element, styles) => {
        const key = Object.keys(styles)[0]
        const value = Object.values(styles)[0]
        element.style[key] = value
    } 

    handleOpenModal() {
        this.mobileMenu.addEventListener("click", () => {
            this.nav.classList = 'mobile-nav-menu'
            this.applyStyle(this.mobileMenu, {'display': 'none'})
            this.applyStyle(this.closeBtn, {'display': 'block'})
        }
        )

    }

    handleCloseModal() {
        this.closeBtn.addEventListener("click", () => {
            this.nav.classList.replace('mobile-nav-menu', 'hidden')
            this.applyStyle(this.mobileMenu, {'display': 'block'})
        }) 

        if (this.nav.classList.value === 'mobile-nav-hidden') {
            window.addEventListener("click", e => {
                if (this.nav.contains(e.target)) {
                    this.nav.classList.replace('mobile-nav-menu', 'hidden')
                    this.applyStyle(this.mobileMenu, {'display': 'block'})
                }
        })
        }
    }

    initialize() {
        this.handleOpenModal()
        this.handleCloseModal()
    }
}

const modalHandler = new ModalHandler()
modalHandler.initialize()