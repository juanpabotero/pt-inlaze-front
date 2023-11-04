import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit, OnDestroy {
  dataSuscription: Subscription | undefined;
  drinks: any = {};
  ingredient: string = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly cocktailService: CocktailsService
  ) {}

  ngOnInit(): void {
    this.dataSuscription = this.activatedRoute.params
      .pipe(
        switchMap(({ name }) => {
          this.ingredient = name;
          return this.cocktailService.getCocktailsByIngredient(name);
        })
      )
      .subscribe({
        next: (drinks) => {
          this.drinks = drinks.drinks;
        },
      });
  }

  ngOnDestroy(): void {
    this.dataSuscription?.unsubscribe();
  }
}
