import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Categoria } from './categoria.model';
 
@Component({
  selector: 'categoria',
  templateUrl: './categoria.component.html'
//   styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  @Input() categoria: Categoria;
  constructor() { }
 
  ngOnInit() {
  }
 
}