import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { JwtService } from '@nestjs/jwt';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly jwtService: JwtService,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(createProductDto);
    const savedProduct = await this.productRepository.save(newProduct);
    return savedProduct;
  }

  async findOne(id: number): Promise<Product | undefined> {
    const product = await this.productRepository.findOne({ where: { id } });
    return product;
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productRepository.find();
    return products;
  }

  async updateProduct(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    product.title = updateProductDto.title;
    product.images = updateProductDto.images;
    product.price = updateProductDto.price;
    product.description = updateProductDto.description;

    const updatedProduct = await this.productRepository.save(product);
    return updatedProduct;
  }

  async deleteProduct(id: number): Promise<void> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    await this.productRepository.remove(product);
  }
}
