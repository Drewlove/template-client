import "./App.css";
import AppRoutes from "./AppRoutes/AppRoutes";
import NavBarContainer from "./NavBar/NavBarContainer/NavBarContainer";
import SignUpButton from "./Authentication/SignupButton/SignupButton";

function App() {
  return (
    <>
      <NavBarContainer />
      <AppRoutes />
    </>
  );
}

export default App;
