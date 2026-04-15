import { Route, Routes } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";
import { GenderMainPage } from "../Gender/GenderMainPage";
import EditGenderPage from "../Gender/components/EditGenderPage";
import DeleteGenderPage from "../Gender/components/DeleteGenderPage";
import UserMainPage from "../User/UserMainPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<GenderMainPage />} />
          <Route path="/gender/edit" element={<EditGenderPage />} />
          <Route path="/gender/delete" element={<DeleteGenderPage />} />
          <Route path="/users" element={<UserMainPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;