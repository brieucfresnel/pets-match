import {Component, Input, OnInit} from '@angular/core';
import {PetDto} from "@pets-match/pets-match-resources";

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent {

  @Input() data: PetDto | undefined;

}
