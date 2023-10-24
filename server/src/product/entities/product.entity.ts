import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text', array: true, nullable: true })
  images: string[];

  @Column({ type: 'text', nullable: true })
  price: string;

  @Column({ type: 'text', nullable: true })
  description: string;
}
