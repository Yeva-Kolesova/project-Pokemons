export function selectTransactions(state) {
  return state.transactions.transactions;
}

export function selectIsLoading(state) {
  return state.transactions.isLoading;
}

export function selectError(state) {
  return state.transactions.error;
}

export function selectCategories(state) {
  return state.transactions.categories;
}
