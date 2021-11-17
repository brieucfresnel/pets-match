import {Injectable} from '@angular/core';
import {API_ENDPOINT, PetDto, PETS_RESOURCE_PATH} from '@pets-match/pets-match-resources';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<PetDto[]> {
    return this.httpClient.get<PetDto[]>(`${API_ENDPOINT}${PETS_RESOURCE_PATH}`)
  }

  findById(id: string | null): Observable<PetDto> {
    return this.httpClient.get<PetDto>(`${API_ENDPOINT}${PETS_RESOURCE_PATH}/${id}`);
  }

  add(pet: PetDto) {
    console.log('PET')
    console.log(pet)
    this.httpClient.post(`${API_ENDPOINT}${PETS_RESOURCE_PATH}`, {
      ...pet
    }).subscribe()
  }
}
