import { createContext, useContext, useState } from "react";

const ElementContext = createContext(null);

export const useElement = () => useContext(ElementContext);

export const ElementProvider = ({ children }) => {
  const [element, setElement] = useState("");

  return (
    <ElementContext.Provider value={{ element, setElement }}>
      {children}
    </ElementContext.Provider>
  );
};
