import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'erick';
  public nameUpper: string = 'ERICK';
  public fullName: string = 'eRiCK hERNandEz';

  public customDate: Date = new Date();
}
