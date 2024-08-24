import baseRepository from "./base";

export interface SignupBody {
  firstName: string;
  lastName: string;
  nationalCode: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface LoginBody {
  phoneNumber: string;
  password: string;
}

const authRepository = {
  Signup(body: SignupBody) {
    return baseRepository.post("/signup", body);
  },
  Login(body: LoginBody) {
    return baseRepository.post("/login", body);
  },
};

export default authRepository;

// Logout() {
//   if (global?.window !== undefined) {
//     localStorage.removeItem("access_token");
//   }
