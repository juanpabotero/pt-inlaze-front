import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent implements OnInit, OnDestroy {
  dataSuscription: Subscription | undefined;
  cocktail: any = {};
  ingredients: any[] = [];
  instructions: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly cocktailService: CocktailsService
  ) {}

  ngOnInit(): void {
    this.dataSuscription = this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.cocktailService.getCocktailById(id)))
      .subscribe({
        next: (cocktail) => {
          this.cocktail = cocktail.drinks[0];
          this.instructions = this.cocktail.strInstructions.split(/\s*\.\s*/);
          this.instructions.pop();
          // array from keys
          const keys = Object.keys(cocktail.drinks[0]);
          keys.forEach((key) => {
            if (key.includes('strIngredient') && cocktail.drinks[0][key]) {
              this.ingredients.push({
                name: cocktail.drinks[0][key],
                measure: cocktail.drinks[0][`strMeasure${key.slice(-1)}`],
              });
            }
          });
        },
      });
  }

  ngOnDestroy(): void {
    this.dataSuscription?.unsubscribe();
  }

  navigateToPrevious(): number {
    return this.cocktail.idDrink <= 11000 ? 11007 : this.cocktail.idDrink - 1;
  }
}
