import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, IsNumber, IsOptional, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  lastName: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string;

  @ApiProperty({ example: 'Password123!', minLength: 8 })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  password: string;

  @ApiProperty({ example: 30, required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  age?: number;
}