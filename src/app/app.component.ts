import { Component } from '@angular/core';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrar = true;
  mostrarB = false;
  title = 'tuvehiculo';
  constructor(private service: GeneralService){
    service.getConfig().subscribe((resp:any)=>{
      console.log(resp);
      this.mostrarB = resp.noti
    })
  }
}
