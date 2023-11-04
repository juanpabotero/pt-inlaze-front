import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
})
export class DrinksComponent implements OnInit, OnDestroy {
  dataSuscription: Subscription | undefined;
  drinks: any = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly cocktailService: CocktailsService
  ) {}

  ngOnInit(): void {
    this.dataSuscription = this.activatedRoute.params
      .pipe(
        switchMap(({ type, letter }) => {
          if (type === 'name') {
            return this.cocktailService.getCocktailByName(letter);
          }
          return this.cocktailService.getCocktailsByFirstLetter(letter);
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
