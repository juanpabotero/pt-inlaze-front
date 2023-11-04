import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  initialPopularDrinks = [
    {
      id: 11000,
      name: 'Mojito',
      imageName: 'mojito.png',
    },
    {
      id: 11001,
      name: 'Old Fashioned',
      imageName: 'Old Fashioned.png',
    },
    {
      id: 11002,
      name: 'Long Island Tea',
      imageName: 'Long Island Tea.png',
    },
    {
      id: 11003,
      name: 'Negroni',
      imageName: 'Negroni.png',
    },
    {
      id: 11004,
      name: 'Whiskey Sour',
      imageName: 'Whiskey Sour.png',
    },
    {
      id: 11005,
      name: 'Dry Martini',
      imageName: 'Dry Martini.png',
    },
    {
      id: 11006,
      name: 'Daiquiri',
      imageName: 'Daiquiri.png',
    },
    {
      id: 11007,
      name: 'Margarita',
      imageName: 'Margarita.png',
    },
  ];

  initialPopularIngredients = [
    {
      id: 1,
      name: 'Vodka',
      imageName: 'Vodka.png',
    },
    {
      id: 2,
      name: 'Gin',
      imageName: 'Gin.png',
    },
    {
      id: 3,
      name: 'Rum',
      imageName: 'Rum.png',
    },
    {
      id: 4,
      name: 'Tequila',
      imageName: 'Tequila.png',
    },
  ];

  initialLatestDrinks = [
    {
      id: 178369,
      name: 'Cocktail Horse’s Neck',
      imageName: 'Cocktail Horses Neck.png',
    },
    {
      id: 178368,
      name: 'Planter’s Punch',
      imageName: 'Planters Punch.png',
    },
    {
      id: 178367,
      name: 'Ramos Gin Fizz',
      imageName: 'Ramos Gin Fizz.png',
    },
    {
      id: 178366,
      name: 'Gin Lemon',
      imageName: 'Gin Lemon.png',
    },
    {
      id: 178365,
      name: 'Gin Tonic',
      imageName: 'Gin Tonic.png',
    },
    {
      id: 178364,
      name: 'Vodka Tonic',
      imageName: 'Vodka Tonic.png',
    },
    {
      id: 178363,
      name: 'Vodka Lemon',
      imageName: 'Vodka Lemon.png',
    },
    {
      id: 178362,
      name: 'Vodka Slime',
      imageName: 'Vodka Slime.png',
    },
  ];

  initialRandomIngredients = [
    {
      id: 308,
      name: 'Lime Juice',
      imageName: 'Limeade.png',
    },
    {
      id: 115,
      name: 'Chocolate Syrup',
      imageName: 'Chocolate Syrup.png',
    },
    {
      id: 331,
      name: 'Midori Melon Liqueur',
      imageName: 'Melon Liqueur.png',
    },
    {
      id: 286,
      name: 'Kiwi',
      imageName: 'Kiwi Liqueur.png',
    },
  ];

  initialRandomDrinks = [
    {
      id: 178338,
      name: 'Pure Passion',
      imageName: 'Pure Passion.png',
    },
    {
      id: 12910,
      name: 'Egg Nog #4',
      imageName: 'Egg Nog No4.png',
    },
    {
      id: 12714,
      name: 'Kiwi Papaya Smoothie',
      imageName: 'Kiwi Papaya Smoothie.png',
    },
    {
      id: 13058,
      name: 'Wine Punch',
      imageName: 'Wine Punch.png',
    },
    {
      id: 11053,
      name: 'Arise My Love',
      imageName: 'Arise My Love.png',
    },
    {
      id: 12162,
      name: 'Screwdriver',
      imageName: 'Screwdriver.png',
    },
    {
      id: 13807,
      name: 'After Five',
      imageName: 'After Five.png',
    },
    {
      id: 14588,
      name: '151 Florida Bushwacker',
      imageName: '151 Florida Bushwacker.png',
    },
  ];
}
