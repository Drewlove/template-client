const config = {
  API_ENDPOINT: process.env.REACT_APP_SERVER,
  HEADERS: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};

export default config;
