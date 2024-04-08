import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./gui/component/navigate";
import PageProfile from "./gui/page/Profile/page";
import PageShoppingCart from "./gui/page/ShoppingCart/page";
import PageLogin from "./gui/page/login/page";
import PageMain from "./gui/page/main/main";
import PageRegistration from "./gui/page/registration/page";

// import { buildProvider } from "./viewModel/redux/api";
import { buildProvider } from "./viewModel/Toolkit/api";

const Provider = buildProvider();
const pgMain = <PageMain />;
const pgLogin = <PageLogin />;
const pgRegistration = <PageRegistration />;
const pgShoppingCart = <PageShoppingCart />;
const pgProfile = <PageProfile />;
function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={pgMain} />
          <Route path="/Products" element={pgMain} />
          <Route path="/Login" element={pgLogin} />
          <Route path="/Registration" element={pgRegistration} />
          <Route path="/ShoppingCart" element={pgShoppingCart} />
          <Route path="/Profile" element={pgProfile} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
