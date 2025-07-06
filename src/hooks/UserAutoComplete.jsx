import axios from "axios";
import React, { useEffect, useState } from "react";

const UserAutoComplete = () => {
  const [sugg, setSugg] = useState([]);
  const [search, setSearch] = useState("");
  const [shortlisted, setShortlisted] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      if (search.trim() === "" || search.length <= 2) {
        setSugg([]);
        return;
      }
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/users/search?q=${search}`
        );
        setSugg(data.users.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };

    const delay = setTimeout(() => {
      fetchUsers();
    }, 300);

    return () => clearTimeout(delay);
  }, [search]);


  console.log(shortlisted);
  return (
    <div className="flex flex-col m-4">
      <input
        className="p-2 border border-black rounded-md w-[300px]"
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="w-[300px]">
        {sugg?.length > 0 && sugg.map((user) => (
          <div
            onClick={() => {
              setShortlisted((prev) => [...prev, user]);
              setSearch("");
              setSugg([]);
            }}
            className="p-2 cursor-pointer border-black border-2 hover:bg-teal-300"
            key={user.id}
          >
            {user.firstName} {user.lastName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAutoComplete;
