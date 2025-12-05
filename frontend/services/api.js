const API_URL = "http://192.168.1.9:3000";


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

  // export const processQR = async (data) => {
  // try {
  //   const res = await fetch(`${BASE_URL}/transactions/qr/scan`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  //   return await res.json();
  // } catch (err) {
  //   return { error: "Network error" };
  // }
// };



export const processQR = (payload) =>
  request("/transactions/qr/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });




