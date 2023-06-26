import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos:any=[];

  constructor(private productosService: ProductosService) {
    this.productosService.getAll()
      .subscribe((data:any) => {
        this.productos = data.results;
      });
  }


  ngOnInit(): void {
   
  }

}
