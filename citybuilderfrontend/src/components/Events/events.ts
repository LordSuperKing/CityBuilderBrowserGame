import React from 'react'
import { AppDispatch, RootState } from '../../redux/reduxStore'
import { setIsGrowing } from '../../redux/populationSlice'



export const events = () => (dispatch: AppDispatch, getState: ()=> RootState) => {
    if (getState().population.amount  > 9 && getState().city.level === 0) {
        dispatch(setIsGrowing(false))
    } else {
        dispatch(setIsGrowing(true))
    }
}
