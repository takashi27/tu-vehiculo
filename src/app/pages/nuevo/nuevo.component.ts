import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    Swal.fire('Vehiculo Agregado','Se redireccionará a sus vehiculos','success')
  }

}
