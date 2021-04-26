import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service'

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails : Cocktail[] = [];

  constructor(public getCocktailsService : CocktailService) {
   }

  ngOnInit(): void {
this.getCocktailsService.addCocktails(new Cocktail("cocktail1", 6, "assets/alcohol-1853327_640.jpg"));
this.getCocktailsService.addCocktails(new Cocktail("margarita", 9, "assets/margarita-1839361_640.jpg"));
this.cocktails = this.getCocktailsService.getCocktails();
  }

}
