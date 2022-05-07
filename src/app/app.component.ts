import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'fatorial';
  numeroDigitado:any = 0;
  numbers: any[] = [];
  resultado:any[] = [];
  resultadoMulti = 1;

  calcular(){

    for (let i = this.numbers.length; i > 0; i--) {
      this.numbers.pop();
    }
    this.resultadoMulti = 1;

    this.numeroDigitado = (<HTMLSelectElement>document.getElementById('numero')).value;

    if(this.numbers.length == 0){
      for(var i=0; i<this.numeroDigitado;i++){
        var x = 0;
       x =  this.numeroDigitado - i
       if(x != 0){
        this.numbers.push(x)
       }
      }
    }
     for(var i = 0; i < this.numbers.length; i++){
      this.resultadoMulti = this.numbers[i] * this.resultadoMulti
    } 
  }
  
}
