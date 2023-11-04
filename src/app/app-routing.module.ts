import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DrinkComponent } from './pages/drink/drink.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { DrinksComponent } from './pages/drinks/drinks.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'drink/:id',
    component: DrinkComponent,
  },
  {
    path: 'ingredient/:name',
    component: IngredientComponent,
  },
  {
    path: 'drinks/:type/:letter',
    component: DrinksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
