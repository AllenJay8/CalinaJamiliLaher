import { useModals } from "../../hooks/useModals";
import AddUserFormModal from "./components/AddUserFormModal";
import UserList from "./components/UserList";

const UserMainPage = () => {
  const { isOpen, openModal, closeModal } = useModals(false);

  return (
    <>
        <AddUserFormModal isOpen={isOpen} onClose={closeModal} />
        <UserList onAddUser={openModal} />
    </>
  );
};

export default UserMainPage;