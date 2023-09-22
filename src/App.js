import { UserContextProvider } from "./contexts/user.context";
import { ThemeContextProvider } from "./contexts/theme.context";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { Navbar } from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { User } from "./pages/user";


export default function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Layout>
          <Header>
            <Navbar />
          </Header>
          <UserContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </UserContextProvider>
        </Layout>
      </ThemeContextProvider>
    </div>
  );
}
