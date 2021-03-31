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

  @Column({
    name: 'registration_start',
    type: 'datetime',
    nullable: true,
  })
  registrationStart: string;

  @Column({
    name: 'registration_end',
    type: 'datetime',
    nullable: true,
  })
  registrationEnd: string;

  @Column({
    name: 'event_start',
    type: 'datetime',
    nullable: true,
  })
  eventStart: string;

  @Column({
    name: 'event_end',
    type: 'datetime',
    nullable: true,
  })
  eventEnd: string;

  @ManyToOne(() => Organizer, (organizer) => organizer.events, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'organizer_id' })
  organizer: Organizer;
}
