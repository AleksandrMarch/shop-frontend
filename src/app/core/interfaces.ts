export interface Product {
  id: number;
  title: string;
  description: string;
  status: string;
}

export interface Image {
  title: string;
}

export interface Category {
  title: string;
  id: number;
  parentId: number;
  description: string;
}
