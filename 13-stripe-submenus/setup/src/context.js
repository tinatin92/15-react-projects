import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSidbarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({page:'', length:[]})

  const openSidebar = () => {
    setIsSidbarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidbarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates)
    setIsSubmenuOpen(true);
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        page,
        location,
        isSubmenuOpen,
        isSideBarOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(AppContext);
};

  

