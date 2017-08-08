import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel','Very tasty', 'https://i2.wp.com/www.themakeupdummy.com/wp-content/uploads/2016/11/Healthy-Nutella-Granola-by-The-Makeup-Dummy.jpg?resize=600%2C400', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat',1)
    ]),
    new Recipe('Summer Salad','Okayish', 'https://i2.wp.com/www.themakeupdummy.com/wp-content/uploads/2016/11/Healthy-Nutella-Granola-by-The-Makeup-Dummy.jpg?resize=600%2C400', [])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
