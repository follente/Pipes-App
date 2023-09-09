import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'IronMan',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red,
    },
  ]

  public toggleUpperCase():void{
   this.isUpperCase =!this.isUpperCase;
  }

  public changeOrder(value: keyof Hero){
    this.orderBy = value;
  }
}
