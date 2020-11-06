import { CommandBus } from '@nestjs/cqrs';
import { Injectable, Logger } from '@nestjs/common';
import { DemoCommand } from './commands/demo.command';

const log = new Logger('ExampleService');

@Injectable()
export class ExampleService {
  constructor(private commandBus: CommandBus) {}

  async attemptToExecuteCommandInBootstrap() {
    log.log(
      'we are in the ExampleService now. Attempting to execute a command.',
    );
    return this.commandBus.execute(new DemoCommand('how to make this work??'));
  }
}
