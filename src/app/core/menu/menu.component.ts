import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {

  public categoryList;

  ngOnInit() {
    this.categoryList = this.getCategoryList();
  }

  private getCategoryList() {
    return [
      {
        title: 'Men',
        id: 1,
        children: [
          {
            title: 'test1',
            id: 1,
            children: [
              {
                title: 'test1',
                id: 1,
                children: [

                ]
              }
            ]
          },
          {
            title: 'test2',
            id: 1,
            children: [

            ]
          }
        ]
      },
      {
        title: 'Women',
        id: 2,
        children: [

        ]
      },
      {
        title: 'Kids',
        id: 3,
        children: [

        ]
      },
      {
        title: 'Sports',
        id: 5,
        children: [

        ]
      }
    ];
  }

}

