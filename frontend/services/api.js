const API_URL = "http://172.16.128.236:3000";


async function request(path, options = {}) {
  try {
    const res = await fetch(API_URL + path, options);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Request failed");
    }
    return { data, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
}

export const signup = (payload) =>
  request("/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

export const login = (payload) =>
  request("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

export const getBalance = (userId) =>
  request(`/transactions/balance/${userId}`);

export const getHistory = (userId) =>
  request(`/transactions/history/${userId}`);

export const sendMoney = (payload) =>
  request("/transactions/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

export const sendSupport = (payload) =>
  request("/support", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });


export const processQR = (payload) =>
  request("/transactions/qr/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });




