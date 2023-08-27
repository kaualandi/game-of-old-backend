import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Body() createAddressDto: CreateAddressDto,
    @Request() request: { user_id: string },
  ) {
    return await this.addressService.create(createAddressDto, +request.user_id);
  }

  // @Get()
  // findAll() {
  //   return this.addressService.findAll();
  // }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(
    @Param('id') id: string,
    @Request() request: { user_id: string },
  ) {
    return await this.addressService.findOne(+id, +request.user_id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
    @Request() request: { user_id: string },
  ) {
    return await this.addressService.update(
      +id,
      updateAddressDto,
      +request.user_id,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(
    @Param('id') id: string,
    @Request() request: { user_id: string },
  ) {
    return await this.addressService.remove(+id, +request.user_id);
  }
}
