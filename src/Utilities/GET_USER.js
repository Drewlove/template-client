import { useAuth0 } from "@auth0/auth0-react";

export const GET_USER = () => {
  const { user } = useAuth0();
  return user.sub.split("|")[1];
};
