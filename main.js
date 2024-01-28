//--------------------------------------------------------------------------//
// Header change  

function headerToContent() {
    root.style.setProperty('overflow', 'scroll');
    dimmer.style.display = "none";
    headerWrapper.classList.add("slide-out");
    headerHolder.classList.add("slide-out");
    contactInfo.classList.add("slide-out");
    body.style.display = "contents";
    headerBeforeSlider.style.display = 'block';

    headerWrapper.addEventListener("animationend", function () {
        headerWrapper.style.display = "none";
    }, { once: true });
}

var headerBeforeSlider = document.getElementById('header-before-slider');
var headerAfterSlider = document.getElementById('header-after-slider');
var headingWrapper = document.querySelector('.heading-wrapper');
var headerWrapper = document.querySelector('.header-wrapper');
var headerHolder = document.querySelector('.header-holder');
var contactInfo = document.querySelector('.contact-info');
var unfoldLine = document.getElementById('ri-menu-unfold-line');
var landingpage = document.getElementById('landingpage');
var btnSchool1 = document.getElementById('school-button1');
var btnSchool2 = document.getElementById('school-button2');
var dimmer = document.getElementById('dimmer');
var root = document.querySelector(':root');
var body = document.querySelector('body');
var main = document.querySelector('main');


window.onscroll = function () { headerUnfoldFunction() };

function headerUnfoldFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        unfoldLine.style.background = "white";
        unfoldLine.style.color = "black";
        unfoldLine.style.boxShadow = "0px 0px 20px 2px black";
    } else {
        unfoldLine.style.background = "transparent";
        unfoldLine.style.boxShadow = "none";
        unfoldLine.style.color = "white";

    }
}

headerBeforeSlider.addEventListener("click", function () {
    root.style.setProperty('overflow', 'hidden');
    headerWrapper.style.display = "flex";
    dimmer.style.display = "flex";
    headerBeforeSlider.style.display = 'none';
    headerWrapper.classList.add("slide-in");
    headerHolder.classList.add("slide-in");
    headerWrapper.classList.remove("slide-out");
    headerHolder.classList.remove("slide-out");
    main.style.gridColumn = '2 / span 1';
});

headerAfterSlider.addEventListener("click", function () {
    headerToContent()
});

dimmer.addEventListener('click', function () {
    headerToContent()
});

//--------------------------------------------------------------------------//
// Header-Text Color change
var navItems = document.querySelectorAll('.header-list li a');
var dimmer = document.getElementById('dimmer');
var sections = document.querySelectorAll('section');

var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

function scrollToSection(targetId) {
    var targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

navItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        var targetId = item.getAttribute('href').substring(1);
        scrollToSection(targetId);
        headerToContent();
        navItems.forEach(function (navItem) {
            navItem.classList.remove("active");
        });

        item.classList.add("active");
    });
});

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var targetId = entry.target.getAttribute('id');
      navItems.forEach(function (navItem) {
        if (navItem.getAttribute('href') === '#' + targetId) {
          navItems.forEach(function (item) {
            item.classList.remove('active');
          });
          navItem.classList.add('active');
        }
      });
    }
  });
}, options);

sections.forEach(function (section) {
  observer.observe(section);
});

//--------------------------------------------------------------------------//
// Contact Overlay

var contactBtn = document.getElementById("contact-btn");
var contactInfo = document.getElementById("contact-info");
var arrow = document.getElementById("arrow");

contactBtn.addEventListener("click", function () {
    contactInfo.style.display = "grid";
    contactInfo.classList.remove("slide-out");
    contactInfo.classList.add("slide-in");
});

arrow.addEventListener("click", function () {
    contactInfo.classList.add("slide-out");

    // Add an animationend event listener to hide contact-info after the slide-out animation
    contactInfo.addEventListener("animationend", function () {
        contactInfo.style.display = "none";
    }, { once: true });
});


//--------------------------------------------------------------------------//
// School slider stop

var btnSchool1 = document.getElementById('school-button1');
var btnSchool2 = document.getElementById('school-button2');
var scroller1 = document.getElementById('scroller1');
var scroller2 = document.getElementById('scroller2');

