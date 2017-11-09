export function getId() {
  return localStorage.getItem('userId')
}

export function isLoggedIn() {
  const idToken = getId();
  return !!idToken
}

