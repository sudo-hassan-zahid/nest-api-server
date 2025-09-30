import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({ description: 'The unique identifier of the user', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'The first name of the user', example: 'John' })
  @Column({ length: 100 })
  firstName: string;

  @ApiProperty({ description: 'The last name of the user', example: 'Doe' })
  @Column({ length: 100 })
  lastName: string;

  @ApiProperty({ description: 'The email address of the user', example: 'john.doe@example.com' })
  @Column({ unique: true, length: 255 })
  email: string;

  @ApiProperty({ description: 'The age of the user', example: 30, required: false })
  @Column({ type: 'int', nullable: true })
  age: number;

  @ApiProperty({ description: 'The date when the user was created' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'The date when the user was last updated' })
  @UpdateDateColumn()
  updatedAt: Date;
}