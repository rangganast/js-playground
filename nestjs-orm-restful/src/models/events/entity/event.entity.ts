import { Exclude } from 'class-transformer';
import { Organizer } from 'src/models/organizers/entity/organizer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  image: string;

  @Column({ type: 'int' })
  quota: number;

  @Exclude()
  @Column({
    name: 'registrationStart',
    type: 'datetime',
    nullable: true,
  })
  registrationStart: string;

  @Exclude()
  @Column({
    name: 'registrationEnd',
    type: 'datetime',
    nullable: true,
  })
  registrationEnd: string;

  @Column({
    name: 'eventStart',
    type: 'datetime',
    nullable: true,
  })
  eventStart: string;

  @Exclude()
  @Column({
    name: 'eventEnd',
    type: 'datetime',
    nullable: true,
  })
  eventEnd: string;

  @Column({ name: 'organizerId', nullable: true })
  organizerId: number;

  @ManyToOne(() => Organizer, (organizer) => organizer.events, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'organizerId' })
  organizer: Organizer;
}
