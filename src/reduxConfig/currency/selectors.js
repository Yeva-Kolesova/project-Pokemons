export function selectCurrency(state) {
  return state.currency.currency
}

export function selectIsLoading(state) {
  return state.currency.isLoading
}

export function selectError(state) {
  return state.currency.error
}

export function selectCurrencyTime(state) {
  return state.currency.time
}
