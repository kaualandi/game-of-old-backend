import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAddressDto: CreateAddressDto, user_id: number) {
    return this.prisma.address.create({
      data: {
        ...createAddressDto,
        user: {
          connect: {
            id: user_id,
          },
        },
      },
    });
  }

  // findAll() {
  //   return `This action returns all address`;
  // }

  async findOne(id: number, user_id: number) {
    const address = await this.prisma.address.findUnique({
      where: {
        id,
        user_id,
      },
    });

    if (!address) {
      throw new NotFoundException(`Endereço não encontrado`);
    }

    return address;
  }

  async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
    user_id: number,
  ) {
    await this.findOne(id, user_id);

    return this.prisma.address.update({
      where: {
        id,
        user_id,
      },
      data: updateAddressDto,
    });
  }

  async remove(id: number, user_id: number) {
    await this.findOne(id, user_id);

    return this.prisma.address.delete({
      where: {
        id,
        user_id,
      },
    });
  }
}
