// export interface Product {
//   id: string;
//   headLine: string;
//   description: string;
//   isPublic: string;
//   mainImageUrl?: string;
//   createdAt: number;
//   price: string;
//   images?: { imageUrl: string }[];
// }
export interface ProductDraft {
  headLine: string;
  description?: string;
  price?: string;
}

export interface Product {
  id: string;
  headLine: string;
  description: string;
  isPublic: string;
  createdAt: number;
  price: string;
}
