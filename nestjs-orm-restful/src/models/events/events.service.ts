import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entity/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>
  ) {}

  create(event: Event): Promise<Event> {
    return this.eventRepository.save(event);
  }

  findOne(id: number): Promise<Event> {
    return this.eventRepository.findOne(id);
  }

  findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }
}
