import { Injectable } from '@nestjs/common';
import {
  NotFoundException,
  BadRequestException,
} from '@nestjs/common/exceptions';
import { PrismaService } from 'src/modules/prisma';
import { VariantsService } from '../variants/variants.service';
import { ImagesService } from './../images/images.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly imagesService: ImagesService,
    private readonly variantsService: VariantsService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const { images, filters, team_id, variants, ...product } = createProductDto;

    try {
      const productCreated = await this.prismaService.product.create({
        data: {
          ...product,
          team: {
            connect: {
              id: team_id,
            },
          },
        },
      });

      if (images.length > 0) {
        for (const image of images) {
          await this.imagesService.create({
            product_id: productCreated.id,
            url: image,
          });
        }
      }

      if (filters.length > 0) {
        await this.prismaService.productFilter.createMany({
          data: filters.map((filter) => ({
            filter_id: filter,
            product_id: productCreated.id,
          })),
        });
      }

      if (variants.length > 0) {
        for (const variant of variants) {
          await this.variantsService.create({
            product_id: productCreated.id,
            name: variant,
            is_active: true,
          });
        }
      }

      return productCreated;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(name: string, page: number, page_size: number) {
    if (!page || !page_size) {
      throw new BadRequestException(
        'Especifique a página e o tamanho da página.',
      );
    }

    const pagedResult = await this.prismaService.product.findMany({
      include: {
        images: true,
        variants: true,
        filters: true,
        team: true,
        _count: true,
      },
      where: {
        name: {
          contains: name,
        },
      },
      skip: (page - 1) * page_size,
      take: page_size,
    });

    const count = await this.prismaService.product.count();

    return {
      count,
      results: pagedResult,
      next: count > page * page_size ? true : false,
      previous: page <= 1 ? false : true,
    };
  }

  async findOne(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id,
      },
      include: {
        images: true,
        variants: true,
        team: true,
        filters: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`Produto não encontrado`);
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.findOne(id);

    const { images, team_id, filters, variants, ...product } = updateProductDto;

    try {
      const productUpdate = await this.prismaService.product.update({
        where: {
          id,
        },
        data: {
          ...product,
          team: {
            connect: {
              id: team_id,
            },
          },
          filters: {
            connect: filters.map((filter) => ({
              id: filter,
            })),
          },
        },
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

    for (const variant of product.variants) {
      await this.variantsService.remove(variant.id);
    }

    return this.prismaService.product.delete({
      where: {
        id,
      },
    });
  }
}
