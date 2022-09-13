import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termometro',
  templateUrl: './termometro.component.html',
  styleUrls: ['./termometro.component.css']
})
export class TermometroComponent implements OnInit {

  emoticon:string = 'https://static-cdn.jtvnw.net/emoticons/v2/25/default/dark/1.0';
  nome:string = 'KAPPA';
  temperatura:number = 1238;

  constructor() { }

  ngOnInit(): void {

  }

}
