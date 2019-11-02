const siteKey = "shopbox_token";
const shortId = require("shortid");

export function getOrAddSession() {
  let cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    let [key, session] = cookie.split("=");
    if (key === siteKey) {
      return session;
    }
  }
  const sessionId = shortId.generate();
  document.cookie = `${siteKey}=${sessionId}`;
  return sessionId;
}
