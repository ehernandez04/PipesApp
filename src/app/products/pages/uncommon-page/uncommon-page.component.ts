import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Erick';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPrular
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  };
}
