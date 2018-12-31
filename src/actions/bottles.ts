export const UPDATE_BOTTLE_SIZE = 'UPDATE_BOTTLE_SIZE';
export type UPDATE_BOTTLE_SIZE = typeof UPDATE_BOTTLE_SIZE;

export const UPDATE_BOTTLE_COUNT = 'UPDATE_BOTTLE_COUNT';
export type UPDATE_BOTTLE_COUNT = typeof UPDATE_BOTTLE_COUNT;

export const UPDATE_BOTTLE_UNITS = 'UPDATE_BOTTLE_UNITS';
export type UPDATE_BOTTLE_UNITS = typeof UPDATE_BOTTLE_UNITS;


export interface UpdateBottleSize {
  type: UPDATE_BOTTLE_SIZE;
  value: number;
}
export interface UpdateBottleCount {
  type: UPDATE_BOTTLE_COUNT;
  value: number;
}
export interface UpdateBottleUnits {
  type: UPDATE_BOTTLE_UNITS;
  value: string;
}

export type BottleAction = UpdateBottleSize | UpdateBottleCount | UpdateBottleUnits;

export function UpdateBottleSize(value: number): UpdateBottleSize {
  return {
    type: UPDATE_BOTTLE_SIZE,
    value: value,
  };
}

export function UpdateBottleCount(value: number): UpdateBottleCount {
  return {
    type: UPDATE_BOTTLE_COUNT,
    value: value,
  };
}

export function UpdateBottleUnits(value: string): UpdateBottleUnits {
  return {
    type: UPDATE_BOTTLE_UNITS,
    value: value,
  };
}