import { ImagesService } from './../images/images.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/modules/prisma';
import { TypesService } from '../types/types.service';
import { VariantsService } from '../variants/variants.service';
export declare class ProductsService {
  private readonly prismaService;
  private readonly imagesService;
  private readonly typesService;
  private readonly variantsService;
  constructor(
    prismaService: PrismaService,
    imagesService: ImagesService,
    typesService: TypesService,
    variantsService: VariantsService,
  );
  create(createProductDto: CreateProductDto): Promise<
    import('@prisma/client/runtime/library').GetResult<
      {
        id: number;
        name: string;
        description: string;
        base_price: number;
        trending: boolean;
        discount: number;
        team_id: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
      },
      unknown,
      never
    > & {}
  >;
  findAll(name: string): import('.prisma/client').Prisma.PrismaPromise<
    (import('@prisma/client/runtime/library').GetResult<
      {
        id: number;
        name: string;
        description: string;
        base_price: number;
        trending: boolean;
        discount: number;
        team_id: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
      },
      unknown,
      never
    > & {})[]
  >;
  findOne(id: number): Promise<
    import('@prisma/client/runtime/library').GetResult<
      {
        id: number;
        name: string;
        description: string;
        base_price: number;
        trending: boolean;
        discount: number;
        team_id: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
      },
      unknown,
      never
    > & {}
  >;
  update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<
    import('@prisma/client/runtime/library').GetResult<
      {
        id: number;
        name: string;
        description: string;
        base_price: number;
        trending: boolean;
        discount: number;
        team_id: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
      },
      unknown,
      never
    > & {}
  >;
  remove(id: number): Promise<
    import('@prisma/client/runtime/library').GetResult<
      {
        id: number;
        name: string;
        description: string;
        base_price: number;
        trending: boolean;
        discount: number;
        team_id: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
      },
      unknown,
      never
    > & {}
  >;
}
