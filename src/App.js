import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import SignIn from "./routes/signin/SignIn";

const Shop = () => <h1>I am the shop page</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
