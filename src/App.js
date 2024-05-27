import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage.jsx";
import Signup from "./pages/signUp/Signup.jsx";
import Aboutus from "./pages/about/Aboutus.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import Layout from "./pages/Layout.jsx";
import UserProfile from "./pages/user/UserProfile.jsx";
import ProfileTable from "./pages/profiletable/ProfileTable.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="profiletable" element={<ProfileTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Route path="about" element={<Aboutus />} /> */
}
{
  /* <Route path="login" element={<LoginPage />} /> */
}
