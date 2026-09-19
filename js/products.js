const products = [

    {
        id: 1,
        name: "Classic Smash Burger",
        category: "Burgers",
        price: 6500,
        oldPrice: 7500,
        rating: 4.9,
        reviews: 328,
        emoji: "🍔",
        image: "https://images.unsplash.com/photo-1571805618149-3a772570ebcd?auto=format&fit=crop&w=900&q=80",
        description:
            "A juicy smashed beef patty with melted cheddar, fresh lettuce, tomato, onions and our signature Crave sauce.",
        ingredients: [
            "Beef patty",
            "Cheddar cheese",
            "Lettuce",
            "Tomato",
            "Onions",
            "Crave sauce",
            "Brioche bun"
        ],
        calories: 720,
        time: "20–30 min",
        popular: true
    },

    {
        id: 2,
        name: "Double Cheese Burger",
        category: "Burgers",
        price: 8500,
        rating: 4.8,
        reviews: 214,
        emoji: "🍔",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Classic_double_cheeseburger.jpg",
        description:
            "Two juicy beef patties stacked with double cheddar cheese and our special burger sauce.",
        ingredients: [
            "2 beef patties",
            "Double cheddar",
            "Pickles",
            "Onions",
            "Burger sauce",
            "Brioche bun"
        ],
        calories: 950,
        time: "25–35 min",
        popular: true
    },

    {
        id: 3,
        name: "Pepperoni Pizza",
        category: "Pizza",
        price: 9000,
        rating: 4.9,
        reviews: 412,
        emoji: "🍕",
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=80",
        description:
            "Crispy hand-stretched dough topped with tomato sauce, mozzarella and premium pepperoni.",
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella",
            "Pepperoni",
            "Italian herbs"
        ],
        calories: 840,
        time: "25–40 min",
        popular: true
    },

    {
        id: 4,
        name: "BBQ Chicken Pizza",
        category: "Pizza",
        price: 10500,
        rating: 4.7,
        reviews: 176,
        emoji: "🍕",
        image: "https://images.unsplash.com/photo-1716237387859-1ef02b430b91?auto=format&fit=crop&w=900&q=80",
        description:
            "Smoky BBQ chicken, mozzarella, red onions and BBQ sauce on freshly baked pizza dough.",
        ingredients: [
            "Pizza dough",
            "BBQ chicken",
            "Mozzarella",
            "Red onion",
            "BBQ sauce"
        ],
        calories: 890,
        time: "30–40 min",
        popular: false
    },

    {
        id: 5,
        name: "Crispy Fried Chicken",
        category: "Chicken",
        price: 7000,
        rating: 4.8,
        reviews: 289,
        emoji: "🍗",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80",
        description:
            "Golden crispy chicken seasoned with our signature blend of herbs and spices.",
        ingredients: [
            "Chicken",
            "Flour",
            "Signature seasoning",
            "Herbs",
            "Spices"
        ],
        calories: 680,
        time: "20–30 min",
        popular: true
    },

    {
        id: 6,
        name: "Loaded Chicken Box",
        category: "Chicken",
        price: 11000,
        rating: 4.9,
        reviews: 151,
        emoji: "🍗",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kfc%20Kenya.jpg",
        description:
            "Crispy chicken, fries, coleslaw and your choice of dipping sauce.",
        ingredients: [
            "Crispy chicken",
            "French fries",
            "Coleslaw",
            "Dipping sauce"
        ],
        calories: 1050,
        time: "25–35 min",
        popular: true
    },

    {
        id: 7,
        name: "Loaded Fries",
        category: "Sides",
        price: 4500,
        rating: 4.7,
        reviews: 193,
        emoji: "🍟",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Loaded%20fries%20food.jpg",
        description:
            "Crispy golden fries loaded with cheese, beef bits and our signature sauce.",
        ingredients: [
            "French fries",
            "Cheese",
            "Beef bits",
            "Crave sauce"
        ],
        calories: 620,
        time: "15–25 min",
        popular: true
    },

    {
        id: 8,
        name: "Chocolate Milkshake",
        category: "Drinks",
        price: 3500,
        rating: 4.9,
        reviews: 238,
        emoji: "🥤",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chocolate%20Milkshake.jpg",
        description:
            "Rich and creamy chocolate milkshake topped with whipped cream.",
        ingredients: [
            "Milk",
            "Chocolate",
            "Ice cream",
            "Whipped cream"
        ],
        calories: 520,
        time: "10–15 min",
        popular: true
    },

    {
        id: 9,
        name: "Strawberry Shake",
        category: "Drinks",
        price: 3500,
        rating: 4.8,
        reviews: 165,
        emoji: "🥤",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_milkshake.jpg",
        description:
            "Creamy strawberry shake made with real strawberries and vanilla ice cream.",
        ingredients: [
            "Strawberries",
            "Milk",
            "Vanilla ice cream"
        ],
        calories: 490,
        time: "10–15 min",
        popular: false
    },

    {
        id: 10,
        name: "Chocolate Cake",
        category: "Desserts",
        price: 4000,
        rating: 4.9,
        reviews: 201,
        emoji: "🍰",
        image: "https://images.unsplash.com/photo-1540337706094-da10342c93d8?auto=format&fit=crop&w=900&q=80",
        description:
            "Soft chocolate cake layered with rich chocolate cream.",
        ingredients: [
            "Chocolate cake",
            "Cocoa",
            "Chocolate cream",
            "Vanilla"
        ],
        calories: 560,
        time: "10–15 min",
        popular: true
    },

    {
        id: 11,
        name: "Chicken Wrap",
        category: "Chicken",
        price: 5500,
        rating: 4.7,
        reviews: 132,
        emoji: "🌯",
        image: "https://images.unsplash.com/photo-1632660346941-023cc64e1252?auto=format&fit=crop&w=900&q=80",
        description:
            "Grilled chicken wrapped with lettuce, tomatoes, onions and creamy sauce.",
        ingredients: [
            "Grilled chicken",
            "Tortilla",
            "Lettuce",
            "Tomato",
            "Onion",
            "Creamy sauce"
        ],
        calories: 590,
        time: "15–25 min",
        popular: false
    },

    {
        id: 12,
        name: "Coke",
        category: "Drinks",
        price: 1500,
        rating: 4.6,
        reviews: 90,
        emoji: "🥤",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Coca-Cola%20330ml%20can.jpg",
        description:
            "Ice-cold Coca-Cola served chilled.",
        ingredients: [
            "Coca-Cola"
        ],
        calories: 140,
        time: "5–10 min",
        popular: false
    },

    { id: 13, name: "Jollof Rice & Chicken", category: "Rice", price: 8500, oldPrice: 9500, rating: 4.9, reviews: 187, emoji: "🍛", image: "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?auto=format&fit=crop&w=900&q=80", description: "Smoky Nigerian jollof rice served with seasoned grilled chicken and fresh garnish.", ingredients: ["Jollof rice", "Grilled chicken", "Tomato pepper sauce", "Onions", "Herbs"], calories: 780, time: "25–35 min", popular: true },
    { id: 14, name: "Spaghetti Bolognese", category: "Pasta", price: 8000, rating: 4.8, reviews: 164, emoji: "🍝", image: "https://images.unsplash.com/photo-1627042633145-b780d842ba45?auto=format&fit=crop&w=900&q=80", description: "Spaghetti tossed in rich tomato beef sauce and finished with fresh herbs.", ingredients: ["Spaghetti", "Beef mince", "Tomato sauce", "Parmesan", "Herbs"], calories: 760, time: "20–30 min", popular: true },
    { id: 15, name: "Garlic Shrimp Pasta", category: "Pasta", price: 10500, rating: 4.9, reviews: 143, emoji: "🍤", image: "https://images.unsplash.com/photo-1516684902511-1e07238471ad?auto=format&fit=crop&w=900&q=80", description: "Creamy pasta with garlic-seasoned shrimp, herbs and a touch of parmesan.", ingredients: ["Pasta", "Shrimp", "Garlic", "Cream", "Parmesan", "Parsley"], calories: 820, time: "25–35 min", popular: false },
    { id: 16, name: "Crispy Chicken Sandwich", category: "Sandwiches", price: 6500, oldPrice: 7500, rating: 4.8, reviews: 221, emoji: "🥪", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crispy%20premium%20chicken%20sandwich.JPG", description: "Crispy chicken fillet, lettuce and tomato in a toasted sesame bun with house sauce.", ingredients: ["Chicken fillet", "Lettuce", "Tomato", "Sesame bun", "House sauce"], calories: 690, time: "15–25 min", popular: true },
    { id: 17, name: "Blueberry Pancakes", category: "Breakfast", price: 5500, rating: 4.8, reviews: 119, emoji: "🥞", image: "https://images.unsplash.com/photo-1698855904626-0d5400ee7e31?auto=format&fit=crop&w=900&q=80", description: "Fluffy pancakes stacked with blueberries and warm maple syrup.", ingredients: ["Pancakes", "Blueberries", "Maple syrup", "Butter"], calories: 610, time: "15–20 min", popular: false },
    { id: 18, name: "Berry Waffle", category: "Breakfast", price: 6000, rating: 4.7, reviews: 98, emoji: "🧇", image: "https://images.unsplash.com/photo-1666052137730-e2c5c87f5671?auto=format&fit=crop&w=900&q=80", description: "Crisp golden waffle topped with mixed berries, nuts and syrup.", ingredients: ["Waffle", "Strawberries", "Blueberries", "Raspberries", "Syrup"], calories: 640, time: "15–25 min", popular: false },
    { id: 19, name: "Creamy Mac & Cheese", category: "Sides", price: 5000, oldPrice: 6000, rating: 4.9, reviews: 207, emoji: "🧀", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mac-and-cheese.jpg", description: "Creamy macaroni baked with a golden cheese topping.", ingredients: ["Macaroni", "Cheddar", "Cream", "Milk", "Seasoning"], calories: 700, time: "15–25 min", popular: true },
    { id: 20, name: "Chicken & Rice Plate", category: "Rice", price: 7500, rating: 4.8, reviews: 156, emoji: "🍗", image: "https://commons.wikimedia.org/wiki/Special:FilePath/White%20rice%20with%20vegetable%20sauce%20and%20fried%20chicken.jpg", description: "Seasoned fried chicken served with fluffy rice and fresh vegetables.", ingredients: ["Fried chicken", "Rice", "Vegetables", "Sauce", "Herbs"], calories: 790, time: "25–35 min", popular: true },
    { id: 21, name: "Beef Tacos", category: "Mexican", price: 7000, rating: 4.8, reviews: 134, emoji: "🌮", image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=80", description: "Soft tacos filled with seasoned beef, lettuce, salsa and creamy sauce.", ingredients: ["Beef", "Tortillas", "Lettuce", "Salsa", "Creamy sauce"], calories: 650, time: "20–30 min", popular: false },
    { id: 22, name: "Chicken Burrito", category: "Mexican", price: 7500, oldPrice: 8500, rating: 4.7, reviews: 111, emoji: "🌯", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80", description: "A warm tortilla packed with seasoned chicken, rice, beans, cheese and salsa.", ingredients: ["Chicken", "Rice", "Beans", "Cheese", "Salsa", "Tortilla"], calories: 810, time: "20–30 min", popular: false },
    { id: 23, name: "Nigerian Jollof & Chicken", category: "Nigerian", price: 8500, oldPrice: 9500, rating: 4.9, reviews: 204, emoji: "🍛", image: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20Nigeria%20Jollof%20Rice%20with%20chicken.jpg", description: "Smoky Nigerian jollof rice served with seasoned chicken and fresh garnish.", ingredients: ["Jollof rice", "Chicken", "Tomato pepper sauce", "Onions", "Plantain"], calories: 790, time: "25–35 min", popular: true },
    { id: 24, name: "Egusi Soup & Pounded Yam", category: "Nigerian", price: 9500, rating: 4.9, reviews: 176, emoji: "🥣", image: "https://commons.wikimedia.org/wiki/Special:FilePath/EGUSI%20SOUP%20AND%20POUNDED%20YAM.JPG", description: "Rich Nigerian egusi soup paired with smooth, freshly prepared pounded yam.", ingredients: ["Egusi", "Pounded yam", "Spinach", "Palm oil", "Assorted meat"], calories: 860, time: "30–40 min", popular: true },
    { id: 25, name: "Amala & Ewedu", category: "Nigerian", price: 8000, rating: 4.8, reviews: 143, emoji: "🍲", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Amala%20and%20ewedu.jpg", description: "Soft amala with silky ewedu and a rich Nigerian stew-style accompaniment.", ingredients: ["Amala", "Ewedu", "Gbegiri", "Pepper stew", "Assorted meat"], calories: 820, time: "25–35 min", popular: false },
    { id: 26, name: "Beef Suya", category: "Nigerian", price: 7000, rating: 4.9, reviews: 231, emoji: "🥩", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nigerian%20suyaaa.jpg", description: "Spiced grilled beef skewers coated in classic yaji and served with onions.", ingredients: ["Beef", "Yaji spice", "Groundnut", "Onions", "Pepper"], calories: 610, time: "15–25 min", popular: true },

];