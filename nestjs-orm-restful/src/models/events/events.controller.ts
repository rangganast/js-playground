import { Body, Controller, Get, Post } from '@nestjs/common';
import { Event } from './entity/event.entity';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  create(@Body() event: Event): Promise<Event> {
    return this.eventsService.create(event);
  }

  @Get('/:id')
  async findOne(id: number): Promise<Event> {
    return this.eventsService.findOne(id);
  }

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventsService.findAll();
  }
}
