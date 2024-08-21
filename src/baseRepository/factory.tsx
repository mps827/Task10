import authRepository from "./auth";
import usersRepository from "./user";

interface repositoryTypeMap {
  auth: any;
  users: any;
}
export type repositoryType = repositoryTypeMap[keyof repositoryTypeMap];

const repositories: repositoryType = {
  auth: authRepository,
  users: usersRepository,
};

export const RepoFactory: repositoryType = {
  get: (name: string) => repositories[name],
};
