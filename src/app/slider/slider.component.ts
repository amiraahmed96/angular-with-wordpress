import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  dynamicSlides = [
    {
      id: 'slide'+1,
      src:'../../assets/images/slide1.webp',
      alt:'Side 1',
      title:'Side 1',
      header: 'Portable bluetooth',
      slideTitle: 'Speaker with subwoofer',
      slidePara: 'Professional Portable Bluetooth speakers with subwoofer USB FM '
    },
    {
      id: 'slide'+2,
      src:'../../assets/images/slide1.webp',
      alt:'Side 2',
      title:'Side 2',
      header: 'Portable bluetooth',
      slideTitle: 'Speaker with subwoofer',
      slidePara: 'Professional Portable Bluetooth speakers with subwoofer USB FM '
    },
    {
      id: 'slide'+3,
      src:'../../assets/images/slide2.webp',
      alt:'Side 3',
      title:'Side 3',
      header: 'Portable bluetooth',
      slideTitle: 'Speaker with subwoofer',
      slidePara: 'Professional Portable Bluetooth speakers with subwoofer USB FM '
    },
    {
      id: 'slide'+4,
      src:'../../assets/images/slide2.webp',
      alt:'Side 4',
      title:'Side 4',
      header: 'Portable bluetooth',
      slideTitle: 'Speaker with subwoofer',
      slidePara: 'Professional Portable Bluetooth speakers with subwoofer USB FM '
    }
  ]

  constructor() { }
 customOptions: OwlOptions = {
  loop: true,
  autoplay: false,
  center: true,
  dots: true,
  autoHeight: true,
  autoWidth: true,
  navText: ['&#8249', '&#8250;'],
  items: 1,
  margin:10,
  //  responsive: {
  //    0: {
  //      items: 1 
  //    },
  //    400: {
  //      items: 1
  //    },
  //    760: {
  //      items: 1
  //    },
  //    1000: {
  //      items: 1
  //    }
  //  },
  //  nav: true
 }
}
