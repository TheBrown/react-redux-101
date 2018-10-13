import * as actionTypes from './actionsTypes';
export const saveResult = res => {
    // const updateResult = res * 2;
    
    return  {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (result) => {
    return dispatch => {setTimeout(() => {
        dispatch(saveResult(result));
    }, 2000);
}
}

export const deleteResult = (resultid) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resultid
    };
}