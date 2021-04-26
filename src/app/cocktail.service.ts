import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktails : Cocktail[] = [];

  public getCocktails() {
return this.cocktails;
  }

  public addCocktails(cocktail: Cocktail) {
    this.cocktails.push(cocktail);
  }

  constructor() { }
}
