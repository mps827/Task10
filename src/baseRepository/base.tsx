import axios from "axios";

const baseRepository = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "aplication/json",
    Auth: "Bearer Token",
  },
});

// ریکویست قبل رفتن به سرور در اختیار ما قرار میگیرد
baseRepository.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("access_token");
    if (global?.window !== undefined) {
      token = localStorage.getItem("access_token");
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default baseRepository;
