export interface Product {
  title: string;
  description: string;
  amount: number;
  price: number;
  images: Array<Image>;
}

export interface Image {
  title: string;
}
