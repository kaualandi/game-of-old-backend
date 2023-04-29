import { ImagesService } from './../images/images.service';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly imagesService: ImagesService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const { images, ...product } = createProductDto;
    try {
      const productCreated = await this.prismaService.product.create({
        data: product,
      });

      if (images.length > 0) {
        for (const image of images) {
          await this.imagesService.create({
            product_id: productCreated.id,
            url: image,
          });
        }
      }
      return productCreated;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findAll() {
    return this.prismaService.product.findMany({
      include: {
        images: true,
        category: true,
        measure: true,
        types: true,
        variations: true,
        _count: true,
      },
    });
  }

  async findOne(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id,
      },
      include: {
        images: true,
        category: true,
        measure: true,
        types: true,
        variations: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`Produto não encontrado`);
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.findOne(id);

    const { images, ...product } = updateProductDto;
    return this.prismaService.product.update({
      where: {
        id,
      },
      data: product,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaService.product.delete({
      where: {
        id,
      },
    });
  }
}
