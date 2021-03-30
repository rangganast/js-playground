import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Organizer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  bio: string;

  @Column({ type: 'varchar' })
  location: string;

  @Column({ type: 'varchar' })
  image: string;
}
