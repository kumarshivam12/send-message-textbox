export const accessCookie = (cookieName) =>
  document.cookie
    .split(';')
    .filter((cookie) => cookie.includes(cookieName))[0]
    ?.split('=')[1];
