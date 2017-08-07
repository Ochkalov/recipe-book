import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from "../recipes/recipe";
import {RecipeItemComponent} from "./recipe-item.component";


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel','Very tasty', 'https://i2.wp.com/www.themakeupdummy.com/wp-content/uploads/2016/11/Healthy-Nutella-Granola-by-The-Makeup-Dummy.jpg?resize=600%2C400', []),
    new Recipe('Summer Salad','Okayish', 'https://i2.wp.com/www.themakeupdummy.com/wp-content/uploads/2016/11/Healthy-Nutella-Granola-by-The-Makeup-Dummy.jpg?resize=600%2C400', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
