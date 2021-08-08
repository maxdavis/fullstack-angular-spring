import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nao-autorizada',
  template: `
  <div class="container">
    <h1 class="text-center">Acesso negado!</h1>
  </div>
  `,
})
export class NaoAutorizadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
