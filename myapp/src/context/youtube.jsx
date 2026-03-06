import { createContext, useContext, useState } from "react";

const YouTubeContext = createContext();

export const YouTubeProvider = ({ children }) => {
  const [activebar, setactivebar] = useState(false);
  const [ActiveTabBar, setActiveTabBar] = useState({});
  const [ActiveLeftBar, setActiveLeftBar] = useState({name:'Home'});

  return (
    <YouTubeContext.Provider value={{ activebar, setactivebar,ActiveTabBar,setActiveTabBar,ActiveLeftBar,setActiveLeftBar }}>
      {children}
    </YouTubeContext.Provider>
  );
};

// ✅ Custom Hook
export const useYouTube = () => {
  return useContext(YouTubeContext);
};