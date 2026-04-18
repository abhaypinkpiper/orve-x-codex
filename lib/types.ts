export type Product = {
  name: string;
  description: string;
  price: number;
  offerPrice?: number;
  offerEnabled: boolean;
  imgUrls: string[];
  videoUrls: string[];
};
