import { Component, Input, OnInit } from '@angular/core';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 // import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'my-slider',
  imports: [],
  templateUrl: './my-slider.html',
  styleUrl: './my-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MySlider {
  @Input()
  images: Array<string> = [
    "img/services/new/building_maintenance.jpg",
    "img/services/new/facility_management_1.jpg",
    "img/services/new/facility_manager_2.jpg",
     
  ]
}
