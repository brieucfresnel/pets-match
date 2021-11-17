import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { PageHomeComponent } from './pages/page-home/page-home.component';

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent
  },
  {
    path: 'pets',
    loadChildren: () => import('./pets/pets.module').then(module => module.PetsModule)
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
