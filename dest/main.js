
//Loading 
function initLoading() {
    let loadCount = 0;
    let img = document.querySelectorAll('img').length;
    let container = document.querySelector('body');
    let imgLoaded = imagesLoaded(container);
    imgLoaded.on('progress', (instance) => {
        loadCount++;
        let percent = Math.floor((loadCount / img) * 100);
        handlePercent(percent);
    }).on('always', (instance) => {
        console.log('always');
    }).on('fail', (instance) => {
        console.log('fail');
    }).on('done', (instance) => {
        console.log('done');
        hideLoading();
    });
    function handlePercent(percent) {
        const progress = document.querySelector('.loading__inner-progress');
        const loadingPercent = document.querySelector('.loading__percent');
        progress.style.width = `${percent}%`;
        loadingPercent.innerHTML = `${percent}%`;
    }
    function hideLoading() {
        const loading = document.querySelector('.loading');
        const body = document.querySelector('body');
        loading.classList.add('--is-loaded');
        body.classList.remove('--disable-scroll');
    }
}
initLoading();

//Navigation 
function handleNav() {
    document.addEventListener('DOMContentLoaded', function () {
        const menu = document.querySelector('.header__right-menu');
        const header = document.querySelector('header');
        const nav = document.querySelector('.navagation')
        menu.addEventListener('click', function () {
            menu.classList.toggle('active')
            header.classList.toggle('none')
            nav.classList.toggle('active-nav')
        })
    })
}
handleNav();

//Change color background
function changeBg() {
    const header = document.querySelector(".header");
    const navigation = document.querySelector(".navagation");
    const menuButton = document.querySelector(".header__right-menu");
    let isNavigationOpen = false;

    if (navigation) {
        navigation.addEventListener("transitionend", function () {
            isNavigationOpen = navigation.classList.contains("active-nav");
        });
    }

    if (menuButton) {
        menuButton.addEventListener("click", function () {
            header.classList.toggle("bg-change");
        });
    }
    window.addEventListener("scroll", function () {
        if (!isNavigationOpen) {
            const scrollY = window.scrollY;
            const heightHeader = header.clientHeight;

            if (!header.classList.contains('none')) {
                if (scrollY >= heightHeader) {
                    header.classList.add("bg-change");
                } else {
                    header.classList.remove("bg-change");
                }
            } else {
                header.classList.remove("bg-change");
            }
        }
    });
}
changeBg();

//Accordion
function accordion() {
    const item = document.querySelectorAll(".accordion__content");
    if (item) {
        item.forEach((items) =>
            items.addEventListener("click", function () {
                items.classList.toggle("--active")
            })
        );
    }
}
accordion();

//Flickity user say 
window.addEventListener('load', function(){
    function resP(){
        const flickityContainer = document.querySelector('.users__list-wrap');
        if (!flickityContainer) {
            return; // Nếu không tồn tại, thoát khỏi hàm
        }
        const carousel = new FlickityResponsive(flickityContainer, {
            cellAlign: "center",
            contain: true,
            draggable: ">1",
            prevNextButtons: false,
            wrapAround: true,
            groupCells: 2,
            freeScroll: false,
            responsive: [
                {
                    breakpoint: 991.98,
                    settings: {
                        groupCells: 1,
                    }
                }
            ]
        });
                function handleDots() {
            let dotsFlickity = document.querySelector('.flickity-page-dots');
            let dotsUsers = document.querySelector('.users__dots');
            dotsUsers.appendChild(dotsFlickity);
        }
        handleDots();
    }
    resP()
})

//Popup video
function popupVideo() {
    const video = document.querySelector('.getstarted .getstarted__img');
    const modal = document.querySelector('.popupvideo');
    const iFrame = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe');
    const close = document.querySelector(".popupvideo .popupvideo__inner .popupvideo__inner-close");

    // Kiểm tra xem các phần tử đã tồn tại
    if (!video || !modal || !iFrame || !close) {
        return;
    }

    video.addEventListener('click', function () {
        modal.classList.add('active');
        let dataID = video.getAttribute("data-video-src");
        iFrame.setAttribute("src", `https://www.youtube.com/embed/${dataID}?autoplay=1`);
    });

    function closeVideo() {
        modal.classList.remove("active");
        iFrame.setAttribute("src", "");
    }

    modal.addEventListener("click", function () {
        closeVideo();
    });

    close.addEventListener("click", function () {
        closeVideo();
    });
}
popupVideo();

//Validate form 
function validateForm() {
    const submit = document.querySelector(".btnsend");
    const nameEle = document.querySelector("#name");
    const emailEle = document.querySelector("#email");
    const subEle = document.querySelector("#subject");
    const messEle = document.querySelector("#message");
    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const subError = document.querySelector("#subError");
    const messError = document.querySelector("#messError");
    if (submit) {
        submit.addEventListener('click', function (e) {
            // Reset error messages and borders for all fields
            nameError.innerHTML = "";
            nameEle.style.border = "none";
            emailError.innerHTML = "";
            emailEle.style.border = "none";
            subError.innerHTML = "";
            subEle.style.border = "none";
            messError.innerHTML = "";
            messEle.style.border = "none";

            // Name
            let nameValue = nameEle.value;
            if (nameValue.trim() === "") {
                nameError.innerHTML = "Please fill in this field";
                nameError.style.visibility = "visible";
                nameEle.style.border = "1px solid #EE0303";
                e.preventDefault();
            } else {
                nameError.style.visibility = "hidden";
            }

            // Email
            let emailValue = emailEle.value;
            if (emailValue.trim() === "") {
                emailError.innerHTML = "Please fill in this field";
                emailError.style.visibility = "visible";
                emailEle.style.border = "1px solid #EE0303";
                e.preventDefault();
            } else {
                emailError.style.visibility = "hidden";
            }

            //Subject
            let subValue = subEle.value;
            if (subValue.trim() === "") {
                subError.innerHTML = "Please fill in this field";
                subError.style.visibility = "visible";
                subEle.style.border = "1px solid #EE0303";
                e.preventDefault();
            } else {
                subError.style.visibility = "hidden";
            }

            //Message
            let messValue = messEle.value;
            if (messValue.trim() === "") {
                messError.innerHTML = "Please fill in this field";
                messError.style.visibility = "visible";
                messEle.style.border = "1px solid #EE0303";
                e.preventDefault();
            } else {
                messError.style.visibility = "hidden";
            }
        });
    }

}
validateForm();

//Processbar
function progressbar() {
    const progress = document.querySelector('.progress__bar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progressBar = (window.scrollY / totalHeight) * 100;
    progress.style.width = progressBar + '%';
}
window.addEventListener('scroll', progressbar);

//Active menu
function activeMenu() {
    const menuItems = document.querySelectorAll('.header__left-menu li a');
    const currentURL = window.location.href;

    if (menuItems) {
        menuItems.forEach((menuItem) => {
            const menuItemURL = menuItem.getAttribute('href');
            if (currentURL.includes(menuItemURL)) {
                menuItem.classList.add('--active');
            }
        });
    }
}
activeMenu();



window.addEventListener('load', () => {
    handleNav();
    changeBg();
    accordion();
    validateForm();
})

