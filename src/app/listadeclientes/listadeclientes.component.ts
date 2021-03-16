import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-listadeclientes',
  templateUrl: './listadeclientes.component.html',
  styleUrls: ['./listadeclientes.component.scss']
})
export class ListadeclientesComponent implements OnInit {
   clientes: Array<any> = new Array<any>();
  constructor(public bd: AngularFirestore) { }

  ngOnInit(): void {
    // this.bd.collection('clientes').valueChanges().subscribe((result)=>{
    //   this.clientes = result;
    // })
    this.clientes.length=0
    this.bd.collection('clientes').get().subscribe((resultado)=>{
      console.log(resultado.docs)
      resultado.docs.forEach((items)=>{

        let cliente:any = items.data();
        cliente.id = items.id;
        cliente.ref = items.ref;
        this.clientes.push(cliente);
      })
      
    })
  }

}
