import { createContext, useContext, useState } from "react";

const YouTubeContext = createContext();

export const YouTubeProvider = ({ children }) => {
  const [activebar, setactivebar] = useState(false);

  return (
    <YouTubeContext.Provider value={{ activebar, setactivebar }}>
      {children}
    </YouTubeContext.Provider>
  );
};

// ✅ Custom Hook
export const useYouTube = () => {
  return useContext(YouTubeContext);
};