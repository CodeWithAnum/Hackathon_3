

export interface product {
  _id : string;
  name : string;
  _type : "products";
  image? : {
      asset : {
          _ref : string;
          _type : "image";
      }
  };
  price : number;
  description? : string; 
  rating: number;
  sizes: string[];
  slug : {
   _type : "slug";
   current : string;
  };
  inventory : number;
  discountPrice? : number;
  discountPercent? : number;
}