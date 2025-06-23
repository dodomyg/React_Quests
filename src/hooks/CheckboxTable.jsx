import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slice/userSlice";

const CheckboxTable = () => {
  const { users, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [filteredData, setFilteredData] = useState([]);

  const [selected, setSelected] = useState([]);

  const [search, setSearch] = useState("");
  const [tabs, setTabs] = useState("all");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  //initally all selected 
  useEffect(() => {
    const allVisibleIds = users?.map((user) => user.id);
    setSelected(allVisibleIds);
  }, [users]);


  useEffect(() => {
    if (users?.length > 0) {
      let dummy = [...users];

      if (search !== "") {
        dummy = dummy?.filter((d) => {
          return (
            d?.firstName?.toLowerCase().includes(search?.toLowerCase()) ||
            d?.lastName?.toLowerCase().includes(search?.toLowerCase())
          );
        });
        console.log(dummy, "dummy");
      }

      if (tabs !== "all") {
        dummy = dummy?.filter((d) => d?.role === tabs);
      }

      setFilteredData(dummy);
    }
  }, [users, loading, search, tabs]);

  const submitUsers = () => {
    if (selected?.length === 0) {
      alert("PLS SELECT USERS");
      return;
    }
    const selectedUsers = filteredData?.filter((f) => selected.includes(f?.id));
    console.log(selectedUsers, "selectedUsers");
  };

  const checkSingleBox = (checked, id) => {
    setSelected((pr) => (checked ? [...pr, id] : pr?.filter((p) => p !== id)));
  };

  const allSelected = filteredData?.every((f) => selected?.includes(f?.id));

  if (loading) {
    return <h1>Loading . . .</h1>;
  }

  return (
    <div className="m-5">
      <div className="flex items-center space-x-3">
        <input
          type="text"
          placeholder="Search LSP"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setTabs("all")}>All</button>
        <button onClick={() => setTabs("admin")}>Admin</button>
        <button onClick={() => setTabs("moderator")}>Mod</button>
        <button onClick={() => setTabs("user")}>user</button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={(e) => {
                  if (e.target.checked) {
                    const newArr = filteredData?.map((f) => f?.id);
                    setSelected(newArr);
                  } else {
                    setSelected([]);
                  }
                }}
                className="m-2"
              />
            </th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  checked={selected?.includes(user.id)}
                  onChange={(e) => checkSingleBox(e.target.checked, user.id)}
                  type="checkbox"
                  className="m-2"
                />
              </td>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={submitUsers}>Submit</button>
    </div>
  );
};

export default CheckboxTable;
