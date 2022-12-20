interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  color: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: Array<string>;
  category: string;
  bodyStyle: string;
  thumbnail: string;
  images: Array<string>;
}

const products: Array<IProducts> = [
  {
    id: 1,
    title: 'Lamborghini Urus 12V Kids Electric Ride',
    // https://www.outdoortoys.co.uk/licensed-lamborghini-urus-12v-ride-on-children-s-electric-suv
    description: 'This sporty machine a real head turner that will grab the attention of anyone who sees it drive by.',
    price: 350,
    color: 'green',
    discountPercentage: 10,
    rating: 4.5,
    stock: 25,
    brand: ['DAKOTT', 'Lamborghini'],
    category: 'kidscar',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Lamborghini-Urus-Kids_01.jpg', 'Lamborghini-Urus-Kids_02.jpg', 'Lamborghini-Urus-Kids_03.jpg'],
  },
  {
    id: 2,
    title: 'Lamborghini Urus',
    description: `Lamborghini Urus is the first Super Sport Utility Vehicle in the world, merging the soul of
      a super sports car with the practical functionality of an SUV.`,
    price: 200000,
    color: 'yellow',
    discountPercentage: 2,
    rating: 5,
    stock: 2,
    brand: ['Lamborghini'],
    category: 'realcar',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Lamborghini_Urus_01.webp', 'Lamborghini_Urus_02.webp', 'Lamborghini_Urus_03.webp'],
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
    category: 'scalecar',
    bodyStyle: 'SUV',
    thumbnail: '',
    images: ['Lamborghini-Urus-scale_01.jpg', 'Lamborghini-Urus-scale_02.jpg', 'Lamborghini-Urus-scale_01.jpg'],
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
    category: 'kidscar',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: [
      'Lamborghini_Centenario_kids_01.webp',
      'Lamborghini_Centenario_kids_02.webp',
      'Lamborghini_Centenario_kids_03.webp',
    ],
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
    category: 'realcar',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: ['Lamborghini-Centenario_01.jpg', 'Lamborghini-Centenario_02.jpg', 'Lamborghini-Centenario_03.jpg'],
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
    category: 'scalecar',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: [
      'Lamborghini_Centario_scale_01.jpg',
      'Lamborghini_Centario_scale_02.jpg',
      'Lamborghini_Centario_scale_03.jpg',
    ],
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
    category: 'kidscar',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: ['Mercedes_AMG_kids_01.jpg', 'Mercedes_AMG_kids_02.jpg', 'Mercedes_AMG_kids_03.jpg'],
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
    category: 'realcar',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: ['Mercedes_AMG_01.jpg', 'Mercedes_AMG_02.jpg', 'Mercedes_AMG_03.jpg'],
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
    category: 'scalecar',
    bodyStyle: 'coupe',
    thumbnail: '',
    images: ['Mercedes_AMG_scale_01.jpg', 'Mercedes_AMG_scale_02.jpg', 'Mercedes_AMG_scale_03.jpg'],
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
    category: 'kidscar',
    bodyStyle: 'cabriolet',
    thumbnail: '',
    images: ['Vilac_vintage_kids_01.webp', 'Vilac_vintage_kids_02.webp', 'Vilac_vintage_kids_03.jpg'],
  },
];

export default products;
