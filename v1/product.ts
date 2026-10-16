// Single product's interface
export interface ProductObject {
  id: ProductId;
  name: ProductNameObject;
  media: ProductMedia[];
  location: ProductLocation;
  quantity: ProductQuantityObject;
}

// Utils for products interface
export type ProductId = number;
export interface ProductNameObject {
  general: string;
  official: string;
  other: string;
}
export interface ProductMedia {
  id: ProductMediaId;
  type: ProductMediaType;
  source: string;
}
export type ProductMediaId = number;
export type ProductMediaType = "image" | "video";

export interface ProductLocation{
  located: ProductLocated;
  row: number;
  column: number;
  direction: StandardShopDirections;
  visible: boolean;
}
export type StandardShopDirections = "east" | "west" | "north" | "south";
export type ProductLocated = "home" | "shop" | "other";

export interface ProductQuantityObject {
  amount: number;
  unit: ProductQuantityUnit;
}
export type ProductQuantityUnit = "kilogram" | "gram" | "liter" | "mililiter" | "pieces";
