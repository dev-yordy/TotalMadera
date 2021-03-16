import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app'


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  user:any;

  constructor(public auth: AngularFireAuth) { 
  
  }
  
  ngOnInit(): void {
    this.auth.user.subscribe((usuario)=>{
      this.user = usuario; 
      console.log(this.user);
      
    })
  }

  logout() {
    this.auth.signOut();
  }
}
