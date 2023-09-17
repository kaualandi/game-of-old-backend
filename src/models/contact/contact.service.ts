import { PrismaService } from './../../modules/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(private prismaService: PrismaService) {}

  async create(createContactDto: CreateContactDto) {
    return await this.prismaService.contact.create({
      data: createContactDto,
    });
  }

  async findAll(name: string, page: number, page_size: number) {
    if (!page || !page_size) {
      throw new BadRequestException(
        'Especifique a página e o tamanho da página.',
      );
    }

    const contains = { contains: name };
    const pagedResult = await this.prismaService.contact.findMany({
      where: { name: contains, email: contains, phone: contains },
      skip: (page - 1) * page_size,
      take: page_size,
    });

    const count = await this.prismaService.contact.count();

    return {
      count,
      results: pagedResult,
      next: count > page * page_size ? true : false,
      previous: page <= 1 ? false : true,
    };
  }

  async findOne(id: number) {
    const contact = await this.prismaService.contact.findUnique({
      where: { id },
    });

    if (!contact) {
      throw new BadRequestException('Contato não encontrado.');
    }

    return contact;
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    await this.findOne(id);
    return await this.prismaService.contact.update({
      where: { id },
      data: updateContactDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.prismaService.contact.delete({
      where: { id },
    });
  }
}
