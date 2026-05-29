import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'v4-my-slider',
  imports: [],
  templateUrl: './my-slider.html',
  styleUrl: './my-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class V4MySlider implements OnInit {
  images = [
    "v4/img/compressed/hero_section_4_1600.webp",
    "img/services/new/compressed/construction_worker_and_maintenance_1440.webp",
    "v4/img/compressed/hero_section_6_1600.webp",
    "img/services/new/compressed/facility_management_1_1440.webp",
    "v4/img/compressed/hero_section_5_1600.webp",
    "img/services/new/compressed/facility_management_1440.webp",
    "v4/img/compressed/hero_section_3_1600.webp",
    "img/services/new/compressed/facility_manager_1440.webp",
    "img/services/compressed/concierge_1440.webp",
    
    "img/services/new/compressed/housekeeping_team_1440.webp",
    "v4/img/compressed/hero_section_2_1600.webp",
    "img/services/new/compressed/janitorial_hospital_1440.webp",
    "v4/img/compressed/hero_section_1_1600.webp",
    "img/services/new/compressed/janitorial_1440.webp",
    "img/services/compressed/security_guard_1440.webp",
    "img/services/compressed/staffing_solution_1440.webp"
    // "img/services/new/compressed/facility_management_1_1440.webp",
    // "img/services/new/compressed/facility_management_1440.webp",
    

    // "v4/img/hero_section.jpg",
    // "img/services/new/compressed/facility_management_1_1440.webp",
    // "img/services/new/compressed/facility_management_1440.webp",
    // "v4/img/hero_section_1.jpg",
    // "v4/img/hero_section_2.jpg",
    // "v4/img/hero_section_3.jpg",
    // "v4/img/hero_section_4.jpg",
    // "v4/img/hero_section_5.jpg",
    // "v4/img/hero_section_6.jpg"


  ]

  platformId = inject(PLATFORM_ID);



  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      
    const swiperEl = document.querySelector('swiper-container');

  // const swiperEl = document.querySelector('swiper-container');

  // swiper parameters
  const swiperParams = {
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
    on: {
      init() {
        // ...
      },
    },
  };
  // now we need to assign all parameters to Swiper element
  Object.assign(swiperEl!, swiperParams);

  // and now initialize it
  swiperEl!.initialize();
    // document.querySelector('.hero-section')?.setAttribute('style', `--current-image: url('${this.images[0]}')`)
  }
  }
}
