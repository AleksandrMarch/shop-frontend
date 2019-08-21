import {Component, OnInit} from '@angular/core';

interface ProductCardItem {
  title: string;
  price: number;
  img: string;
}

interface CategoryItem {
  title: string;
  products: Array<ProductCardItem>;
}

@Component({
  selector: 'app-products-from-categories',
  templateUrl: './products-from-categories.component.html',
  styleUrls: []
})
export class ProductsFromCategoriesComponent implements OnInit {

  public Data: Array<CategoryItem>;

  ngOnInit(): void {
    this.Data = this.getData();
  }

  private getData(): Array<CategoryItem> {
    return [
      {
        title: 'men',
        products: [
          {
            title: 'test',
            price: 100,
            img: ''
          },
          {
            title: 'test',
            price: 100,
            img: ''
          },
          {
            title: 'test',
            price: 100,
            img: ''
          },
          {
            title: 'test',
            price: 100,
            img: ''
          },
          {
            title: 'test',
            price: 100,
            img: ''
          }
        ]
      },
      {
        title: 'sports',
        products: [
          {
            title: 'test',
            price: 100,
            img: ''
          },
          {
            title: 'test',
            price: 100,
            img: ''
          },
          {
            title: 'test',
            price: 100,
            img: ''
          },
          {
            title: 'test',
            price: 100,
            img: ''
          },
          {
            title: 'test',
            price: 100,
            img: ''
          }
        ]
      }
    ];
  }
}
