interface Prices{
  cp: number;
  sp: number;
  mp: number;
}

type ProductId = number;

type StandardDirections = "east" | "west" | "north" | "south";

type StockAvilability = "in stock" | "out of stock" | "not for sale"

interface ProductLocation{
  row: number;
  column: number;
  direction: StandardDirections;
  visible: boolean;
}

interface Product{
  id: ProductId;
  name: string;
  code: string;
  price: Pricing[];
}

interface ShopStock{
  id: number;
  productId: ProductId;
  quantity: number;
  purchasedOn: Date;
  available: StockAvilability;
  location?: ProductLocation;
}

interface Stock

interface Shop{
  version: string;
  stock: ShopStock[];
}