btnSchool1.addEventListener('click', function () {
    if (btnSchool1.innerHTML == 'stop') {
        this.innerHTML = 'start';
        scroller1.setAttribute('data-animated', 'false');
    } else if (btnSchool1.innerHTML == 'start') {
        this.innerHTML = 'stop';
        scroller1.setAttribute('data-animated', 'true');
    }
});

btnSchool2.addEventListener('click', function () {
    if (btnSchool2.innerHTML == 'stop') {
        this.innerHTML = 'start';
        scroller2.setAttribute('data-animated', 'false');
    } else if (btnSchool2.innerHTML == 'start') {
        this.innerHTML = 'stop';
        scroller2.setAttribute('data-animated', 'true');
    }
});

//--------------------------------------------------------------------------//
// Experience Image reveal

const experienceImages = [
    document.getElementById('experience-image1'),
    document.getElementById('experience-image2'),
    document.getElementById('experience-image3')
]

const schoolTextWrappers = [
    document.getElementById('school-text-wrapper1'),
    document.getElementById('school-text-wrapper2'),
    document.getElementById('school-text-wrapper3')
]

var schoolTextWrapper1 = document.getElementById('school-text-wrapper1');
var schoolTextWrapper2 = document.getElementById('school-text-wrapper2');
var schoolTextWrapper3 = document.getElementById('school-text-wrapper3');
var experienceImage1 = document.getElementById('experience-image1');
var experienceImage2 = document.getElementById('experience-image2');
var experienceImage3 = document.getElementById('experience-image3');
var experienceBtn1 = document.getElementById('experience-btn1');
var experienceBtn2 = document.getElementById('experience-btn2');
var experienceBtn3 = document.getElementById('experience-btn3');

experienceImages.forEach(function (images) {
    images.addEventListener('mouseleave', () => {
        cursorBig.classList.remove('hover__big');
        cursorSmall.classList.remove('hover__small');
    });
})

experienceBtn1.addEventListener('click', function () {
    schoolTextWrapper1.style.transform = "translateX(-100%)"
    if (schoolTextWrapper1.style.transform = "translateX(-100%)") {
        experienceImage1.addEventListener('mouseover', () => {
            cursorBig.classList.add('hover__big');
            cursorSmall.classList.add('hover__small');
        })
    }
})

experienceImage1.addEventListener('click', function () {
    schoolTextWrapper1.style.transform = "translateX(0%)"
    if (schoolTextWrapper1.style.transform = "translateX(0%)") {
        experienceImage1.addEventListener('mouseover', () => {
            cursorBig.classList.remove('hover__big');
            cursorSmall.classList.remove('hover__small');
        });
    }
})

experienceBtn2.addEventListener('click', function () {
    schoolTextWrapper2.style.transform = "translateX(100%)"
    if (schoolTextWrapper2.style.transform = "translateX(100%)") {
        experienceImage2.addEventListener('mouseover', () => {
            cursorBig.classList.add('hover__big');
            cursorSmall.classList.add('hover__small');
        })
    }
})

experienceImage2.addEventListener('click', function () {
    schoolTextWrapper2.style.transform = "translateX(0%)"
    if (schoolTextWrapper2.style.transform = "translateX(0%)") {
        experienceImage2.addEventListener('mouseover', () => {
            cursorBig.classList.remove('hover__big');
            cursorSmall.classList.remove('hover__small');
        });
    }
})

experienceBtn3.addEventListener('click', function () {
    schoolTextWrapper3.style.transform = "translateX(-100%)"
    if (schoolTextWrapper3.style.transform = "translateX(-100%)") {
        experienceImage3.addEventListener('mouseover', () => {
            cursorBig.classList.add('hover__big');
            cursorSmall.classList.add('hover__small');
        })
    }
})

experienceImage3.addEventListener('click', function () {
    schoolTextWrapper3.style.transform = "translateX(0%)"
    if (schoolTextWrapper3.style.transform = "translateX(0%)") {
        experienceImage3.addEventListener('mouseover', () => {
            cursorBig.classList.remove('hover__big');
            cursorSmall.classList.remove('hover__small');
        });
    }
})

//--------------------------------------------------------------------------//
// Image auto scroller - School

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
addAnimation();

