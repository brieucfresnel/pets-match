import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import {API_ENDPOINT} from "@pets-match/pets-match-resources";

@Controller(API_ENDPOINT)
export class AppController {
  constructor(private readonly appService: AppService) {}

}
