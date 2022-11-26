import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvidar',
  templateUrl: './olvidar.component.html',
  styleUrls: ['./olvidar.component.css']
})
export class OlvidarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  olvidar(){
    Swal.fire('Correo Ennviado','Se ha enviado un correo a juansps98@hotmail.com con la recuperacion de la contraseña','success');
    this.router.navigateByUrl('/Home');
  }

}
