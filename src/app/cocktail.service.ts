import { Injectable } from '@angular/core';
import { Cocktail } from './common/cocktail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private service: HttpClient;

  constructor(service: HttpClient) {
    this.service = service;
  }

  public getCocktails(): Observable<Cocktail[]> {
    const obs: Observable<any> = this.service.get('assets/cocktails.json');

    const treatment = (param_data: Cocktail[]) => { return param_data as Cocktail[];};
    return obs.pipe(map(treatment));
  }

}