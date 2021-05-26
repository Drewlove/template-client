import "./App.css";
import AppRoutes from "./AppRoutes/AppRoutes";
import NavBarContainer from "./NavBar/NavBarContainer/NavBarContainer";
import LoadingPage from "./LoadingPage/LoadingPage";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <NavBarContainer />
      <AppRoutes />
    </>
  );
}
