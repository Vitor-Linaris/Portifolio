"use strict";var slide_image_cases=new Swiper(".slide-image-cases",{slidesPerView:2.3,spaceBetween:20,loop:!0,centeredSlides:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,pagination:{el:".s-cases .ctrl-slide .pagination-box-cases"},navigation:{nextEl:".s-cases .ctrl-slide .btn-next",prevEl:".s-cases .ctrl-slide .btn-prev"}}),slide_about_case=new Swiper(".slide-about-case",{spaceBetween:40,direction:"vertical",loop:!1,pagination:{el:".s-cases .ctrl-slide .page-fraction",type:"fraction",clickable:!1},navigation:{nextEl:".s-cases .ctrl-slide .btn-next",prevEl:".s-cases .ctrl-slide .btn-prev"},simulateTouch:!1,thumbs:{swiper:slide_image_cases}});