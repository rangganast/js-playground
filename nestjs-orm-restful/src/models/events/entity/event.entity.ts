import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'int' })
  quota: number;

  @Column({
    name: 'registration_start',
    type: 'datetime',
  })
  registrationStart: string;

  @Column({
    name: 'registration_end',
    type: 'datetime',
  })
  registrationEnd: string;

  @Column({
    name: 'event_start',
    type: 'datetime',
  })
  eventStart: string;

  @Column({
    name: 'event_end',
    type: 'datetime',
  })
  eventEnd: string;
}
