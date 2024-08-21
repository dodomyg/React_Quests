import { useState } from "react";

const dataName = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Eve" },
  { id: 5, name: "Charlie" },
  { id: 6, name: "Jesus" },
  { id: 7, name: "Grace" },
  { id: 8, name: "Hannah" },
  { id: 9, name: "Frank" },
  { id: 10, name: "Jay-Z" },
];

const MultiSelect = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterdata = dataName.filter((u) => {
    if (selected.includes(u)) {
      return false;
    }
    return u.name.toLowerCase().includes(search.toLowerCase());
  });

  //   if (filterdata.length > 0) {
  //     setLoading(false);
  //   }

  const pushUserToSelected = (user) => {
    setSelected([...selected, user]);
    setSearch("");
  };

  const removeFromSelected = (user) => {
    setSelected(selected.filter((u) => u?.id !== user.id));
  };

  return (
    <div>
      MultiSelect : {selected.length}
      <div className="m-3">
        <div className="flex items-center gap-1">
          {selected.length > 0 &&
            selected.map((u) => (
              <h1
                className="bg-blue-gray-700 cursor-pointer text-white w-fit p-1"
                key={u?.id}
                onClick={() => removeFromSelected(u)}
              >
                {u?.id + " "}
                {u?.name}
              </h1>
            ))}
        </div>
        <input
          className="border-black w-[80%] p-1 relative"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search your name"
        />
        <div className="flex flex-col gap-1">
          {loading && <h1>Loading...</h1>}
          {!loading &&
            search !== "" &&
            filterdata?.map((u, i) => (
              <div
                onClick={() => pushUserToSelected(u)}
                className="p-2 bg-black text-white cursor-pointer"
                key={i}
              >
                <h1>
                  {u?.id + " "}
                  {u?.name}
                </h1>
              </div>
            ))}
        </div>

        <button
          disabled={selected.length === 0}
          onClick={() => {
            console.log(selected);
          }}
          className="border-black w-[80%] p-1"
        >
          Show selected List
        </button>
      </div>
    </div>
  );
};

export default MultiSelect;
