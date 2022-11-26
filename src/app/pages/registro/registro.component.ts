import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public nombre = '';
  public correo = '';

  constructor(private s: GeneralService, private router:Router) {

   }

  ngOnInit(): void {
  }

  post(){
    this.s.postNombre(this.nombre).then(()=> {
      Swal.fire('Registro Exitoso','Puedes iniciar sesion','success')
      this.router.navigateByUrl('Home');
    }).catch(()=>Swal.fire('Error','Intentelo de nuevo','error'))
  }

}
