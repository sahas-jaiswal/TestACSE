const data = {
  products: [
    {
      id: '1',
      name: 'MacBook',
      price: 1400,
      image: 'https://picsum.photos/id/180/2400/1600',
    },
    {
      id: '2',
      name: 'Old Car',
      price: 2400,
      image: 'https://picsum.photos/id/111/4400/2656',
    },
    {
      id: '3',
      name: 'W Shoes',
      price: 1000,
      image: 'https://picsum.photos/id/21/3008/2008',
    },
  ],
  offers:[
  {
    codename:'PROMO10',
    price:5000,
    discountValue:0.10,
    discount:'10%',
  },
  {
    codename:'PROMO20',
    price:10000,
    discountValue:0.20,
    discount:'20%',
  }
]
};
export default data;
