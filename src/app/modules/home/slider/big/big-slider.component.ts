import {Component, OnInit} from '@angular/core';

interface SliderItem {
  img: string;
  href: string;
  button_title: string;
  title: string;
  description: string;
  additional_text: string;
}

@Component({
  selector: 'app-big-slider',
  templateUrl: './big-slider.component.html',
  styleUrls: []
})
export class BigSliderComponent implements OnInit {

  public SliderItems: Array<SliderItem>;

  ngOnInit() {
    this.SliderItems = this.getSliderItems();
  }

  private getSliderItems(): Array<SliderItem> {
    return [
      {
        img: '',
        href: '',
        button_title: 'shop now',
        title: 'Men Collection',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.',
        additional_text: 'Save Up to 40% Off'
      },
      {
        img: '',
        href: '',
        button_title: 'shop now',
        title: 'Jeans Collection',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.',
        additional_text: 'Save Up to 40% Off'
      },
      {
        img: '',
        href: '',
        button_title: 'shop now',
        title: 'Dids Collection',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.',
        additional_text: 'Save Up to 40% Off'
      }
    ];
  }
}
