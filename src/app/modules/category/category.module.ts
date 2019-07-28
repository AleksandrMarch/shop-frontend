import { NgModule } from '@angular/core';

import { CategoryComponent } from './category.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: CategoryComponent
    }
];

@NgModule({
    declarations: [
        CategoryComponent
    ],
    imports: [RouterModule.forChild(routes)],
    providers: [],
})
export class CategoryModule { }
