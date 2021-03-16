import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor() { }

  mensajeError(titulo:string, mensaje:string ){
    Swal.fire({
      icon: 'error',
      title: titulo,
      text: mensaje,
      footer: '<a href>Why do I have this issue?</a>'
    })
  }

  mensajeCorrecto(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'cliente agregado',
      showConfirmButton: true,
      timer: 1500
    })
  }
  mensajelogin(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Acceso permitido',
      showConfirmButton: true,
      timer: 1500
    })
  }
}

