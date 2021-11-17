import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetComponent } from './pet/pet.component';
import { RouterModule } from '@angular/router';
import {PetSingleComponent} from "./pet-single/pet-single.component";
import {PetCardComponent} from "./pet-card/pet-card.component";
import { PetsAddComponent } from './pets-add/pets-add.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes = [
  {
    path: '',
    component: PetsListComponent
  },
  {
    path: 'pet/:id',
    component: PetSingleComponent
  },
  {
    path: 'ajouter',
    component: PetsAddComponent
  }
]

@NgModule({
  declarations: [
    PetsListComponent,
    PetComponent,
    PetCardComponent,
    PetSingleComponent,
    PetsAddComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [

  ]
})
export class PetsModule { }
