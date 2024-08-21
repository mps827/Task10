import baseRepository from "./base";

const usersRepository = {
  getUsers() {
    return baseRepository.get("/users");
  },
};

export default usersRepository;
