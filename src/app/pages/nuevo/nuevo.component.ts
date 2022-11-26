import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  public nombre = ''
  public placa = ''

  constructor(private s:GeneralService, private r:Router) {
    s.getConfig().subscribe((resp:any)=>{
      console.log(resp);
      this.nombre = resp.nombre
    })
   }

  ngOnInit(): void {
  }

  agregar(){
    this.s.postPlaca(this.placa).then(()=>{
      Swal.fire('Vehiculo Agregado','Consultalo ahora','success')
      this.r.navigateByUrl('Hacer');
    })
  }

}
