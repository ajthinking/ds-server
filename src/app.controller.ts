import { Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('boot')
  postBoot() {
	return {
		stories: [],
		availableNodes: []
	}
  }
}
