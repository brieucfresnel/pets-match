import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {API_ENDPOINT, PetDto, PETS_RESOURCE_PATH} from "@pets-match/pets-match-resources";
import {Observable} from "rxjs";
import {PetsService} from "../pets.service";

@Component({
  selector: 'pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  pets$: Observable<PetDto[]> | null = null;

  constructor(private service: PetsService) {

  }

  ngOnInit(): void {
    this.pets$ = this.service.findAll();
  }

}
