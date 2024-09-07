(function () {

    // program slider

    new Swiper('.programs_slider', {

        spaceBetween: 10,
        slidesPerView: 1,



        navigation: {
            nextEl: '.program_button-next',
            prevEl: '.program_button-prev',
        },

        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            801: {
                spaceBetween: 25,
                slidesPerView: 2.5,
            },
            1101: {
                spaceBetween: 30,
                slidesPerView: 3,
            }
        }

    });

    // accordion

    const accordionList = document.querySelectorAll('.accordion_list')

    accordionList.forEach(el => {



        el.addEventListener('click', (e) => {

            const accordionControl = e.target.closest('.accordion_list-control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            accordionItem.classList.toggle('accordion_item--opened');

            if (accordionItem.classList.contains('accordion_item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null
            }
        });
    });

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

        // aos

        AOS.init(); 

})()