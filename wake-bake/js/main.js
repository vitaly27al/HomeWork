(function () {

    // burger========
    document.addEventListener('click', iconItem)

    function iconItem(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const headerLink = e.target.closest('.header-link')

        if (!burgerIcon && !headerLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body_opened-menu')) {
            document.body.classList.add('body_opened-menu')
        } else {
            document.body.classList.remove('body_opened-menu')
        }
    }

    // modal========

    const modal = document.querySelector('.modal')
    const modalBtn = document.querySelector('.hero_gift-button')

    modal.addEventListener('click', closeModal)
    modalBtn.addEventListener('click', modalOpen)

    function modalOpen(e) {
        e.preventDefault()
        document.body.classList.toggle('body_opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()
        const target = e.target

        if (target.closest('.modal_window-close') || target.classList.contains('modal')) {
            document.body.classList.remove('body_opened-modal')
        }


    }

    // =====tabs==============

    const tabControls = document.querySelector('.tab_controls')
    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab_controls-link')
        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab_controls-link--active')) reutrn

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeContent = document.querySelector('.tab-content--show')
        const activeControl = document.querySelector('.tab_controls-link--active')


        if (activeContent) {
            document.querySelector('.tab-content--show')
        }

        if (activeControl) {
            document.querySelector('.tab_controls-link--active')
        }

        activeContent.classList.remove('tab-content--show')
        activeControl.classList.remove('tab_controls-link--active')

        tabContent.classList.add('tab-content--show')
        tabControl.classList.add('tab_controls-link--active')
    }

    //  accordion

    const accordionLists = document.querySelectorAll('.accordion_list')

    accordionLists.forEach(el => {



        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion_list-item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion_list-item--opened .accordion_list-content')

            const accordionControl = e.target.closest('.accordion_list-control')
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion_list-item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion_list-item--opened');

            if (accordionItem.classList.contains('accordion_list-item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null
            }

        });

    });

    // slider

    new Swiper('.gallery_slider', {

        spaceBetween: 32,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery_pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery_next',
            prevEl: '.gallery_prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }

    });


    // testimonials

    new Swiper('.testimonials_slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials_next',
            prevEl: '.testimonials_prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }
        }
    });


    // inputTel

    const telInputs = document.querySelectorAll ('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99 ')
    im.mask(telInputs)


})()

