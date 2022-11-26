import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public usuario = '';
  public pass = '';
  public alerta = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingresar(){
    if(this.usuario.toUpperCase() == 'JUANSPS98@HOTMAIL.COM' && this.pass.toUpperCase() == 'EJEMPLO'){
      console.log(this.usuario.toUpperCase(),this.pass.toUpperCase());
      this.router.navigateByUrl('Hacer');
    }
    else{
      this.alerta = true;
    }
  }


  

}
