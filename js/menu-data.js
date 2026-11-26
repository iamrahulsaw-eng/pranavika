const WHATSAPP_NUMBER = "918249632778";
const PHONE_TEL = "tel:+918249632778";

function getWhatsAppOrderUrl(dishName) {
  if (!dishName) {
    return `https://wa.me/${WHATSAPP_NUMBER}`;
  }
  const message = `Hello Aura by Pranavika! I would like to order ${dishName}. Please share the availability and ordering details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const MENU_CATEGORIES = [
  {
    id: "breakfast",
    code: "A",
    name: "Breakfast",
    subtitle: "Warm, comforting Indian mornings plated fresh to order.",
    items: [
      {
        name: "Poha",
        description: "Fluffy flattened rice tempered with mustard seeds, curry leaves, roasted peanuts, and a bright squeeze of lemon.",
        image: "images/menu/breakfast-poha.jpg"
      },
      {
        name: "Chole Bhature",
        description: "Slow-simmered spiced chickpea curry paired with golden, pillowy puffed bhature and pickled onions.",
        image: "images/menu/breakfast-chole-bhature.jpg"
      },
      {
        name: "Aloo Paratha",
        description: "Whole-wheat flatbread stuffed with spiced mashed potatoes, roasted golden on a tawa and served with curd and pickle.",
        image: "images/menu/breakfast-aloo-paratha.jpg"
      },
      {
        name: "Paneer Paratha",
        description: "Flaky tawa paratha generously filled with fresh grated paneer, green chillies, and aromatic herbs.",
        image: "images/menu/breakfast-paneer-paratha.jpg"
      },
      {
        name: "Vegetable Upma",
        description: "Savoury roasted semolina cooked with crisp garden vegetables, cashews, and fragrant South Indian tempering.",
        image: "images/menu/breakfast-vegetable-upma.jpg"
      }
    ]
  },
  {
    id: "snacks",
    code: "B",
    name: "Snacks & Quick Bites",
    subtitle: "Street-style favourites and café bites for every craving.",
    items: [
      {
        name: "Pav Bhaji",
        description: "Rich, buttery vegetable bhaji slow-mashed with aromatic spices, served alongside toasted soft pav and crisp onions.",
        image: "images/menu/snacks-pav-bhaji.jpg"
      },
      {
        name: "Paneer Sandwich",
        description: "Golden grilled bread layered with spiced crumbled paneer, fresh veggies, and creamy house chutney.",
        image: "images/menu/snacks-paneer-sandwich.jpg"
      },
      {
        name: "Dabeli",
        description: "Sweet-and-spicy Kutchi potato filling tucked inside buttered pav with pomegranate pearls, peanuts, and crunchy sev.",
        image: "images/menu/snacks-dabeli.jpg"
      },
      {
        name: "Paneer Tikka Burger",
        description: "Char-grilled tandoori paneer fillet, crisp lettuce, and smoky mint mayo in a toasted sesame bun.",
        image: "images/menu/snacks-paneer-tikka-burger.jpg"
      },
      {
        name: "Aloo Tikki Burger",
        description: "Crispy herb-spiced potato patty layered with crunchy onions, tomatoes, and tangy signature burger sauce.",
        image: "images/menu/snacks-aloo-tikki-burger.jpg"
      },
      {
        name: "Vada Pav",
        description: "Mumbai's beloved golden batata vada nestled in soft pav with fiery dry garlic chutney and fried green chilli.",
        image: "images/menu/snacks-vada-pav.jpg"
      },
      {
        name: "French Fries",
        description: "Crisp, golden-fried potato batons lightly tossed with sea salt for effortless anytime snacking.",
        image: "images/menu/snacks-french-fries.jpg"
      }
    ]
  },
  {
    id: "mains",
    code: "C",
    name: "Main Course & Paneer Specials",
    subtitle: "Velvety gravies, smoky Indo-Chinese plates, and fragrant rice.",
    items: [
      {
        name: "Veg Biryani with Pudina Raita",
        description: "Long-grain basmati rice layered with saffron, seasonal vegetables, and whole spices, paired with cooling mint raita.",
        image: "images/menu/mains-veg-biryani.jpg"
      },
      {
        name: "Creamy Paneer",
        description: "Tender cottage cheese cubes simmered in a silky, mildly spiced cashew-cream gravy finished with fresh herbs.",
        image: "images/menu/mains-creamy-paneer.jpg"
      },
      {
        name: "Butter Paneer Masala",
        description: "Soft paneer cubes bathed in a rich, velvety tomato-butter makhani sauce infused with kasuri methi.",
        image: "images/menu/mains-butter-paneer-masala.jpg"
      },
      {
        name: "Matar Paneer",
        description: "Classic homestyle north Indian curry combining sweet green peas and soft paneer in spiced tomato-onion gravy.",
        image: "images/menu/mains-matar-paneer.jpg"
      },
      {
        name: "Chilli Paneer",
        description: "Crispy tossed paneer cubes glazed in a bold wok-fired soy, garlic, bell pepper, and spring onion sauce.",
        image: "images/menu/mains-chilli-paneer.jpg"
      },
      {
        name: "Chilli Mushroom",
        description: "Golden button mushrooms stir-fried with crunchy capsicum, onions, crushed garlic, and fiery chilli glaze.",
        image: "images/menu/mains-chilli-mushroom.jpg"
      },
      {
        name: "Dal Fry",
        description: "Comforting yellow lentils slow-cooked and finished with a sizzling ghee tadka of cumin, garlic, and red chillies.",
        image: "images/menu/mains-dal-fry.jpg"
      },
      {
        name: "Plain Rice",
        description: "Steamed, fluffy long-grain basmati rice crafted as the gentle companion to rich curries and dals.",
        image: "images/menu/mains-plain-rice.jpg"
      },
      {
        name: "Jeera Rice",
        description: "Aromatic basmati rice tempered with crackling cumin seeds in pure ghee and garnished with fresh coriander.",
        image: "images/menu/mains-jeera-rice.jpg"
      }
    ]
  },
  {
    id: "breads",
    code: "D",
    name: "Paratha & Indian Breads",
    subtitle: "Golden, hand-rolled breads cooked hot off the tawa with curd and pickle.",
    items: [
      {
        name: "Atta Lachha Paratha",
        description: "Multi-layered whole-wheat flaky paratha brushed with pure ghee until crisp outside and tender inside.",
        image: "images/menu/breads-atta-lachha-paratha.jpg"
      },
      {
        name: "Aloo Paratha",
        description: "Hearty stuffed potato paratha roasted crisp on iron tawa, served warm with fresh curd and tangy pickle.",
        image: "images/menu/breads-aloo-paratha.jpg"
      },
      {
        name: "Paneer Paratha",
        description: "Generously stuffed spiced paneer flatbread cooked golden brown and paired with cool curd and achar.",
        image: "images/menu/breads-paneer-paratha.jpg"
      },
      {
        name: "Tawa Roti",
        description: "Soft, puffed whole-wheat rotis cooked fresh on the griddle for wholesome everyday meals.",
        image: "images/menu/breads-tawa-roti.jpg"
      }
    ]
  },
  {
    id: "pizza",
    code: "E",
    name: "Pizza",
    subtitle: "Freshly baked crusts topped with bubbling mozzarella and vibrant toppings.",
    items: [
      {
        name: "Corn Pizza",
        description: "Crisp golden crust layered with herb tomato sauce, sweet golden corn kernels, and generous melted mozzarella.",
        image: "images/menu/pizza-corn.jpg"
      },
      {
        name: "Mushroom Pizza",
        description: "Sautéed earthy mushrooms, garlic-herb drizzle, and stretchy molten cheese over a freshly baked café crust.",
        image: "images/menu/pizza-mushroom.jpg"
      },
      {
        name: "Paneer Pizza",
        description: "Spiced marinated paneer cubes, crisp capsicum, red onions, and rich mozzarella baked to bubbly perfection.",
        image: "images/menu/pizza-paneer.jpg"
      },
      {
        name: "Corn Mushroom Paneer Pizza",
        description: "Our grand trio loaded with sweet corn, savoury mushrooms, spiced paneer, and indulgent melted cheese.",
        image: "images/menu/pizza-corn-mushroom-paneer.jpg"
      }
    ]
  },
  {
    id: "burgers",
    code: "F",
    name: "Burgers & Combos",
    subtitle: "Crisp patties, toasted brioche buns, melted cheese, and satisfying combos.",
    items: [
      {
        name: "Classic Veg Burger",
        description: "Golden garden-vegetable patty topped with crisp iceberg lettuce, sliced tomato, and creamy herb dressing.",
        image: "images/menu/burgers-classic-veg.jpg"
      },
      {
        name: "Aloo Tikki Burger",
        description: "Crunchy Indian-spiced potato tikki paired with sweet onion rings, fresh lettuce, and zesty burger sauce.",
        image: "images/menu/burgers-aloo-tikki.jpg"
      },
      {
        name: "Crispy Veg Burger",
        description: "Extra-crunchy breaded vegetable patty stacked with melted cheese, pickles, and signature café mayo.",
        image: "images/menu/burgers-crispy-veg.jpg"
      },
      {
        name: "Paneer Tikka Burger",
        description: "Succulent smoky paneer tikka slab, fresh crunchy greens, and mint-garlic sauce inside a soft toasted bun.",
        image: "images/menu/burgers-paneer-tikka.jpg"
      },
      {
        name: "Cheese Burst Burger",
        description: "Crispy golden patty overflowing with warm molten cheese sauce, cheddar slice, and toasted sesame bun.",
        image: "images/menu/burgers-cheese-burst.jpg"
      },
      {
        name: "Burger + French Fries + Coca-Cola Combo",
        description: "A complete café feast pairing our classic crispy veg burger with golden french fries and chilled Coca-Cola.",
        image: "images/menu/burgers-coke-combo.jpg"
      },
      {
        name: "Paneer Burger Combo",
        description: "Rich paneer tikka burger served alongside crisp golden fries and a chilled refreshing beverage.",
        image: "images/menu/burgers-paneer-combo.jpg"
      }
    ]
  },
  {
    id: "fries",
    code: "G",
    name: "French Fries & Loaded Fries",
    subtitle: "Golden crunch dressed in bold spices and indulgent melted cheese.",
    items: [
      {
        name: "Classic French Fries",
        description: "Thick-cut golden potatoes fried crisp to order and lightly dusted with fine sea salt.",
        image: "images/menu/fries-classic.jpg"
      },
      {
        name: "Peri Peri Fries",
        description: "Hot, crispy fries tossed in vibrant smoky peri-peri spice blend for a fiery, tangy kick.",
        image: "images/menu/fries-peri-peri.jpg"
      },
      {
        name: "Cheese Fries",
        description: "Crisp golden fries generously drenched in warm, velvety cheddar cheese sauce and subtle herbs.",
        image: "images/menu/fries-cheese.jpg"
      },
      {
        name: "Loaded Mexican Fries",
        description: "Crunchy fries piled high with molten cheese, spicy salsa, jalapeños, sweet corn, and creamy drizzle.",
        image: "images/menu/fries-loaded-mexican.jpg"
      }
    ]
  },
  {
    id: "subs",
    code: "H",
    name: "Subs & Long Sandwiches",
    subtitle: "Freshly baked six-inch submarine loaves packed with crisp fillings.",
    items: [
      {
        name: "Classic Veggie Sub",
        description: "Soft six-inch artisan sub filled with crisp lettuce, cucumber, juicy tomatoes, capsicum, and creamy dressing.",
        image: "images/menu/subs-classic-veggie.jpg"
      },
      {
        name: "Corn & Cheese Sub",
        description: "Toasted submarine bread loaded with sweet corn kernels, melted cheese, fresh greens, and herb mayo.",
        image: "images/menu/subs-corn-cheese.jpg"
      },
      {
        name: "Paneer Tikka Sub",
        description: "Smoky roasted paneer cubes layered with crunchy garden veggies and cooling mint-tandoori sauce.",
        image: "images/menu/subs-paneer-tikka.jpg"
      },
      {
        name: "Mexican Cheese Sub",
        description: "Zesty six-inch sub packed with spiced corn, jalapeños, molten cheese, lettuce, and tangy chipotle mayo.",
        image: "images/menu/subs-mexican-cheese.jpg"
      },
      {
        name: "Tandoori Paneer Sub",
        description: "Charred tandoori-spiced paneer strips nestled in fresh six-inch loaf with crisp veggies and creamy dressing.",
        image: "images/menu/subs-tandoori-paneer.jpg"
      }
    ]
  },
  {
    id: "waffles",
    code: "I",
    name: "Waffles & Desserts",
    subtitle: "Warm, crisp Belgian waffles drizzled with decadent chocolate and toppings.",
    items: [
      {
        name: "Classic Chocolate Waffle",
        description: "Golden crisp waffle finished with glossy melted milk chocolate drizzle and delicate chocolate curls.",
        image: "images/menu/waffles-classic-chocolate.jpg"
      },
      {
        name: "Belgian Chocolate Waffle",
        description: "Warm, airy Belgian waffle generously coated in rich dark and milk Belgian ganache for pure cocoa bliss.",
        image: "images/menu/waffles-belgian-chocolate.jpg"
      },
      {
        name: "Oreo Waffle",
        description: "Crisp chocolate-drizzled waffle topped with crushed Oreo cookies and velvety cookies-and-cream drizzle.",
        image: "images/menu/waffles-oreo.jpg"
      },
      {
        name: "KitKat Waffle",
        description: "Warm golden waffle crowned with rich chocolate sauce and crunchy KitKat wafer fingers.",
        image: "images/menu/waffles-kitkat.jpg"
      },
      {
        name: "Chocolate Brownie Waffle",
        description: "Indulgent waffle layered with warm fudgy brownie chunks, dark chocolate ganache, and roasted nuts.",
        image: "images/menu/waffles-chocolate-brownie.jpg"
      },
      {
        name: "Waffle with Ice Cream",
        description: "Freshly griddled warm waffle crowned with a generous scoop of creamy vanilla ice cream and hot fudge.",
        image: "images/menu/waffles-ice-cream.jpg"
      }
    ]
  },
  {
    id: "beverages",
    code: "J",
    name: "Beverages & Shakes",
    subtitle: "Thick, velvety café shakes and chilled coffee blended to perfection.",
    items: [
      {
        name: "Classic Cold Coffee",
        description: "Rich espresso-style coffee blended smooth with chilled milk and frothy café crema.",
        image: "images/menu/beverages-classic-cold-coffee.jpg"
      },
      {
        name: "Cold Coffee with Ice Cream",
        description: "Velvety iced coffee crowned with a scoop of creamy vanilla ice cream and cocoa dust.",
        image: "images/menu/beverages-cold-coffee-ice-cream.jpg"
      },
      {
        name: "Chocolate Shake",
        description: "Thick, decadent cocoa milkshake spun with rich chocolate syrup and topped with silky swirl.",
        image: "images/menu/beverages-chocolate-shake.jpg"
      },
      {
        name: "Oreo Shake",
        description: "Creamy thick milkshake blended with crushed Oreo cookies, topped with whipped cream and cookie crunch.",
        image: "images/menu/beverages-oreo-shake.jpg"
      },
      {
        name: "KitKat Shake",
        description: "Smooth chocolate milkshake infused with crunchy KitKat wafers and finished with chocolate drizzle.",
        image: "images/menu/beverages-kitkat-shake.jpg"
      },
      {
        name: "Brownie Shake",
        description: "Ultra-rich milkshake blended with fudgy chocolate brownie chunks for a spoonably thick treat.",
        image: "images/menu/beverages-brownie-shake.jpg"
      },
      {
        name: "Strawberry Shake",
        description: "Lush, chilled blush-pink milkshake blended with sweet strawberries and silky cream.",
        image: "images/menu/beverages-strawberry-shake.jpg"
      }
    ]
  }
];

const SIGNATURE_FAVOURITES = [
  {
    name: "Paneer Tikka Burger",
    tag: "Café Signature",
    description: "Smoky char-grilled paneer tikka patty layered with crisp greens, pickled onions, and cooling mint mayo in a toasted brioche bun.",
    image: "images/menu/burgers-paneer-tikka.jpg"
  },
  {
    name: "Butter Paneer Masala",
    tag: "House Classic",
    description: "Velvety slow-simmered tomato and butter makhani gravy hugging melt-in-mouth paneer cubes with fragrant kasuri methi.",
    image: "images/menu/mains-butter-paneer-masala.jpg"
  },
  {
    name: "Veg Biryani",
    tag: "Royal Feast",
    description: "Fragrant saffron-kissed basmati rice layered with spiced seasonal vegetables and served with refreshing pudina raita.",
    image: "images/menu/mains-veg-biryani.jpg"
  },
  {
    name: "Loaded Mexican Fries",
    tag: "Crowd Favourite",
    description: "Crispy golden fries smothered in molten cheese sauce, zesty salsa, jalapeños, and sweet corn.",
    image: "images/menu/fries-loaded-mexican.jpg"
  },
  {
    name: "Belgian Chocolate Waffle",
    tag: "Sweet Indulgence",
    description: "Crisp-edged warm Belgian waffle drenched in rich dark and milk Belgian chocolate ganache.",
    image: "images/menu/waffles-belgian-chocolate.jpg"
  },
  {
    name: "Oreo Shake",
    tag: "Chilled Classic",
    description: "Thick, creamy cookies-and-cream shake blended with crushed Oreos and topped with velvety cream.",
    image: "images/menu/beverages-oreo-shake.jpg"
  }
];

const GALLERY_ITEMS = [
  {
    title: "Butter Paneer Masala & Lachha Paratha",
    category: "Paneer Dishes",
    image: "images/menu/mains-butter-paneer-masala.jpg"
  },
  {
    title: "Saffron Veg Biryani with Pudina Raita",
    category: "Veg Biryani",
    image: "images/menu/mains-veg-biryani.jpg"
  },
  {
    title: "Paneer Tikka Burger & Crispy Fries",
    category: "Burgers & Fries",
    image: "images/menu/burgers-paneer-combo.jpg"
  },
  {
    title: "Corn, Mushroom & Paneer Artisan Pizza",
    category: "Pizza",
    image: "images/menu/pizza-corn-mushroom-paneer.jpg"
  },
  {
    title: "Belgian Chocolate Waffle",
    category: "Waffles",
    image: "images/menu/waffles-belgian-chocolate.jpg"
  },
  {
    title: "Thick Oreo & Chocolate Milkshakes",
    category: "Milkshakes",
    image: "images/menu/beverages-oreo-shake.jpg"
  },
  {
    title: "Tandoori Paneer Six-Inch Sub",
    category: "Sandwiches & Subs",
    image: "images/menu/subs-tandoori-paneer.jpg"
  },
  {
    title: "Wholesome Indian Paratha & Dal Meal",
    category: "Indian Meals",
    image: "images/menu/breakfast-chole-bhature.jpg"
  }
];
