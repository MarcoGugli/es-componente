import { Component, OnInit } from '@angular/core';

interface Cliente {
  nome: string,
  cognome: string,
  altezzza?: number,
  email: string,
  dataNascita: string,
  comuneNascita: string,
  codiceFiscale: string,
  sesso: 'M' | 'F' | '',
  pwd: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  datiAnagrafici = true;
  percorsoStudi = false;
  competenze = false;

  
  jsonIn: Cliente = {
    nome: '',
    cognome: '',
    email: '',
    dataNascita: '',
    comuneNascita: '',
    codiceFiscale: '',
    sesso: '',
    pwd: ''
  };

  constructor() {}

  ngOnInit(): void {

  }

  /* ondataNascitaChange($event: any){
    const dataIniziale = $event.target.value;
    const annoAttuale = dataIniziale.getFullYear();
    const meseAttuale = dataIniziale.getMonth();
    const giornoAttuale = dataIniziale.getDate();
    const annoAggiornato = annoAttuale + 18;

    const dataAggiornata = new Date(annoAggiornato, meseAttuale, giornoAttuale);

    if(dataAggiornata > new Date()){
      return false;
    }
    else{
      return true;
    }
    
  } */

  toggleSezione(sezione :string){
    this.datiAnagrafici = false;
    this.percorsoStudi = false;
    this.competenze = false;

    if(sezione === "datiAnagrafici"){
      if(this.datiAnagrafici == false){
        this.datiAnagrafici = true;
      }
      else{
        this.datiAnagrafici = false;
      }
    }else if(sezione === "percorsoStudi"){
      if(this.percorsoStudi == false){
        this.percorsoStudi = true;
      }else{
        this.percorsoStudi = false;
      }
    }else if(sezione === "competenze"){
      if(this.competenze == false){
        this.competenze = true;
      }
      else{
        this.competenze = false;
      }
    }
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/