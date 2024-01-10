export function selectStatistics(state) {
  return state.statistics.statistics
}

export function selectIsLoading(state) {
  return state.statistics.isLoading
}

export function selectError(state) {
  return state.statistics.error
}
