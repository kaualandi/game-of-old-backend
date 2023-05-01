import { ImagesService } from './../images/images.service';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/modules/prisma';
import { TypesService } from '../types/types.service';
import { VariationsService } from '../variations/variations.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly imagesService: ImagesService,
    private readonly typesService: TypesService,
    private readonly variationsService: VariationsService,
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

  findAll(name: string) {
    return this.prismaService.product.findMany({
      include: {
        images: true,
        category: true,
        measure: true,
        types: true,
        variations: true,
        _count: true,
      },
      where: {
        name: {
          contains: name,
        },
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

    try {
      const productUpdate = await this.prismaService.product.update({
        where: {
          id,
        },
        data: product,
      });

      if (images.length > 0) {
        for (const image of images) {
          await this.imagesService.create({
            product_id: productUpdate.id,
            url: image,
          });
        }
      }
      return productUpdate;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: number) {
    const product = await this.findOne(id);

    for (const image of product.images) {
      await this.imagesService.remove(image.id);
    }

    for (const type of product.types) {
      await this.typesService.remove(type.id);
    }

    for (const variation of product.variations) {
      await this.variationsService.remove(variation.id);
    }

    return this.prismaService.product.delete({
      where: {
        id,
      },
    });
  }
}
