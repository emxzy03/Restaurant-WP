import { CheckMaterial } from 'src/check-materials/entities/check-material.entity';
import { Materail } from 'src/materails/entities/materail.entity';
export class CreateCheckMaterialDetailDto {
  material?: Materail;
  materialId?: number;
  name?: string;
  last_quantity?: number;
  quantity: number;
  now_q?: number;
  bill?: CheckMaterial;
  createdDate?: Date;
  updatedDate?: Date;
  deletedDate?: Date;
}
