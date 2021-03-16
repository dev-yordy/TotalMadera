import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MensajeService } from '../Services/mensaje.service';



@Component({
  selector: 'app-agregarclientes',
  templateUrl: './agregarclientes.component.html',
  styleUrls: ['./agregarclientes.component.scss']
})
export class AgregarclientesComponent implements OnInit {
   formulariocliente: any;
   subida: any;
   urlImagen:string ='';
   editable: boolean = false;
   id:string = ''

  constructor(private fb: FormBuilder, private storage: AngularFireStorage, private afs:AngularFirestore,
    private activeRoute: ActivatedRoute,  private mensajes: MensajeService) { }

  ngOnInit(): void {
   
    /////////////////////////////////////////////////////////
       this.formulariocliente = this.fb.group({
         Nombre: ['',Validators.required],
         Cedula: ['',Validators.required],
         Direccion: ['',Validators.required],
         Telefono: [''],
         Correo: [''],
         imgURL:['']
       });
        //Obtener el id del cliente de firestore y guardarlo en una variable
      this.id = this.activeRoute.snapshot.params.clienteID
      if(this.id != undefined){
        this.editable = true
        this.afs.doc<any>('clientes'+'/'+this.id).valueChanges().subscribe((cliente)=>{
          this.formulariocliente.setValue({
            Nombre: cliente.Nombre,
            Cedula: cliente.Cedula,
            Direccion: cliente.Direccion,
            Telefono: cliente.Telefono,
            Correo: cliente.Correo,
            imgURL: ''
          })
          this.urlImagen=cliente.imgURL
        })
      }
  }

  agregarcliente(){
     
       this.formulariocliente.value.imgURL = this.urlImagen;
    this.afs.collection('clientes').add(this.formulariocliente.value).then((result)=>{
          this.mensajes.mensajeCorrecto();
    })
    this.formulariocliente.reset()
  }
  editar(){
    this.formulariocliente.value.imgURL = this.urlImagen;
    this.afs.doc('clientes/'+this.id).update(this.formulariocliente.value).then((result)=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'cliente Actualizado',
        showConfirmButton: true,
        timer: 1500
      })
    }).catch((errors)=>{
         this.mensajes.mensajeError('Error',errors)
    })
  }
  
  uploadimage(event:any){

     if(event.target.files.length > 0){
      let nombre = new Date().getTime().toString();
      let archivo = event.target.files[0]
      let extencion = archivo.name.toString().substring(archivo.name.toString().lastIndexOf());
      let ruta = 'clientes/'+nombre+extencion;
      const referencia = this.storage.ref(ruta)
      const work = referencia.put(archivo)
       work.then(()=>{
           referencia.getDownloadURL().subscribe((url)=>{
             this.urlImagen = url;
           })
       })
      //barra de carga
      work.percentageChanges().subscribe((porcentaje)=>{
        this.subida = porcentaje;
      })
     }
  }
}
