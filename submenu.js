function subMenu(string) {
    let menu = string

    let list = document.getElementById('list ' + menu)
    let display = window.getComputedStyle(list).getPropertyValue('display')


    if (display == "block") {
        document.getElementById('list ' + menu).style.display = "none"
        document.getElementById("arrow-menu " + menu).src = "images/icon-arrow-down.svg"

    } else {
        document.getElementById('list ' + menu).style.display = "block"
        document.getElementById("arrow-menu " + menu).src = "images/icon-arrow-up.svg"


    }

}

function toggleMenu() {
    let nav = document.getElementById('nav-menu')
    let toggleButton = nav.classList.toggle('active')
    let imagebuttonHamburguer = document.getElementById("img-btn-menu")
    let buttonHamburguer = document.getElementById('btn-menu')
    let background = document.getElementById('background-menu')

    if (toggleButton == true) {
        imagebuttonHamburguer.src = "images/icon-close-menu.svg"
        background.classList.add('active')
        buttonHamburguer.classList.add('active')

    } else {
        imagebuttonHamburguer.src = "images/icon-menu.svg"
        background.classList.remove('active')
        buttonHamburguer.classList.remove('active')
    }



}




window.onclick = (e) => {

    //Fechar menu Mobile 

    let menu = document.getElementById('nav-menu')
    let open = menu.classList.contains('active')
    let pai = menu.contains(e.target)
    if (open && !pai) {
        toggleMenu()

    }

    //Fechar Submenu 

    let list = document.querySelectorAll('.list-submenu')
    let classeComSubmenu = document.querySelectorAll('.with-arrow')
    let displayFeature = window.getComputedStyle(list[0]).getPropertyValue('display')
    let displayCompany = window.getComputedStyle(list[1]).getPropertyValue('display')
    let feature = classeComSubmenu[0].contains(e.target)
    let company = classeComSubmenu[1].contains(e.target)

    if (displayFeature == "block" && !feature && !company) {
        subMenu('feature')
    }
    if (displayCompany == "block" && !feature && !company) {
        subMenu('company')
    }


}