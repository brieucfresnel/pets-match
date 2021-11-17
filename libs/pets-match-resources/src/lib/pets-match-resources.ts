export function petsMatchResources(): string {
  return 'pets-match-resources';
}

export const PETS_RESOURCE_PATH = '/pets';
export const API_ENDPOINT = '/api';
export const MEETAPET_API_ENDPOINT = 'https://meetapet-api.herokuapp.com/api/pets'

export interface PetDto {
  id: string,
  firstName: string,
  lastName: string,
  avatarPictureUrl: string
  birthDate: string
  coverPictureUrl: string
  summary: string,
  type: string
}

