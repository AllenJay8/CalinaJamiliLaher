import { useCallback, useState } from "react";

export const useModals = (initialState: boolean) => {
const [isOpen, setIsOpen] = useState(initialState);

const openModal = useCallback(() => setIsOpen(true), [])  ;
const closeModal = useCallback(() => setIsOpen(false), []);
const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

return { isOpen, openModal, closeModal, toggleModal };
};
