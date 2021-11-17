import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PetDto} from '@pets-match/pets-match-resources';
import {PetsService} from "../pets.service";

@Component({
  selector: 'pets-add',
  templateUrl: './pets-add.component.html',
  styleUrls: ['./pets-add.component.scss']
})
export class PetsAddComponent {

  constructor(private service: PetsService) {
  }

  submitted = false

  formGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required, Validators.minLength(5), Validators.maxLength(20)
    ]),
    lastName: new FormControl('', [
      Validators.minLength(5), Validators.required, Validators.maxLength(20)
    ]),
    avatar: new FormControl(null, []),
    birthDate: new FormControl('', [
      Validators.required
    ]),
    coverPicture: new FormControl('', []), type: new FormControl('', [
      Validators.required
    ]),
    summary: new FormControl('', [
      Validators.required
    ]),
  })

  save($event: Event) {
    console.log(this.formGroup.controls.lastName.errors)
    $event.preventDefault();
    this.submitted = true

    if (this.formGroup.valid) {
      const pet: PetDto = {
        id: (Math.random() + 1).toString(36).substring(24),
        firstName: this.formGroup.controls.firstName.value,
        lastName: this.formGroup.controls.lastName.value,
        avatarPictureUrl: 'https://picsum.photos/500/500',
        birthDate: this.formGroup.controls.birthDate.value,
        coverPictureUrl: 'https://picsum.photos/1920/1080',
        summary: this.formGroup.controls.summary.value,
        type: this.formGroup.controls.type.value
      }
      this.service.add(pet)
    }

  }
}
