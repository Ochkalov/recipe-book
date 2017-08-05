import { Component } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {RecipesComponent} from "./recipes";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
ShoppingListComponent


@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rb';
}
