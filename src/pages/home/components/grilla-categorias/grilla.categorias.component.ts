import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria/categoria.model';
import { CategoriaService } from '../categoria/categoria.service'; 

@Component({
  selector: 'grilla-categorias',
  templateUrl: './grilla.categorias.component.html'
//   styleUrls: ['./categoria.component.scss']
})
export class GrillaCategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  constructor(private categoriaService: CategoriaService) { }
 
  ngOnInit() {
     this.getCategorias(); 
  }

  getCategorias(): void {
   this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias)
  }
 
}