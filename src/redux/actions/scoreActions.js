import { scoreDictionary } from '../../utils/reduxHelpers';

export const incrementScore = (row, num) => ({ type: scoreDictionary[row], payload: num });
