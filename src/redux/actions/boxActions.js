import { rowDictionary } from '../helpers/reduxHelpers';

export const checkBox = (row, num) => ({ type: rowDictionary[row], payload: num });

export const DISABLE_ROW = 'DISABLE_ROW';
export const disableRow = row => ({ type: DISABLE_ROW, payload: row });

