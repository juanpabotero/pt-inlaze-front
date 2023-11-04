import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Cocktail {
  drinks: { [key: string]: null | string }[];
}

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private readonly http: HttpClient) {}

  getCocktailById(id: number): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.baseUrl}/lookup.php?i=${id}`);
  }

  getCocktailByName(name: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.baseUrl}/search.php?s=${name}`);
  }

  getCocktailsByIngredient(ingredient: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(
      `${this.baseUrl}/filter.php?i=${ingredient}`
    );
  }

  getIngredientByName(name: number): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.baseUrl}/search.php?i=${name}`);
  }

  getCocktailsByFirstLetter(letter: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.baseUrl}/search.php?f=${letter}`);
  }
}
