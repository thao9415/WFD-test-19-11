import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './awesome/list/list.component';
import {AddComponent} from './awesome/add/add.component';
import {DetailComponent} from './awesome/detail/detail.component';
import {EditComponent} from './awesome/edit/edit.component';
import {DeleteComponent} from './awesome/delete/delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'list/detail/:id',
    component: DetailComponent
  },
  {
    path: 'list/edit/:id',
    component: EditComponent
  },
  {
    path: 'list/delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
