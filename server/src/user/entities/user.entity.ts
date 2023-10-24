import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleStatus } from '../enums';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: RoleStatus,
    default: RoleStatus.VISITOR,
  })
  role: string;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;
}
