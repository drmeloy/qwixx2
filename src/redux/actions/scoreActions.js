import { scoreDictionary } from '../helpers/reduxHelpers';

export const incrementScore = (row, num) => ({ type: scoreDictionary[row], payload: num });
