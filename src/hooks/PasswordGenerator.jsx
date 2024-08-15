import { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(4);
  const [options, setOptions] = useState([
    { name: "Lowercase", checked: false },
    { name: "Uppercase", checked: false },
    { name: "Numbers", checked: false },
    { name: "Special Char", checked: false },
  ]);

  const [pw, setPw] = useState("");

  const updateOption = (o) => {
    const newOptions = options.map((option) => {
      if (option.name === o.name) {
        return { ...option, checked: !option.checked };
      }
      return option;
    });
    setOptions(newOptions);
  };

  const generatePassword = (e) => {
    e.preventDefault();

    let charCodes = [];
    options.forEach((option) => {
      if (option.checked) {
        if (option.name === "Lowercase") {
          for (let i = 97; i < 123; i++) {
            charCodes.push(i);
          }
        } else if (option.name === "Uppercase") {
          for (let i = 65; i < 91; i++) {
            charCodes.push(i);
          }
        } else if (option.name === "Numbers") {
          for (let i = 48; i < 58; i++) {
            charCodes.push(i);
          }
        } else if (option.name === "Special Char") {
          for (let i = 33; i < 48; i++) {
            charCodes.push(i);
          }
          for (let i = 58; i < 65; i++) {
            charCodes.push(i);
          }
          for (let i = 91; i < 97; i++) {
            charCodes.push(i);
          }
          for (let i = 123; i < 127; i++) {
            charCodes.push(i);
          }
        }
      }
    });

    let password = "";

    for (let i = 0; i < length; i++) {
      const charCode = charCodes[Math.floor(Math.random() * charCodes.length)];
      password += String.fromCharCode(charCode);
    }
    setPw(password);
    return;
  };

  return (
    <div>
      <form onSubmit={generatePassword}>
        <input
          className="my-3"
          type="range"
          min="4"
          max="16"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <label>Length: {length}</label>

        {options &&
          options?.map((option, i) => (
            <div className="flex items-center gap-x-2" key={i}>
              <input
                type="checkbox"
                checked={option.checked}
                onChange={() => updateOption(option)}
              />
              <label>{option.name}</label>
            </div>
          ))}

        <button type="submit">Generate</button>
      </form>

      {pw && <h1>{pw}</h1>}
      {pw && (
        <button onClick={() => navigator.clipboard.writeText(pw)}>Copy</button>
      )}
    </div>
  );
};

export default PasswordGenerator;
