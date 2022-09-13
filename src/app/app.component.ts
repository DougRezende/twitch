import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //APLAUSOS

  mostrarAplausos:Boolean = false;
  aplauso = new Audio();

  aplausos() {

    this.aplauso.src = "../assets/aplausos.mp3";

    if(this.mostrarAplausos) {
      this.mostrarAplausos = false;
      this.aplauso.pause();
    } else {
      this.mostrarAplausos = true;
      this.aplauso.play();
    }
  }

  //RISOS
  
  mostrarRisos:Boolean = false;
  risada = new Audio();

  risos() {

    this.risada.src = "../assets/risadas.mp3";

    if(this.mostrarRisos) {
      this.mostrarRisos = false;
      this.risada.pause();
    } else {
      this.mostrarRisos = true;
      this.risada.play();
    }
  }

  //IBOPE

  mostrarIbope:Boolean = false;
  ibope() {
    if(this.mostrarIbope) {
      this.mostrarIbope = false;
    } else {
      this.mostrarIbope = true;
    }
  }

    //TERMOMETRO

    mostrarTermometro:Boolean = false;
    termometro() {
      if(this.mostrarTermometro) {
        this.mostrarTermometro = false;
      } else {
        this.mostrarTermometro = true;
      }
    }


}
