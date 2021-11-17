import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put
} from '@nestjs/common';
import {PetDto, PETS_RESOURCE_PATH} from "@pets-match/pets-match-resources";
import {PetsService} from "./pets.service";

@Controller(PETS_RESOURCE_PATH)
export class PetsController {
  constructor(private service: PetsService) {

  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): any {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id', ParseIntPipe) id: number) {
    this.service.delete(id)
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: PetDto) {
    this.service.post(body)
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  edit(@Param('id', ParseIntPipe) id: number, @Body() body: { item: PetDto }) {
    this.service.patch({
      ...body.item
    })
  }
}
