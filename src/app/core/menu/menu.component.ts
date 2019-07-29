import {AfterViewInit, Component, OnInit} from '@angular/core';

import {HttpService} from '../../shared/services/http.service';
import {ENDPOINTS} from '../endpoints';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit, AfterViewInit {

  public categoryList;

  constructor(
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.categoryList = this.getCategoryList();
  }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../../../assets/js/jquery.smartmenus.bootstrap.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  private getCategoryList() {
    return [
      {
        title: 'Men',
        url: 'men',
        id: 1,
        children: [
          {
            title: 'test1',
            url: 'men2',
            id: 1,
            children: [
              {
                title: 'test1',
                url: 'me3n',
                id: 1,
                children: [

                ]
              }
            ]
          },
          {
            title: 'test2',
            url: 'medn',
            id: 1,
            children: [

            ]
          }
        ]
      },
      {
        title: 'Women',
        url: 'mean',
        id: 2,
        children: [

        ]
      },
      {
        title: 'Kids',
        url: 'men',
        id: 3,
        children: [

        ]
      },
      {
        title: 'Sports',
        url: 'men',
        id: 5,
        children: [

        ]
      }
    ];
  }

}

