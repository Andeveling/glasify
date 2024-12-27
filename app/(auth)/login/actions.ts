// Actions for login page
import 'server-only'; // This import is required to prevent the action from being called on the server

type LoginFormData = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginFormData) => {
  // TODO: Implement login logic
  return { email, password };
};
