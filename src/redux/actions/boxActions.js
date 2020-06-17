import { rowDictionary } from '../../utils/reduxHelpers';

export const checkBox = (row, num) => ({ type: rowDictionary[row], payload: num });

export const UNLOCK_LAST_BOX = 'UNLOCK_LAST_BOX';
export const unlockLastBox = color => ({ type: UNLOCK_LAST_BOX, payload: color });

export const LOCK_LAST_BOX = 'LOCK_LAST_BOX';
export const lockLastBox = color => ({ type: LOCK_LAST_BOX, payload: color });

export const DISABLE_ROW = 'DISABLE_ROW';
export const disableRow = row => ({ type: DISABLE_ROW, payload: row });

