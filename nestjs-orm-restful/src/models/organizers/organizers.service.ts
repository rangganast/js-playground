import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organizer } from './entity/organizer.entity';

@Injectable()
export class OrganizersService {
  constructor(
    @InjectRepository(Organizer)
    private organizerRepository: Repository<Organizer>,
  ) {}

  create(organizer: Organizer): Promise<Organizer> {
    return this.organizerRepository.save(organizer);
  }

  findOne(id: number): Promise<Organizer> {
    return this.organizerRepository.findOne(id);
  }
}
