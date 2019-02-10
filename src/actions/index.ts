export const UPDATE_INGREDIENT_QUANTITY = 'UPDATE_INGREDIENT_QUANTITY';
export type UPDATE_INGREDIENT_QUANTITY = typeof UPDATE_INGREDIENT_QUANTITY;

export const UPDATE_INGREDIENT_UNITS = 'UPDATE_INGREDIENT_UNITS';
export type UPDATE_INGREDIENT_UNITS = typeof UPDATE_INGREDIENT_UNITS;

export const UPDATE_INGREDIENT_NAME = 'UPDATE_INGREDIENT_NAME';
export type UPDATE_INGREDIENT_NAME = typeof UPDATE_INGREDIENT_NAME;

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export type ADD_INGREDIENT = typeof ADD_INGREDIENT;

export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export type REMOVE_INGREDIENT = typeof REMOVE_INGREDIENT;


export interface UpdateIngredientQuantity {
  id: string;
  type: UPDATE_INGREDIENT_QUANTITY;
  value: number;
}
export interface UpdateIngredientUnits {
  id: string;
  type: UPDATE_INGREDIENT_UNITS;
  value: string;
}
export interface UpdateIngredientName {
  id: string;
  type: UPDATE_INGREDIENT_NAME;
  value: string;
}

export interface AddIngredient {
  type: ADD_INGREDIENT;
}

export interface RemoveIngredient {
  id: string;
  type: REMOVE_INGREDIENT;
}

export type IngredientAction = UpdateIngredientQuantity | UpdateIngredientUnits | UpdateIngredientName | AddIngredient | RemoveIngredient;

export function UpdateIngredientQuantity(id: string, value: number): UpdateIngredientQuantity {
  return {
    id: id,
    type: UPDATE_INGREDIENT_QUANTITY,
    value: value,
  };
}

export function RemoveIngredient(id: string): RemoveIngredient {
  return {
    id: id,
    type: REMOVE_INGREDIENT,
  };
}


export function UpdateIngredientUnits(id: string, value: string): UpdateIngredientUnits {
  return {
    id: id,
    type: UPDATE_INGREDIENT_UNITS,
    value: value,
  };
}

export function UpdateIngredientName(id: string, value: string): UpdateIngredientName {
  return {
    id: id,
    type: UPDATE_INGREDIENT_NAME,
    value: value,
  };
}