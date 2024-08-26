const { createContext, useState } = require("react");

export const SwitchContext = createContext({});

const SwitchProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <SwitchContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </SwitchContext.Provider>
  );
};

export default SwitchProvider;
