class InputHandler {
    constructor(inputIds, button) {
        this.inputIds = inputIds
        this.button = document.getElementById(button)
    }

    initialize() {
        this.inputIds.forEach(i => {
            let inputField = document.getElementById(i)
            inputField.addEventListener('input', () => {
                    this.validateInputs(inputField)
                    this.checkInputEntries(this.inputIds)
            }) 
        })
    }
    checkInputEntries(fields) {
        const check = (arr, el, newArr) => {
            newArr = arr.map(f => {
                el = document.getElementById(f).value
                return el
            })
            if (!newArr.every(el => el.length > 0)) {
                this.disableButton()
            } else this.enableButton()


        }
        check(fields)
    }

    validateInputs(input) {
        if (input.value) {
            input.nextElementSibling.classList = ''
            input.parentElement.style.borderBottom = '1px solid #fff'
            input.previousElementSibling.classList.replace('danger', 'hidden')
            this.displayCustomMessage(input, false)
        } else {
            input.nextElementSibling.classList = 'hidden'
            input.parentElement.style.borderBottom = '1px solid red'
            input.previousElementSibling.classList.replace('hidden', 'danger')
            this.displayCustomMessage(input, true)
        }

    }

    enableButton() {
        this.button.classList.remove('disabled')
        this.button.removeAttribute('disabled', '')
    }

    disableButton() {
        this.button.classList.add('disabled')
        this.button.setAttribute('disabled', '')
    }

    displayCustomMessage(input, show) {
        if (show) {
            if (input.id === 'name') {
                input.previousElementSibling.innerText = 'Пожалуйста, введите ваше имя'
            } else if (input.id === 'email') {
                input.previousElementSibling.innerText = 'Пожалуйста, введите ваш email'
            } else {
                input.previousElementSibling.innerText = 'Пожалуйста, введите ваш номер телефона'
            }

        } else {
            input.previousElementSibling.innerText = ''
        }
    }
}

const inputIds = ['name', 'email', 'telephone']
const button = 'submit'
const inputHandler = new InputHandler(inputIds, button)
inputHandler.initialize()