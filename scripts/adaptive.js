//handle adaptive stuff
let contact1 = document.querySelector('.contact1').children[0].children
let contact2 = document.querySelector('.contact2').children[0].children
let contact3 = document.querySelector('.contact3').children[0].children

if (window.outerWidth <= 767) {
    function swap(elements, index_A, index_B) {
        elements.map(el => {
            //swap first name and phone for mob.version according to the mob.design in the footer
            let temp = el[index_A].textContent
            el[index_A].textContent = el[index_B].textContent
            el[index_B].textContent = temp  
            //remove colon according to the mob.design
            let modified = el[index_B].textContent.replace(':', '')
            el[index_B].textContent = modified
        })
    }

    swap([contact1, contact2, contact3], 1, 2)
}

