import { NavRoutes } from "@/app/ui/utils/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface FocusContextProps {
  currentId?: NavRoutes;
  updateCurrentId?: (id: NavRoutes) => void;
}

const FocusContext = createContext<FocusContextProps>({});

export const FocusContextProvider = ({ children }: PropsWithChildren) => {
  const [currentId, setCurrentId] = useState<NavRoutes>();

  const updateCurrentId = (id?: NavRoutes) => {
    setCurrentId(id);
  };

  return (
    <FocusContext.Provider
      value={{
        currentId,
        updateCurrentId,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
};

export const useFocusContext = (): FocusContextProps => {
  const context = useContext(FocusContext);

  if (!context) {
    throw new Error(
      "No focus context available. Is the FocusContextProvider missing?"
    );
  }

  return context;
};
