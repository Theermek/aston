import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store'

const isAuthSelector = (state: RootState) => state.auth

export const selectInitializeSuccess = createSelector([isAuthSelector], authState => authState.initializeSuccess)