function addAnimation() {
    scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

//--------------------------------------------------------------------------//
// Experience button effects 

const data = [
    {
        descBtn: 'desc-btn-gimp',
        descImgCon: 'desc-image-container-gp',
        className: 'new-background-gimp',
        imgURL: './images, gifs, videos/Experience/Gimp, Photoshop/blur-gradient-gimp.png',
        imginfo: './images, gifs, videos/Experience/Gimp, Photoshop/gimp.png'
    },
    {
        descBtn: 'desc-btn-photoshop',
        descImgCon: 'desc-image-container-gp',
        className: 'new-background-photoshop',
        imgURL: './images, gifs, videos/Experience/Gimp, Photoshop/blur-gradient-photoshop.png',
        imginfo: './images, gifs, videos/Experience/Gimp, Photoshop/automatische-auswahl-photoshop-cc-2018.jpg'
    },
    {
        descBtn: 'desc-btn-wordpress',
        descImgCon: 'desc-image-container-wordpress',
        className: 'new-background-wordpress',
        imgURL: './images, gifs, videos/Experience/Wordpess/blur-gradient-wordpress.png',
        imginfo: './images, gifs, videos/Experience/Wordpess/wordpress-screen-themes.png'
    },
    {
        descBtn: 'desc-btn-windows',
        descImgCon: 'desc-image-container-win',
        className: 'new-background-windows',
        imgURL: './images, gifs, videos/Experience/Windows/blur-gradient-win.png',
        imginfo: './images, gifs, videos/Experience/Windows/windows-11-start-dark.jpg'
    },
    {
        descBtn: 'desc-btn-figma',
        descImgCon: 'desc-image-container-figma',
        className: 'new-background-figma',
        imgURL: './images, gifs, videos/Experience/Figma/blur-gradient-figma.png',
         imginfo: './images, gifs, videos/Experience/Figma/Figma_akrXQubUY4.png'
    },
    {
        descBtn: 'desc-btn-ms',
        descImgCon: 'desc-image-container-ms',
        className: 'new-background-ms',
        imgURL: './images, gifs, videos/Experience/MS/blur-gradient-microsoft.png',
         imginfo: './images, gifs, videos/Experience/MS/ms office .png'
    },
    {
        descBtn: 'desc-btn-vsc',
        descImgCon: 'desc-image-container-vsc',
        className: 'new-background-vsc',
        imgURL: './images, gifs, videos/Experience/VSC/blur-gradient-vsc.png',
         imginfo: './images, gifs, videos/Experience/VSC/1200px-VS_Code_1.36.0-insider.png'
    },
    {
        descBtn: 'desc-btn-pc',
        descImgCon: 'desc-image-container-pc',
        className: 'new-background-pc',
        imgURL: './images, gifs, videos/Experience/PC/blur-gradient-pc.png',
         imginfo: './images, gifs, videos/Experience/PC/computer inside.jpg'
    },
    {
        descBtn: 'desc-btn-html',
        descImgCon: 'desc-image-container-html',
        className: 'new-background-html',
        imgURL: './images, gifs, videos/Experience/HTML, CSS, JS/blur-gradient-html.png',
         imginfo: './images, gifs, videos/Experience/HTML, CSS, JS/html inside.png'
    },
    {
        descBtn: 'desc-btn-css',
        descImgCon: 'desc-image-container-html',
        className: 'new-background-css',
        imgURL: './images, gifs, videos/Experience/HTML, CSS, JS/blur-gradient-css.png',
         imginfo: './images, gifs, videos/Experience/HTML, CSS, JS/css inside.png'
    },
    {
        descBtn: 'desc-btn-js',
        descImgCon: 'desc-image-container-html',
        className: 'new-background-js',
        imgURL: './images, gifs, videos/Experience/HTML, CSS, JS/blur-gradient-js.png',
         imginfo: './images, gifs, videos/Experience/HTML, CSS, JS/js inside.png'
    }
];

data.forEach(({ descBtn, descImgCon, className, imgURL, imginfo }) => {
    const descBtnElement = document.getElementById(descBtn);
    const descImgConElement = document.getElementById(descImgCon);

    descBtnElement.addEventListener('mouseover', () => {
        descImgConElement.classList.add(className);
    });

    descBtnElement.addEventListener('mouseleave', () => {
        descImgConElement.classList.remove(className);
    });

    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        .${className}::before {
            background-image: url("${imgURL}");
            opacity: 1;
            transition: opacity 0.4s;
        }
        .${descBtn}:hover::before {
            opacity: 1;
        }
        .${descBtn}::before {
            position: absolute;
            content: "";
            inset: 0;
            background-image: url("${imgURL}");
            box-shadow: 0px 0px 10px 3px rgba(78, 75, 72, 0.4);
            transition: opacity 0.4s;
            opacity: 0;
            position: absolute;
            z-index: -1;
        }
        .${className} {
            position: relative;
        }
    `;

    if (imginfo) {
        styleElement.innerHTML += `
            .${className}::after {
                content: "";
                background-image: url("${imginfo}");
                background-size: cover;
                position: absolute;
                inset: 50%;
                transform: translate(calc(-50%), -50%);
                box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.4);
            
                border-radius: 2em;
                width: 80%; 
                height: 80%; 
                transition:  0.4s;
                z-index: 2;
            }
            .${descBtn}:hover .${className}::after {
                opacity: 1;
                transition:  0.4s;
            }
        `;
    }
    document.head.appendChild(styleElement);
});

//--------------------------------------------------------------------------//
// Scroll reveal effect -> School Grid

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const sr = ScrollReveal({
        distance: "55px",
        duration: 2000,
        delay: 450,
        reset: false
    });
    
    // school grid scroll reveal
    sr.reveal(".school-row1", { delay: 50, origin: "top" });
    sr.reveal(".school-text-right", { delay: 75, origin: "top" });
    sr.reveal(".school-row2", { delay: 25, origin: "top" });
    sr.reveal(".school-text-left", { delay: 125, origin: "top" });
    
    // experience card scroll reveal
    sr.reveal(".desc-gimp", { delay: 125, origin: "top" });
    sr.reveal(".desc-wordpress", { delay: 135, origin: "top" });
    sr.reveal(".desc-windows", { delay: 135, origin: "top" });
    sr.reveal(".desc-figma", { delay: 135, origin: "top" });
    sr.reveal(".desc-ms", { delay: 135, origin: "top" });
    sr.reveal(".desc-vsc", { delay: 135, origin: "top" });
    sr.reveal(".desc-computer", { delay: 135, origin: "top" });
    sr.reveal(".desc-html", { delay: 135, origin: "top" });
    
}


//--------------------------------------------------------------------------//
// Image Preview 

var previewContainer = document.getElementById('image-preview');
function showImagePreview(imageUrl) {

    previewContainer.innerHTML = '';
    var img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Image Preview';
    previewContainer.appendChild(img);
    previewContainer.classList.add('active');
    previewContainer.onclick = function () {
        previewContainer.classList.remove('active');
    };
}

//--------------------------------------------------------------------------//
// Custome Cursor position and interaction

var cursorSmall = document.querySelector('.small');
var cursorBig = document.querySelector('.big');
var button = document.querySelectorAll('button');
var a = document.querySelectorAll('a');
var i = document.querySelectorAll('i');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorBig.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorSmall.style.left = x + 'px';
    cursorSmall.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
    cursorBig.classList.add('click');
    cursorSmall.classList.add('hover__small')
});

document.addEventListener('mouseup', function () {
    cursorBig.classList.remove('click')
    cursorSmall.classList.remove('hover__small')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursorBig.classList.add('hover__big');
        cursorSmall.classList.add('hover__small');
    });
    item.addEventListener('mouseleave', () => {
        cursorBig.classList.remove('hover__big');
        cursorSmall.classList.remove('hover__small');
    });
})

button.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursorBig.classList.add('hover__big');
        cursorSmall.classList.add('hover__small');
    });
    item.addEventListener('mouseleave', () => {
        cursorBig.classList.remove('hover__big');
        cursorSmall.classList.remove('hover__small');
    });
})

i.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursorBig.classList.add('hover__big');
        cursorSmall.classList.add('hover__small');
    });
    item.addEventListener('mouseleave', () => {
        cursorBig.classList.remove('hover__big');
        cursorSmall.classList.remove('hover__small');
    });
})
