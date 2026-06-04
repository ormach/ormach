function toggleMenu(){
    document.getElementById("mobile-nav").classList.toggle("offset")
    document.body.classList.toggle('mobileScrollLock')
}

function modal(source) {
    console.log(source);  

    // el('modal').classList.toggle('hide')
    // document.body.classList.toggle('scrollLock')

    // if(source != undefined){
    //     el('modal-img').src = source.childNodes[1].src
    // }
}

function next(){
    console.log(1);
    el('modal-img').setAttribute('src', '../img/work/chain-1280x720.jpg') 
    
}

function el(id){
    return document.getElementById(id)
}

function generateNav(){

    el('desktop-nav').innerHTML = `
        <div id="nav-wrapper" class="breakpoints">

            <!-- Logo -->
            <a href="/index.html" class="logo-container">
                <img class="logo" src="../img/orm-logo.svg" alt="Ormach logo">
            </a>
            
            <!-- Buttons -->
            <div class="link-container">
                <a class="link-btn" href="/index.html">
                    Gallery
                </a>
                <a class="link-btn" href="../projects">
                    Projects
                </a>
                <a class="link-btn" href="../about">
                    About
                </a>

                <a class="link-btn" target="_blank" href="https://ormach.itch.io/">
                    Itch.io
                </a>
            </div>

            <p id="email">pav.ormach@gmail.com</p>
        </div>
    ` 

    el('mobile-nav').innerHTML=`
        <button class="nav-button" onclick="toggleMenu()">

            <img class="logo" src="../img/orm-logo.svg" alt="Ormach logo">
            
            <div class="menu-btn">
                <img src="../img/ico/black/menu.svg">
            </div>

        </button>

        <div class="mobile-links">
            <a class="link-btn" href="/index.html">
                <img src="../img/ico/black/view.svg">
                Gallery
            </a>

            <a class="link-btn" href="../projects">
                <img src="../img/ico/black/repair.svg">
                Project list
            </a>

            <a class="link-btn" href="../about">
                <img src="../img/ico/black/unit.svg">
                About
            </a>

            <a class="link-btn" target="_blank" href="https://discord.gg/qbWS6g5vam"> 
                <img src="../img/ico/black/discord.svg">
                <p style="width: 100%;">Discord</p>
                <img src="../img/ico/black/arrow.svg" style="opacity: 1;">
            </a>

            <a class="link-btn" target="_blank" href="https://ormach.itch.io/">
                <img src="../img/ico/black/shop.svg">
                    <p style="width: 100%;">Shop (itch.io)</p>
                <img src="../img/ico/black/arrow.svg" style="opacity: 1;">
            </a>

            <button class="link-btn" onclick="toggleMenu()">
                <img src="../img/ico/black/close.svg">
            </button>
        </div>
    `
}

function generateFooter(type){
    if (type === "gallery"){
        el('footer').innerHTML = `
            <img class="logo" src="../img/orm-logo.svg" alt="Ormach logo">
    
            <p>
                If you have any questions, send me a note to pav.ormach@gmail.com 
                or find me on <a href="https://discord.gg/qbWS6g5vam" target="_blank">Discord</a>. Let's make you game better! 
            </p>
    
            <div class="footerButtonContainer">
                <a class="link-btn btn-2" href="../">View Gallery -></a>
            </div>
            
            <div class="footerBackground"></div>
        `
    }
    else{

        el('footer').innerHTML = `
            <img class="logo" src="../img/orm-logo.svg" alt="Ormach logo">
    
            <p>
                If you have any questions, send me a note to pav.ormach@gmail.com 
                or find me on <a href="https://discord.gg/qbWS6g5vam" target="_blank">Discord</a>. Let's make you game better! 
            </p>
    
            <div class="footerButtonContainer">
                <a class="link-btn btn-2" href="../about">Learn more about ORMACH -></a>
            </div>
            
            <div class="footerBackground"></div>
        `
    }
}

function generateGallery() {
    for (const [key, value] of Object.entries(galleryContent)) {
        console.log(key);        // "a", "b", "c"
        console.log(galleryContent[key].alt); // access inner object
        let ref = galleryContent[key]

        const div = document.createElement("div"); // create
        div.innerHTML = `
            <img 
                src="../img/work/${ref.src}" 
                alt="${ref.alt}" 
                style="${ref.style }" 
                class="interactive" 
                loading = "lazy"
            >
        ` 
        div.setAttribute('onclick', 'modal(this)')
        div.classList = `img-frame ${ref.class}`      
        el('gallery').appendChild(div)
    }
}

let galleryContent = {

    'chain-cover': {
        src: 'chain-1280x720.jpg',
        alt: 'An illustration of a combat game scene.',
        style: 'width: 900px;',
        class: 'full-width'
    },
    'nether': {
        src: 'nether-1280.jpg',
        alt: 'An illustration of a combat game scene.',
        style: 'width: 1000px;',
        class: 'full-width'
    },
    'scribe-cover': {
        src: 'scribe-1280x720.jpg',
        alt: 'An illustration of a combat game scene.',
        style: 'width: 1000px;',
        class: 'full-width dark'
    },
    'cards': {
        src: 'cards-1280.jpg',
        alt: 'An illustration of a combat game scene.',
        style: 'width: 1000px;',
        class: 'full-width'
    },
    'areas': {
        src: 'areas-1280.jpg',
        alt: 'An illustration of a combat game scene.',
        style: 'width: 1000px;',
        class: 'full-width'
    },
    'char': {
        src: 'char-1280.jpg',
        alt: 'An illustration of a set of items.',
        class: 'full-width',
        style: 'width: 800px;'
    },
    'chains-banner': {
        src: 'chain-banner.jpg',
        alt: 'An illustration of a combat game scene.',
        class: 'full-width banner',
        style: 'width: 240px;'
    },
    'items': {
        src: 'items-1280x720.jpg',
        alt: 'An illustration of a set of items.',
        class: 'full-width',
        style: 'width: 1000px;'
    },
    'env': {
        src: 'env-1280x720.jpg',
        alt: 'An illustration of a combat game scene.',
        class: 'full-width',
        style: 'width: 880px;'
    },
}