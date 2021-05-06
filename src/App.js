import "./styles.css";
import { Header } from "./Components/Header";
import { MobileNav } from "./Components/MobileNav";
import { Router } from "./Components/Router";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MobileNav />
      <Router />
    </div>
  );
}
