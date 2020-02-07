let MenuData = {
  "title": "Carmine’s Italian",
  "description": "Portland's Best Italian Food Delivery!",
  "choice-sets": {
    "dressing":
    {
      "title": "Choice of Dressing:",
      "choices": [
        {
          "title": "Caesar"
        },
        {
          "title": "Red Wine Vinaigrette"
        },
        {
          "title": "Balsamic Vinaigrette"
        }
      ]
    },
    "pasta":
    {
      "id": "pasta",
      "title": "Choice of Pasta:",
      "choices": [
        {
          "title": "Spaghetti"
        },
        {
          "title": "Penne"
        },
        {
          "title": "Cavatappi"
        },
        {
          "title": "Ravioli",
          "price": "3.00"
        }
      ]
    },
    "sauce":
    {
      "title": "Choice of Sauce:",
      "choices": [
        {
          "title": "Red Sauce",
          "description": "(Classic red sauce)",
          "choices": "pasta_add_ons"
        },
        {
          "title": "Primavera",
          "description": "(A light, white wine butter sauce finished with Parmesan Reggiano and a squeeze of lemon)"
        },
        {
          "title": "Bolognese",
          "description": "(Classic meat red sauce)",
          "price": "2.00"
        },
        {
          "title": "Carbonara",
          "description": "(Rich cream sauce with bacon, garlic and English peas)",
          "price": "2.00"
        },
        {
          "title": "White Bean and Sausage",
          "description": "(Ragu of slow cooked white beans, Italian sausage, fresh herbs and onions)",
          "price": "2.00"
        },
        {
          "title": "Smoked Tomato and Goat Cheese",
          "description": "(House smoked tomato sauce with fresh basil and goat cheese)",
          "price": "2.00"
        }
      ]
    },
    "pasta_add_ons":
    {
      "title": "Add Ons:",
      "choices": [
        {
          "title": "Meatballs",
          "price": "3.00"
        }
      ]
    },
    "dessert_compote":
    {
      "title": "Compote Choices:",
      "choices": [
        {
          "title": "Blackberry"
        },
        {
          "title": "Strawberry"
        }
      ]
    },
    "crust":
    {
      "title": "Choose Your Own Crust:",
      "choices": [
        {
          "title": "Everything Bagel"
        },
        {
          "title": "Parmesan Cornmeal"
        },
        {
          "title": "Smoked Salt"
        },
        {
          "title": "Italian Herb Blend"
        }
      ]
    },
    "ingredients":
    {
      "title": "Ingredienti Choices:",
      "price": "2.00",
      "limit": 3,
      "choices": [
        {"title": "Pepperoni"},
        {"title": "Italian Sausage"},
        {"title": "Ham"},
        {"title": "Bacon"},
        {"title": "Blackened Chicken"},
        {"title": "Smoked Chicken"},
        {"title": "Lamb Sausage Meatball"},
        {"title": "Artichoke Heart"},
        {"title": "Arugula"},
        {"title": "Fresh Basil"},
        {"title": "Broccoli"},
        {"title": "Spinach"},
        {"title": "Roasted Red Pepper"},
        {"title": "Mushroom"},
        {"title": "Olive"},
        {"title": "Pineapple"},
        {"title": "Red Onion"},
        {"title": "Garlic"},
        {"title": "Chevre"},
        {"title": "Feta"},
        {"title": "Fresh Mozzarella"}
      ]
    }

  },
  "categories": [
    {
      "id": "salad",
      "title": "SALAD",
      "description":"All Large",
      "choices": [
        "dressing"
      ],
      "products": [
        {
          "title": "Caesar",
          "description": "(Classic Caesar with garlic & anchovy dressing, romaine lettuce and toasted crouton)",
          "image": "Caesar.jpg",
          "price": "10.00"
        },
        {
          "title": "Italian Garden",
          "description": "(Mixed greens, pickled red onions, tomatoes, black olives, cucumbers and a house red vinaigrette)",
          "image": "Garden_Salad.jpg",
          "price": "10.00"
        },
        {
          "title": "Panzanella with Spinach",
          "description": "(Toasted bread salad, with tomato red wine vinaigrette, pickled red onion, artichoke hearts, crispy pepperoni, parmesan cheese and pesto)",
          "image": "Panzanilla.jpg",
          "price": "10.00"
        }
      ]
    },
    {
      "id": "soup",
      "title": "Soup",
      "products": [
        {
          "title": "Made from Scratch Authentic Minestrone (16 oz)",
          "description": "(Hearty broth with sausage and vegetables)",
          "price": "7.00"
        }
      ]
    },
    {
      "id": "bread",
      "title": "Bread",
      "products": [
        {
          "title": "House Garlic Bread",
          "price": "4.00"
        },
        {
          "title": "House Garlic Bread with Cheese",
          "price": "5.00"
        },
        {
          "title": "House Garlic Bread with Cheese and Scratch Pesto",
          "price": "6.00"
        }
      ]
    },
    {
      "id": "pasta",
      "title": "Pasta for Two",
      "choices": [
        "pasta",
        "sauce",
        "pasta_add_ons"
      ],
      "products": [
        {
          "title": "Your Choice of Pasta and Sauce",
          "image": "smoked_tomato2.jpg",
          "price": "12.00"
        }
      ]
    },
    {
      "id": "pizza",
      "title": "PIZZA",
      "image": "pepperoni.jpg",
      "choices": [
        "crust"
      ],
      "products": [
        {
          "title": "House Cheese Pizza",
          "description":"",
          "price": "21.00"
        },
        {
          "title": "125 Pepperoni Pizza",
          "image": "pepperoni.jpg",
          "description":"",
          "price": "23.00"
        },
        {
          "title": "Hawaiian",
          "description": "(Pineapple & Ham)",
          "image": "hawaiian.jpg",
          "price": "25.00"
        },
        {
          "title": "Margherita",
          "description": "(Tomato base, fresh mozzarella, basil, dash of olive oil)",
          "image": "margarita.jpg",
          "price": "25.00"
        },
        {
          "title": "Italian Garden",
          "description": "(Tomato base, roasted broccoli, artichoke hearts, mushrooms, garlic cloves, roasted peppers, mozzarella)",
          "image": "garden.jpg",
          "price": "28.00"
        },
        {
          "title": "Meat Lovers",
          "description": "(Tomato base, pepperoni, sausage, meatballs, bacon, ham, mozzarella)",
          "image": "meat_lovers.jpg",
          "price": "28.00"
        },
        {
          "title": "Sausage Pepper Onion",
          "description": "(Tomato base, roasted Italian sausage, roasted peppers, red onion, mozzarella)",
          "image": "sausage_pepper_adn_onion.jpg",
          "price": "27.00"
        },
        {
          "title": "Bacon Garlic Arugula",
          "description": "(Garlic cream base, roasted bacon, arugula, white truffle oil, mozzarella)",
          "price": "27.00",
          "image": "bacon_arugula.jpg"
        },
        {
          "title": "Blackened Chicken",
          "description": "(Garlic cream base, house blackened chicken, roasted bacon, red onion, mozzarella)",
          "image": "blackened_chicken.jpg",
          "price": "27.00"
        },
        {
          "title": "Lamb Sausage",
          "description": "(Garlic cream base, Mediterranean lamb sausage, fresh herb blend, pickled red onion, black olives, feta cheese, mozzarella)",
          "image": "lamb_sausage.jpg",
          "price": "27.00"
        },
        {
          "title": "Tre Ingredienti",
          "description": "(pick three toppings)",
          "price": "21.00",
          "options": ["ingredients"]
        }
      ]
    },
    {
      "id": "dessert",
      "title": "DESSERT",
      "products": [
        {
          "title": "Slice of classic New York Cheesecake with Choice of Compote",
          "choices": ["dessert_compote"],
          "image": "Cheesecake.jpg",
          "price": "7.50"
        },
        {
          "title": "Two Large Cannoli with Sweet Mascarpone and Creme Anglaise",
          "description": "(Crispy cookie stuffed with sweetened ricotta and mascarpone cheese, chocolate and crepe sauce)",
          "image": "canoli.jpg",
          "price": "7.50"
        },
        {
          "title": "Large Bread Pudding with Bourbon Caramel and Creme Anglaise",
          "description": "(Sweetened baked custard with a rich bourbon caramel sauce)",
          "image": "bread_pudding.jpg",
          "price": "7.50"
        }
      ]
    }
  ]
};