import { useState } from "react";

const OptionalDropDown = () => {
  const [country, setCountry] = useState("");
  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Pakistan",
      value: "PK",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "Bangladesh",
      value: "BG",
      cities: ["Dhaka", "Chittagong"],
    },
  ];

  const selectedCountry = country && countries.find((c) => c.value === country);
  return (
    <div>
      <div>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          {countries &&
            countries.map((c) => <option value={c.value}>{c.name}</option>)}
        </select>
      </div>

      <div>
        <select>
          <option value="">Select City</option>
          {selectedCountry &&
            selectedCountry.cities.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default OptionalDropDown;
