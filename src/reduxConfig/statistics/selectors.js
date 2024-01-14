export function selectSummary(state) {
  return state.statistics.summary;
}

export function selectIsLoading(state) {
  return state.statistics.isLoading;
}

export function selectError(state) {
  return state.statistics.error;
}
