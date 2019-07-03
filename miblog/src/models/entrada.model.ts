import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Entrada extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  autor: string;

  @property({
    type: 'string',
    required: true,
  })
  contenido: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;


  constructor(data?: Partial<Entrada>) {
    super(data);
  }
}

export interface EntradaRelations {
  // describe navigational properties here
}

export type EntradaWithRelations = Entrada & EntradaRelations;
