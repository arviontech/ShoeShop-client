interface Product {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  image: string;
  discount: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    discountedPrice: 149.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    discount: 25,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    discountedPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    discount: 33,
  },
  {
    id: 3,
    name: "Laptop Pro",
    price: 1299.99,
    discountedPrice: 999.99,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    discount: 23,
  },
  {
    id: 4,
    name: "Gaming Console",
    price: 499.99,
    discountedPrice: 399.99,
    image:
      "https://images.unsplash.com/photo-1587202372775-152d2e27a724?w=300&h=300&fit=crop",
    discount: 20,
  },
  {
    id: 5,
    name: "Smartphone X",
    price: 999.99,
    discountedPrice: 849.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    discount: 15,
  },
  {
    id: 6,
    name: "4K LED TV",
    price: 1199.99,
    discountedPrice: 899.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b2d?w=300&h=300&fit=crop",
    discount: 25,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 149.99,
    discountedPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1587116151082-dabe04c4ea07?w=300&h=300&fit=crop",
    discount: 33,
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 129.99,
    discountedPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=300&h=300&fit=crop",
    discount: 23,
  },
  {
    id: 9,
    name: "Ergonomic Office Chair",
    price: 299.99,
    discountedPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1578898886413-c98d3d63b038?w=300&h=300&fit=crop",
    discount: 17,
  },
  {
    id: 10,
    name: "Men’s Running Shoes",
    price: 89.99,
    discountedPrice: 69.99,
    image:
      "https://images.unsplash.com/photo-1528701800487-cc76e51a8233?w=300&h=300&fit=crop",
    discount: 22,
  },
  {
    id: 11,
    name: "Women’s Handbag",
    price: 159.99,
    discountedPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a5?w=300&h=300&fit=crop",
    discount: 19,
  },
  {
    id: 12,
    name: "Designer Sunglasses",
    price: 199.99,
    discountedPrice: 149.99,
    image:
      "https://images.unsplash.com/photo-1526902806273-6acadd4f2625?w=300&h=300&fit=crop",
    discount: 25,
  },
  {
    id: 13,
    name: "Luxury Wristwatch",
    price: 499.99,
    discountedPrice: 399.99,
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=300&h=300&fit=crop",
    discount: 20,
  },
  {
    id: 14,
    name: "Digital Camera",
    price: 799.99,
    discountedPrice: 699.99,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop",
    discount: 13,
  },
  {
    id: 15,
    name: "Leather Wallet",
    price: 79.99,
    discountedPrice: 59.99,
    image:
      "https://images.unsplash.com/photo-1593030891188-89e469406797?w=300&h=300&fit=crop",
    discount: 25,
  },
  {
    id: 16,
    name: "Portable Power Bank",
    price: 49.99,
    discountedPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1580647015524-fd93ebf75147?w=300&h=300&fit=crop",
    discount: 20,
  },
  {
    id: 17,
    name: "Wireless Earbuds",
    price: 149.99,
    discountedPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1584611200123-3581dc9630a5?w=300&h=300&fit=crop",
    discount: 20,
  },
  {
    id: 18,
    name: "Coffee Maker",
    price: 99.99,
    discountedPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300&h=300&fit=crop",
    discount: 20,
  },
  {
    id: 19,
    name: "Smart Thermostat",
    price: 249.99,
    discountedPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1611224885997-6575aefc4698?w=300&h=300&fit=crop",
    discount: 20,
  },
  {
    id: 20,
    name: "Electric Toothbrush",
    price: 89.99,
    discountedPrice: 69.99,
    image:
      "https://images.unsplash.com/photo-1612214081910-3e5b99835fa9?w=300&h=300&fit=crop",
    discount: 22,
  },
  {
    id: 21,
    name: "Instant Pot Cooker",
    price: 149.99,
    discountedPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1611465576647-4a9f8c686ad7?w=300&h=300&fit=crop",
    discount: 20,
  },
  {
    id: 22,
    name: "VR Headset",
    price: 399.99,
    discountedPrice: 349.99,
    image:
      "https://images.unsplash.com/photo-1580894894511-1fc3ab64a957?w=300&h=300&fit=crop",
    discount: 12,
  },
  {
    id: 23,
    name: "Smart LED Light Bulb",
    price: 49.99,
    discountedPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1541470078156-ff2b1a17a5cc?w=300&h=300&fit=crop",
    discount: 20,
  },
  {
    id: 24,
    name: "Noise Cancelling Earbuds",
    price: 199.99,
    discountedPrice: 159.99,
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=300&h=300&fit=crop",
    discount: 20,
  },
];
