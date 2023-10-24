import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  images: string[];

  @IsOptional()
  description: string;

  @IsOptional()
  price: string;
}
