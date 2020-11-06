import { DemoCommand } from './../commands/demo.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

const log = new Logger('DemoCommandHandler');

@CommandHandler(DemoCommand)
export class DemoCommandHandler implements ICommandHandler<DemoCommand> {
  constructor() {}

  async execute(command: DemoCommand) {
    const { input } = command;
    log.warn(`Demo Command with input "${input}" Executed and Handled!`);
  }
}
