import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOPen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

   const openSidebar = () => {
    setIsSidebarOPen(true)
   }
   const closeSidebar = () => {
    setIsSidebarOPen(false)
   }
   const openModal = () =>{
    setIsModalOpen(true)
   }
   const closeModal = () =>{
    setIsModalOpen(false)
   }


    return <AppContext.Provider value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal
    }}>{children}</AppContext.Provider>
}   

//custom hook 

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}