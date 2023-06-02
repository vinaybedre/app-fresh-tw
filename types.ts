export interface DishVariant {
  title: string;
  price: number;
}

export type Currency = "eur" | "inr";

export type Language = "en" | "de";

export interface LangValue {
  lang: Language;
  value: string;
}

export interface Dish {
  id: string;
  title: string;
  descriptions: LangValue[];
  variants: DishVariant[];
}

export interface Menu {
  id: string;
  title: string;
  dishes: Dish[];
}

export interface Restaurant {
  id: string;
  title: string;
  menus: Menu[];
  currency: Currency;
  language: Language;
  supportedLanguages: Language[];
}

export interface AppState {
  email: string;
}
