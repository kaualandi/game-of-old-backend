import { CreateVariantsDto } from './dto/create-variants.dto';
import { UpdateVariantsDto } from './dto/update-variants.dto';
import { VariantsService } from './variants.service';
export declare class VariantsController {
  private readonly variantService;
  constructor(variantService: VariantsService);
  create(createVariationDto: CreateVariantsDto): Promise<any>;
  findAll(name: string): any;
  findOne(id: string): Promise<any>;
  update(id: string, updateVariationDto: UpdateVariantsDto): Promise<any>;
  remove(id: string): Promise<any>;
}
