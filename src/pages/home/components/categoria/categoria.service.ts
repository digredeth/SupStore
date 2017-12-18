import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Categoria } from './categoria.model';
import { CATEGORIAS } from './categorias.mock';

@Injectable()
export class CategoriaService {

 constructor() { }

 getCategorias(): Observable<Categoria[]> {
   return of(CATEGORIAS);
 }
}