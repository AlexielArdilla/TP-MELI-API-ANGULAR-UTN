import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  producto: any=[];
  num = 20;
  

  constructor(private activatedRoute: ActivatedRoute,
    private productosService: ProductosService) {

    const id: string = activatedRoute.snapshot.paramMap.get("id");
    const producto = this.getProducto(id);
    console.log("ID de acá detalle : ", id);
  }

  async getProducto(id: string) {
    this.producto = await this.productosService.getById(id)
    .subscribe((data:any) => {
      this.producto = data;
      console.log("Tiró producto: ", data)
    });
  
  }

  ngOnInit(): void { }
}
