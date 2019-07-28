import {Component, OnInit} from '@angular/core';

interface GalleryItem {
  img: string;
  title: string;
  description: string;
  href: string;
}

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: []
})
export class ProductGalleryComponent implements OnInit {

  public GalleryItems: Array<GalleryItem>;

  ngOnInit(): void {
    this.GalleryItems = this.getGalleryItems();
  }

  private getGalleryItems(): Array<GalleryItem> {
    return [
      {
        img: '',
        title: 'buy',
        description: '40% off',
        href: ''
      },
      {
        img: '',
        title: 'buy',
        description: '40% off',
        href: ''
      },
      {
        img: '',
        title: 'buy',
        description: '40% off',
        href: ''
      },
      {
        img: '',
        title: 'buy',
        description: '40% off',
        href: ''
      },
      {
        img: '',
        title: 'buy',
        description: '40% off',
        href: ''
      },
    ];
  }
}
