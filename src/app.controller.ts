import { Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';
import UID from '@ajthinking/data-story/src/core/utils/UID';
import Feature from '@ajthinking/data-story/src/core/Feature';
import PortModel from '@ajthinking/data-story/src/core/PortModel';
import DiagramModel from '@ajthinking/data-story/src/core/DiagramModel';
import NodeParameter from '@ajthinking/data-story/src/core/NodeParameter';
import { BootPayload } from '@ajthinking/data-story/src/core/types/BootPayload';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot() {
    return `Hello world data story! ${UID()}`;
  }

  @Post('boot')
  postBoot(payload: BootPayload) {
    console.log(payload);

    const feature = new Feature();
    console.log(feature.type);

    const nodeParameter = new NodeParameter('some_node');
    console.log(nodeParameter);

    return {
      stories: [],
      availableNodes: [],
    };
  }
}
