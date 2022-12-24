export interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  color: string;
  discountPercentage?: number;
  rating: number;
  stock: number;
  brand: Array<string>;
  category: string;
  bodyStyle: string;
  thumbnail: string;
  images: Array<string>;
  count: number;
}

export const products: Array<IProducts> = [
  {
    id: 1,
    title: 'Lamborghini Urus',
    description: `Lamborghini Urus is the first Super Sport Utility Vehicle in the world, merging the soul of
      a super sports car with the practical functionality of an SUV.`,
    price: 200000,
    color: 'yellow',
    discountPercentage: 2,
    rating: 5,
    stock: 2,
    brand: ['Lamborghini'],
    category: 'Real car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Lamborghini_Urus_01.webp', 'Lamborghini_Urus_02.webp', 'Lamborghini_Urus_03.webp'],
    count: 1
  },
  {
    id: 2,
    title: 'Lamborghini Urus 12V Kids Electric Ride',
    // https://www.outdoortoys.co.uk/licensed-lamborghini-urus-12v-ride-on-children-s-electric-suv
    description: 'This sporty machine a real head turner that will grab the attention of anyone who sees it drive by.',
    price: 350,
    color: 'green',
    discountPercentage: 10,
    rating: 4.5,
    stock: 25,
    brand: ['DAKOTT', 'Lamborghini'],
    category: 'Kids car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Lamborghini-Urus-Kids_01.jpg', 'Lamborghini-Urus-Kids_02.jpg', 'Lamborghini-Urus-Kids_03.jpg'],
    count: 1
  },
  {
    id: 3,
    title: 'Maisto Lamborghini Urus Car 1:24', // https://www.amazon.in/Maisto-24-Lamborghini-Urus-Yellow/dp/B07GPF1ZCY
    description: 'Great item for gifting to a loved one.',
    price: 70,
    color: 'yellow',
    discountPercentage: 20,
    rating: 4.3,
    stock: 273,
    brand: ['Maisto', 'Lamborghini'],
    category: 'Scale car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Lamborghini-Urus-scale_01.jpg', 'Lamborghini-Urus-scale_02.jpg', 'Lamborghini-Urus-scale_01.jpg'],
    count: 1
  },
  {
    id: 4,
    title: 'DAKOTT Lamborghini Centenario', // https://www.amazon.in/Maisto-24-Lamborghini-Urus-Yellow/dp/B07GPF1ZCY
    description: 'Great item for gifting to a loved one.',
    price: 310,
    color: 'grey',
    discountPercentage: 10,
    rating: 4.5,
    stock: 28,
    brand: ['DAKOTT', 'Lamborghini'],
    category: 'Kids car',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: [
      'Lamborghini_Centenario_kids_01.webp',
      'Lamborghini_Centenario_kids_02.webp',
      'Lamborghini_Centenario_kids_03.webp',
    ],
    count: 1
  },
  {
    id: 5,
    title: 'Lamborghini Centenario',
    description: `The Centenario is the first Lamborghini automobile to have 3 exhausts and
      to be deployed with rear-wheel steering.`,
    price: 2000000,
    color: 'grey',
    discountPercentage: 2,
    rating: 5,
    stock: 1,
    brand: ['Lamborghini'],
    category: 'Real car',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: ['Lamborghini-Centenario_01.jpg', 'Lamborghini-Centenario_02.jpg', 'Lamborghini-Centenario_03.jpg'],
    count: 1
  },
  {
    id: 6,
    title: 'Maisto Special Edition Lamborghini Centenario 1:18',
    // https://www.amazon.co.uk/Maisto-Special-Lamborghini-Centenario-Yellow/dp/B08K2RNKCJ
    description: 'Opening doors and engine compartment, full function steering.',
    price: 89,
    color: 'yellow',
    discountPercentage: 20,
    rating: 4.8,
    stock: 103,
    brand: ['Maisto', 'Lamborghini'],
    category: 'Scale car',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: [
      'Lamborghini_Centario_scale_01.jpg',
      'Lamborghini_Centario_scale_02.jpg',
      'Lamborghini_Centario_scale_03.jpg',
    ],
    count: 1
  },
  {
    id: 7,
    title: 'Mercedes AMG GT R Kids 12v',
    // https://kidselectriccars.co.uk/red-official-mercedes-amg-gt-r-kids-12v-ride-on-car---remote/
    description: `This is the one person size ride on super car is officially branded by Mercedes,
      so comes complete with badges and detailing that you would find on a showroom floor.`,
    price: 120,
    color: 'red',
    discountPercentage: 10,
    rating: 3.7,
    stock: 89,
    brand: ['MIGOTOYS', 'Mercedes'],
    category: 'Kids car',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: ['Mercedes_AMG_kids_01.jpg', 'Mercedes_AMG_kids_02.jpg', 'Mercedes_AMG_kids_03.jpg'],
    count: 1
  },
  {
    id: 8,
    title: 'Mercedes AMG GT R',
    // https://www.topgear.com/car-reviews/mercedes-benz/amg-gt/gt-r-2dr-auto/first-drive-0
    description: `Just the right doses of professionalism and personality: that's the GT R.
      The standard car's one for the poseurs. This is one for the drivers.`,
    price: 179000,
    color: 'green',
    discountPercentage: 2,
    rating: 4.5,
    stock: 3,
    brand: ['Mercedes'],
    category: 'Real car',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: ['Mercedes_AMG_01.webp', 'Mercedes_AMG_02.webp', 'Mercedes_AMG_03.webp'],
    count: 1
  },
  {
    id: 9,
    title: 'Mercedes AMG GT R 1:18',
    // https://www.amazon.co.uk/Vehicles-Mercedes-Benz-Full-open-Simulation-Collection/dp/B0BLZ4DQMR/
    description: `Strictly scaled according to the original car data, the aerodynamic design makes the model car achieve
      an excellent balance, bringing a sporty appearance full of beauty and texture`,
    price: 1200,
    color: 'green',
    discountPercentage: 20,
    rating: 4.5,
    stock: 38,
    brand: ['APLIQE', 'Mercedes'],
    category: 'Scale car',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: ['Mercedes_AMG_scale_01.jpg', 'Mercedes_AMG_scale_02.jpg', 'Mercedes_AMG_scale_03.jpg'],
    count: 1
  },
  {
    id: 10,
    title: 'Vilac Vintage Metal Ride-On Car',
    // https://www.amazon.co.uk/Vehicles-Mercedes-Benz-Full-open-Simulation-Collection/dp/B0BLZ4DQMR/
    description: `Strictly scaled according to the original car data, the aerodynamic design makes the model car achieve
      an excellent balance, bringing a sporty appearance full of beauty and texture`,
    price: 120,
    color: 'white',
    discountPercentage: 10,
    rating: 4.8,
    stock: 12,
    brand: ['Vilac'],
    category: 'Kids car',
    bodyStyle: 'cabriolet',
    thumbnail: '',
    images: ['Vilac_vintage_kids_01.webp', 'Vilac_vintage_kids_02.webp', 'Vilac_vintage_kids_03.jpg'],
    count: 1
  },
  {
    id: 11,
    title: 'Aosom Mercedes Benz G-500 12V Official',
    // https://kidselectriccars.co.uk/12v-official-green-mercedes-benz-g-500-ride-on-suv-with-remote/
    description: `The G-500 has become an icon of SUV style, and now young droivers aged 3-6 can
      experience it for themselves`,
    price: 246,
    color: 'green',
    discountPercentage: 10,
    rating: 4.7,
    stock: 65,
    brand: ['Aosom', 'Mercedes'],
    category: 'Kids car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Mercedes_G500_kids_01.jpg', 'Mercedes_G500_kids_02.jpg', 'Mercedes_G500_kids_03.jpg'],
    count: 1
  },
  {
    id: 12,
    title: 'APLIQE Mercedes-Benz G500 SUV Model 1:18',
    // https://www.amazon.com/APLIQE-Vehicles-Mercedes-Vehicle-Simulation/dp/B0BMPZYJZY/
    description: `This is the ideal choice for successful people, model car enthusiasts and professional
      collectors. It is also the best gift choice for family or friends and children.`,
    price: 960,
    color: 'black',
    discountPercentage: 20,
    rating: 4.9,
    stock: 105,
    brand: ['APLIQE', 'Mercedes'],
    category: 'Scale car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Mercedes_G500_scale_01.jpg', 'Mercedes_G500_scale_02.jpg', 'Mercedes_G500_scale_03.jpg'],
    count: 1
  },
  {
    id: 13,
    title: 'Mercedes-Benz G500',
    // https://www.topgear.com/car-reviews/mercedes-benz/g-class
    description: `This is the ideal choice for successful people, model car enthusiasts and professional
      collectors. It is also the best gift choice for family or friends and children.`,
    price: 165000,
    color: 'green',
    discountPercentage: 2,
    rating: 4.2,
    stock: 10,
    brand: ['Mercedes'],
    category: 'Real car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Mercedes_G500_01.jpg', 'Mercedes_G500_02.jpg', 'Mercedes_G500_03.jpg'],
    count: 1
  },
  {
    id: 14,
    title: 'Mercedes GLK Kids 12v',
    // https://kidselectriccars.co.uk/official-mercedes-glk-kids-12v-suv-with-opening-doors-p-717.html
    description: `The jeep is a realistic replica of road going the GLK and comes with fully opening
      doors and realistic looking wheels.`,
    price: 286,
    color: 'black',
    discountPercentage: 10,
    rating: 5,
    stock: 56,
    brand: ['Mercedes'],
    category: 'Kids car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Mercedes_GLK-Kids_01.jpg', 'Mercedes_GLK-Kids_02.jpg', 'Mercedes_GLK-Kids_03.jpg'],
    count: 1
  },
  {
    id: 15,
    title: 'APLIQE Mercedes-Benz SUV GLK-Class 1:18',
    // https://www.amazon.com/APLIQE-Mercedes-Benz-Simulation-Decoration-Die-Casting/dp/B0BNYJCCYD/
    description: `The overall workmanship is exquisite, and the inside of the front
      of the car is clearly visible.`,
    price: 216,
    color: 'black',
    discountPercentage: 20,
    rating: 5,
    stock: 110,
    brand: ['APLIQE', 'Mercedes'],
    category: 'Scale car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Mercedes_GLK_scale_01.jpg', 'Mercedes_GLK_scale_02.jpg', 'Mercedes_GLK_scale_03.jpg'],
    count: 1
  },
  {
    id: 16,
    title: 'Mercedes_GLK_02.jpg',
    description: `Just as traveling with him is a great pleasure in general, because once in the river,
      he is pleasantly restrained when it comes to interior noises.`,
    price: 29000,
    color: 'white',
    discountPercentage: 2,
    rating: 3.8,
    stock: 4,
    brand: ['Mercedes'],
    category: 'Real car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Mercedes_GLK_01.jpg', 'Mercedes_GLK_02.jpg', 'Mercedes_GLK_03.jpg'],
    count: 1
  },
  {
    id: 17,
    title: 'Range Rover Evoque Iconic 12V',
    // https://kidselectriccars.co.uk/12v-official-2-seat-silver-range-rover-evoque-iconic-remote-control-p-1084.html
    description:
      'This is the ultimate Land Rover replica, offering realistic styling with official logos and branding.',
    price: 345,
    color: 'white',
    discountPercentage: 10,
    rating: 4.6,
    stock: 45,
    brand: ['Range Rover'],
    category: 'Kids car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['RangeRover_Evoque_kids_01.jpg', 'RangeRover_Evoque_kids_02.jpg', 'RangeRover_Evoque_kids_03.jpg'],
    count: 1
  },
  {
    id: 18,
    title: 'Range Rover Evoque 1:18',
    // https://shop.landrover.com/range-rover-evoque-5-door-1-18-scale-model-51lddc007gyw
    description: `Stunning scale model in diecast metal of the Range Rover Evoque in Corris Grey.
      With closed parts the fine detailing highlights all the features of the car inside, and out. Mounted on
      a black resin plinth for display.`,
    price: 138,
    color: 'grey',
    discountPercentage: 20,
    rating: 4.3,
    stock: 75,
    brand: ['Range Rover'],
    category: 'Scale car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['RangeRover_Evoque_scale_01.jpg', 'RangeRover_Evoque_scale_02.jpg', 'RangeRover_Evoque_scale_03.jpg'],
    count: 1
  },
  {
    id: 19,
    title: 'Range Rover Evoque',
    // https://www.topgear.com/car-reviews/land-rover/range-rover-evoque-0
    description: `Land Rover plays with a winning formula just enough. The Evoque remains a stylish,
      accomplished choice.`,
    price: 46000,
    color: 'white',
    rating: 4.8,
    stock: 16,
    brand: ['Range Rover'],
    category: 'Real car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['RangeRover_Evoque_01.jpg', 'RangeRover_Evoque_02.jpg', 'RangeRover_Evoque_03.jpg'],
    count: 1
  },
  {
    id: 20,
    title: 'Range Rover Vogue 2 Seat Kids SUV',
    // https://kidselectriccars.co.uk/licensed-red-2x12v-4wd-range-rover-vogue-2-seat-kids-suv-p-672.html
    description: `There is a soft start function, full working suspension and EVA smooth drive tyres
    that all come together for a great driving adventure.`,
    price: 575,
    color: 'red',
    rating: 4.9,
    stock: 67,
    brand: ['Range Rover'],
    category: 'Kids car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['RangeRover_Vogue_kids_01.jpg', 'RangeRover_Vogue_kids_02.png', 'RangeRover_Vogue_kids_03.png'],
    count: 1
  },
  {
    id: 21,
    title: 'Range Rover Velar Model 1:18',
    // https://www.amazon.com/LCD-Models-Rover-Diecast-LCD18003/dp/B07QQ2L3QY/
    description: `Brand new box. Real rubber tires. Carpeted interior. Steerable wheels. Folding side mirrors.
      Tinted rear windows. Officially licensed product. Has opening gas tank cover.`,
    price: 140,
    color: 'red',
    rating: 4.8,
    stock: 109,
    brand: ['LCD Models', 'Range Rover'],
    category: 'Scale car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['RangeRover_Velar_scale_01.jpg', 'RangeRover_Velar_scale_02.jpg', 'RangeRover_Velar_scale_03.jpg'],
    count: 1
  },
  {
    id: 22,
    title: 'Range Rover Vogue',
    description: `This is a car that will be at its imperious best sweeping along the motorway
      like an automotive super-yacht.`,
    price: 171000,
    color: 'brown',
    rating: 4.8,
    stock: 12,
    brand: ['Range Rover'],
    category: 'Real car',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['RangeRover_Vogue_01.jpg', 'RangeRover_Vogue_02.jpg', 'RangeRover_Vogue_03.jpg'],
    count: 1
  },
];
