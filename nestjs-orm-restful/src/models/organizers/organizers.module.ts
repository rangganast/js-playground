import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizer } from './entity/organizer.entity';
import { OrganizersService } from './organizers.service';
import { OrganizersController } from './organizers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Organizer])],
  providers: [OrganizersService],
  controllers: [OrganizersController],
})
export class OrganizersModule {}
