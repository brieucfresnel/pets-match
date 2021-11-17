import {Injectable} from '@nestjs/common';
import {API_ENDPOINT, MEETAPET_API_ENDPOINT, PetDto, PETS_RESOURCE_PATH} from "@pets-match/pets-match-resources";
import {HttpService} from "@nestjs/axios";
import {map, tap} from "rxjs/operators";

@Injectable()
export class PetsService {

  constructor(private httpService: HttpService) {
  }

  findAll() {
    return this.httpService.get(MEETAPET_API_ENDPOINT).pipe(
      map(r => r.data)
    )
  }

  findById(id: string) {
    return this.httpService.get(`${MEETAPET_API_ENDPOINT}/${id}`).pipe(map(response => {
      return response.data;
    }))
  }

  post(pet: PetDto) {
    this.httpService.post(`${MEETAPET_API_ENDPOINT}`, pet).pipe().subscribe();
  }

  delete(id: number) {
    return id;
  }

  patch(pet: PetDto) {
    return pet;
  }
}
