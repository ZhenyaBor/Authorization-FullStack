import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RoleGuard } from 'src/guards/role.guard';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(JwtAuthGuard, new RoleGuard('Admin'))
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, new RoleGuard('Admin'))
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.updateProduct(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, new RoleGuard('Admin'))
  delete(@Param('id') id: string) {
    return this.productService.deleteProduct(+id);
  }
}
