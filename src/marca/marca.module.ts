import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { Marca_Controller } from './marca.controller';
import { marcaProviders } from './marca.providers';
import { MarcaService } from './marca.service';

@Module({
  imports: [DatabaseModule],
  controllers: [Marca_Controller],
  providers: [
    ...marcaProviders,
    MarcaService,
  ],
})
export class MarcaModule {}