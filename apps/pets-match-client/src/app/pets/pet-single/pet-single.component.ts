import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {API_ENDPOINT, PetDto, PETS_RESOURCE_PATH} from "@pets-match/pets-match-resources";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {PetsService} from "../pets.service";

@Component({
  selector: 'pet-single',
  templateUrl: './pet-single.component.html',
  styleUrls: ['./pet-single.component.scss']
})
export class PetSingleComponent implements OnInit {

  id: string | null = null;
  pet$: Observable<PetDto> | undefined;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private service: PetsService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.pet$ = this.service.findById(this.id)
  }
}
