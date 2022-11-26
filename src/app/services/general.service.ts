import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private afs: AngularFirestore) { }

  getConfig(){
  
      return this.afs.collection('demo').doc('pitkVtnteQBOgm9UT7vW').valueChanges()
    
  }

  postNombre(nombre:string){
    return this.afs.collection('demo').doc('pitkVtnteQBOgm9UT7vW').update({nombre:nombre});
  }

  postPlaca(placa:string){
    return this.afs.collection('demo').doc('pitkVtnteQBOgm9UT7vW').update({placa:placa});
  }
}
