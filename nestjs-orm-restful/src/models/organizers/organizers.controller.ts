import { Body, Controller, Get, Post } from '@nestjs/common';
import { Organizer } from './entity/organizer.entity';
import { OrganizersService } from './organizers.service';

@Controller('organizers')
export class OrganizersController {
  constructor(private organizersService: OrganizersService) {}

  @Post()
  create(@Body() organizer: Organizer): Promise<Organizer> {
    return this.organizersService.create(organizer);
  }

  @Get()
  async findOne(id: number): Promise<Organizer> {
    return this.organizersService.findOne(id);
  }
}
