import {DefaultCrudRepository} from '@loopback/repository';
import {Entrada, EntradaRelations} from '../models';
import {DsMongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EntradaRepository extends DefaultCrudRepository<
  Entrada,
  typeof Entrada.prototype.id,
  EntradaRelations
> {
  constructor(
    @inject('datasources.dsMongo') dataSource: DsMongoDataSource,
  ) {
    super(Entrada, dataSource);
  }
}
