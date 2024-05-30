import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage.jsx";
import Signup from "./pages/signup/Signup.jsx";

import EditProfile from "./pages/user/EditProfile.jsx";
import ProfileTable from "./pages/profiletable/ProfileTable.jsx";
import { Layout } from "./pages/Layout.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="editprofile" element={<EditProfile />} />
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
