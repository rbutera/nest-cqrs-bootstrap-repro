import { DemoCommandHandler } from './handlers/demo.handler';
import { Module, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ExampleService } from './example.service';

export const CommandHandlers = [DemoCommandHandler];

const log = new Logger('ExampleModule');

@Module({
  imports: [CqrsModule],
  providers: [ExampleService, ...CommandHandlers],
})
export class ExampleModule implements OnApplicationBootstrap {
  constructor(private readonly service: ExampleService) {}

  async onApplicationBootstrap() {
    log.log('onApplicationBootstrap started');
    await this.service.attemptToExecuteCommandInBootstrap();
  }
}
