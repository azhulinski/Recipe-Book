import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Chunk of Beef',
      'Succulent roast topside of beef',
      'https://www.publicdomainpictures.net/pictures/30000/velka/a-chunk-of-beef-2.jpg',
      [new Ingredient('Beef', 1)]),
    new Recipe('Roasted Eggplant Pastitsio',
      'Recipe by: FrancesC',
      'https://images.media-allrecipes.com/userphotos/560x315/4577103.jpg',
      [
        new Ingredient('Pasta', 2),
        new Ingredient('Cheese', 3)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
