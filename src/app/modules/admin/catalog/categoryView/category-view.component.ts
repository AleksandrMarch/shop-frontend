import {Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpService} from '../../../../shared/services/http.service';
import {ENDPOINTS} from '../../../../core/endpoints';
import {Category} from '../../../../core/interfaces';
import {AdminCatalogService} from '../../services/admin-catalog.service';

@Component({
  selector: 'app-admin-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: []
})

export class CategoryViewComponent implements OnInit {

  private category: FormGroup;
  private categories: Category[];

  constructor(
    public dialogRef: MatDialogRef<CategoryViewComponent>,
    private http: HttpService,
    private catalogService: AdminCatalogService
  ) { }

  ngOnInit(): void {
    this.category = new FormGroup(
      {
        title: new FormControl(''),
        description: new FormControl(''),
        parentId: new FormControl(''),
      }
    );

    this.catalogService.getAllCategories()
      .subscribe((categories: Category[]) => this.categories = categories);
  }

  save(): void {
    this.http.post(ENDPOINTS.admin_categories, this.category.value)
      .subscribe(
        response => {
          this.closeDialog();
        }
      );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
