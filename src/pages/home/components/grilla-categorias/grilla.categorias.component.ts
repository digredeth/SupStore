import { Component, OnInit } from '@angular/core';
import { CATEGORIAS } from './grilla.categorias.mock';
import { Categoria } from '../categoria/categoria.model';
 
@Component({
  selector: 'grilla-categorias',
  templateUrl: './grilla.categorias.component.html'
//   styleUrls: ['./categoria.component.scss']
})
export class GrillaCategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  constructor() { }
 
  ngOnInit() {
      this.categorias = CATEGORIAS;
  }
 
}