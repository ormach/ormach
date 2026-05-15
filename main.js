function toggleMenu(){
    document.getElementById("mobile-nav").classList.toggle("offset")
    document.body.classList.toggle('scrollLock')
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
    'char': {
        src: 'char-1280.jpg',
        alt: 'An illustration of a set of items.',
        class: 'full-width',
        style: 'width: 1000px;'
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

    // 'dungeon': {
    //     src: 'dungeon-1280x720.jpg',
    //     alt: 'An illustration of a combat game scene.',
    //     style: 'width: 1280px;'
    // },
    // 'char': {
    //     src: 'chars-1280x720.jpg',
    //     alt: 'An illustration of a combat game scene.',
    //     style: 'width: 1280px;'
    // },
    // 'mech': {
    //     src: 'mech-920x600.png',
    //     alt: 'Vector illustration of a mech.',
    //     style: 'height: 600px;'
    // },
    // 'card1': {
    //     src:   'ang-160x240.png',
    //     alt:   'Vector illustration of a card, that contains an angel.',
    //     style: 'width: 160px;'
    // },
    // 'card2': {
    //     src:   'acc-160x240.png',
    //     alt:   'Vector illustration of a card, that contains a jumping rogue.',
    //     style: 'width: 160px;'
    // },
    // 'gates': {
    //     src:   'key-520x520.png',
    //     alt:   'Vector illustration of a group of characters in front of a fire.',
    //     style: 'width: 520px;'
    // },
    // 'unit1': {
    //     src:   'unit-400x400.png',
    //     alt:   'Vector illustration of two game characters.',
    //     style: 'width: 400px;'
    // },
    // 'items2': {
    //     src:   'item-400x400.png',
    //     alt:   'Vector illustration of game items.',
    //     style: 'width: 400px;'
    // },
    // 'unit2': {
    //     src:   'unit2-400x400.png',
    //     alt:   'Vector illustration of two characters.',
    //     style: 'width: 400px;'
    // },
    // 'card3': {
    //     src:   'potential-160x240.png',
    //     alt:   'Illustration of a card with an archer.',
    //     style: 'width: 160px;'
    // },
    // 'card4': {
    //     src:   'space-160x240.png',
    //     alt:   'Illustration of a card.',
    //     style: 'width: 160px;'
    // },
    // 'card5': {
    //     src:   'velocity-160x240.png',
    //     alt:   'Illustration of a card.',
    //     style: 'width: 160px;'
    // },
    // 'rex': {
    //     src:   'rex-440x356.png',
    //     alt:   'Vector illustration of a cartoon dinosaur.',
    //     style: 'width: 440px; bottom: 0px; left: 0px;'
    // },
    // 'items3': {
    //     src:   'items2-200x200.png',
    //     alt:   'Vector icons for game items.',
    //     style: 'width: 200px;'
    // },
    // 'jar': {
    //     src:   'jar-122x96.png',
    //     alt:   'Vector illustration of a cartoon jar.',
    //     style: 'width: 244px;'
    // },
    // 'tech1': {
    //     src:   'tech-300x300.png',
    //     alt:   'Vector illustration of laptop and a Boston Dynamics Spot robot dog.',
    //     style: 'width: 300px;'
    // },
    // 'tech2': {
    //     src:   'tech2-300x300.png',
    //     alt:   'Vector illustration of a robot manipulator arm, and a jet engine.',
    //     style: 'width: 300px;'
    // },
    // 'tech3': {
    //     src:   'tech3-300x300.png',
    //     alt:   'Vector illustration of a 3D modeling software and a 3D printer.',
    //     style: 'width: 300px;'
    // },
    // 'map': {
    //     src:   'map-980x846.png',
    //     alt:   'Vector illustration of a gallery map.',
    //     style: 'width: 980px;',
    //     class: 'transparent'
    // },
}