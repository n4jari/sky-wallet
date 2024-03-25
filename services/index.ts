const API_URL = "https://sky-wallet.onrender.com/accounts";

export const getAccountApi = async (id: string) => {
  return await fetch(`${API_URL}/${id}`, {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getAllAccountsApi = async () => {
  return await fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateAccountApi = async (id: string, body: object) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
};
