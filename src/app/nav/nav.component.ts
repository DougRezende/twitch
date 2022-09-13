import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const horas:any = document.getElementById('horas');
    const minutos:any = document.getElementById('minutos');
    const dia:any = document.getElementById('dia');
    const mes:any = document.getElementById('mes');
    const ano:any = document.getElementById('ano');

    const relogio = setInterval(function time( ){

      let day = new Date();
      let hr = day.getHours();
      let mn = day.getMinutes();
      let d = day.getDay();
      let m = day.getMonth();
      let a = day.getFullYear();

      let mesMais1 = m + 1;
      let diaMais = d + 4;

      let hrString = hr.toString();
      let mnString = mn.toString();
      let diaMaisString = diaMais.toString();
      let mesMais1String = mesMais1.toString();

      if (hr < 10) hrString = '0' + hrString;
      if (mn < 10) mnString = '0' + mnString;
      if (d < 6) diaMaisString = '0' + diaMais;
      if (m < 10) mesMais1String = '0' + mesMais1String;

      horas.textContent = hrString;
      minutos.textContent = mnString;
      dia.textContent = diaMaisString;
      mes.textContent = mesMais1String;
      ano.textContent = a;
    })
  }

}
