import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from "../recipes/recipe";
import {RecipeItemComponent} from "./recipe-item.component";


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy','Dummy', 'https://images-na.ssl-images-amazon.com/images/I/5171RQ0k2fL._SL1500_.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
