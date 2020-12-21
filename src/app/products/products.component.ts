import { Component, OnInit } from '@angular/core';
import { Fruit, fruitList } from '../service/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
}) 
export class ProductsComponent {
  fruits: Fruit[]= fruitList;
  constructor() { }

  ngOnInit(): void {
  }
  getClass(fruit:Fruit){
    if (fruit.fruitColor == 'Red') {
      return "bgRed";
    }
    else if (fruit.fruitColor == 'Green'){
      return "bgGreen";
    }
    else if (fruit.fruitColor == 'Yellow'){
      return "bgYellow";
    }
    return "bgBlue";
  }
}
