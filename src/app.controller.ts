import { Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot() {
	return 'Hello world data story!'
  }

  @Post('boot')
  postBoot() {
	return {
		stories: [],
		availableNodes: []
	}
  }
}
