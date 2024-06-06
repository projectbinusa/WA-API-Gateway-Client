export const authConfig = {
  headers: {
    "auth-wa": `jwt ${localStorage.getItem("token")}`,
  },
};
