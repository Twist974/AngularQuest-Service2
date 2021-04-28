import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from "../common/cocktail.model"

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  public cocktails : Cocktail[];
  public service: CocktailService;

  constructor(public cocktailService:CocktailService) { 
    this.service = cocktailService;
  }

  ngOnInit(): void {
    this.service.getCocktails().subscribe((response: Cocktail[]) => {
      this.cocktails = response;
    });
  }

}
