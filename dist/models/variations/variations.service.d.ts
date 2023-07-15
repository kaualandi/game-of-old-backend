import { S3Service } from './../../modules/aws/s3/s3.service';
import { CreateVariantsDto } from './dto/create-variants.dto';
import { UpdateVariantsDto } from './dto/update-variants.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class VariantsService {
  private readonly prismaService;
  private readonly s3Service;
  constructor(prismaService: PrismaService, s3Service: S3Service);
  create(createVariantsDto: CreateVariantsDto): Promise<any>;
  findAll(name: string): any;
  findOne(id: number): Promise<any>;
  update(id: number, updateVariantsDto: UpdateVariantsDto): Promise<any>;
  remove(id: number): Promise<any>;
}
