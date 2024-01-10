export function selectIsLoggedIn(state) {
  return state.auth.isLoggedIn
}

export function selectUser(state) {
  return state.auth.user
}

export function selectBalance(state) {
  return state.auth.user.balance
}

export function selectIsRefreshing(state) {
  return state.auth.isRefreshing
}
