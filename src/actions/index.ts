export const UPDATE_INGREDIENT_QUANTITY = 'UPDATE_INGREDIENT_QUANTITY';
export type UPDATE_INGREDIENT_QUANTITY = typeof UPDATE_INGREDIENT_QUANTITY;

export const UPDATE_INGREDIENT_UNITS = 'UPDATE_INGREDIENT_UNITS';
export type UPDATE_INGREDIENT_UNITS = typeof UPDATE_INGREDIENT_UNITS;

export const UPDATE_INGREDIENT_NAME = 'UPDATE_INGREDIENT_NAME';
export type UPDATE_INGREDIENT_NAME = typeof UPDATE_INGREDIENT_NAME;


export interface UpdateIngredientQuantity {
  id: number;
  type: UPDATE_INGREDIENT_QUANTITY;
  value: number;
}
export interface UpdateIngredientUnits {
  id: number;
  type: UPDATE_INGREDIENT_UNITS;
  value: string;
}
export interface UpdateIngredientName {
  id: number;
  type: UPDATE_INGREDIENT_NAME;
  value: string;
}

export type IngredientAction = UpdateIngredientQuantity | UpdateIngredientUnits | UpdateIngredientName;

export function UpdateIngredientQuantity(id: number, value: number): UpdateIngredientQuantity {
  return {
    id: id,
    type: UPDATE_INGREDIENT_QUANTITY,
    value: value,
  };
}

export function UpdateIngredientUnits(id: number, value: string): UpdateIngredientUnits {
  return {
    id: id,
    type: UPDATE_INGREDIENT_UNITS,
    value: value,
  };
}

export function UpdateIngredientName(id: number, value: string): UpdateIngredientName {
  return {
    id: id,
    type: UPDATE_INGREDIENT_NAME,
    value: value,
  };
}