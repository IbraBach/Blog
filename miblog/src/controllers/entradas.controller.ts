import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Entrada } from '../models';
import { EntradaRepository } from '../repositories';

export class EntradasController {
  constructor(
    @repository(EntradaRepository)
    public entradaRepository: EntradaRepository,
  ) { }

  @post('/entradas/create', {
    responses: {
      '200': {
        description: 'Entrada model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Entrada } } },
      },
    },
  })
  async create(@requestBody() entrada: Entrada): Promise<Entrada> {
    return await this.entradaRepository.create(entrada);
  }

  @get('/entradas/count', {
    responses: {
      '200': {
        description: 'Entrada model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Entrada)) where?: Where<Entrada>,
  ): Promise<Count> {
    return await this.entradaRepository.count(where);
  }

  @get('/entradas/list', {
    responses: {
      '200': {
        description: 'Array of Entrada model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Entrada } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Entrada)) filter?: Filter<Entrada>,
  ): Promise<Entrada[]> {
    return await this.entradaRepository.find(filter);
  }

  @patch('/entradas/updateall', {
    responses: {
      '200': {
        description: 'Entrada PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() entrada: Entrada,
    @param.query.object('where', getWhereSchemaFor(Entrada)) where?: Where<Entrada>,
  ): Promise<Count> {
    return await this.entradaRepository.updateAll(entrada, where);
  }

  @get('/entradas/{id}', {
    responses: {
      '200': {
        description: 'Entrada model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Entrada } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Entrada> {
    return await this.entradaRepository.findById(id);
  }

  @patch('/entradas/update/{id}', {
    responses: {
      '204': {
        description: 'Entrada PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() entrada: Entrada,
  ): Promise<void> {
    await this.entradaRepository.updateById(id, entrada);
  }

  @put('/entradas/{id}', {
    responses: {
      '204': {
        description: 'Entrada PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() entrada: Entrada,
  ): Promise<void> {
    await this.entradaRepository.replaceById(id, entrada);
  }

  @del('/entradas/delete/{id}', {
    responses: {
      '204': {
        description: 'Entrada DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.entradaRepository.deleteById(id);
  }
}
