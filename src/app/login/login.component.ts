import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { MensajeService } from '../Services/mensaje.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   
   loginForm: FormGroup = new FormGroup({});
  
  constructor(public fb:FormBuilder, public auth: AngularFireAuth, private mensaje: MensajeService) { }
    
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    })
   

  }
   
   iniciarsession(){
     
     this.auth.signInWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.password)
     .then((user)=>{  
         this.mensaje.mensajelogin();
     }).catch((error)=>{
         this.mensaje.mensajeError('Incorrecto',error);
      } )
     
   
   }
}
