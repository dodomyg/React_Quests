import { useState } from "react";

const EmployeeDb = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [employees, setEmployees] = useState([
    { id: 1, name: "John", age: 30, position: "Developer", salary: 50000 },
    { id: 2, name: "Jane", age: 28, position: "Designer", salary: 45000 },
    { id: 3, name: "Bob", age: 35, position: "Manager", salary: 60000 },
    { id: 4, name: "Alice", age: 25, position: "Intern", salary: 30000 },
  ]);
  const [add, setAdd] = useState(false);
  const [newEmp, setNewEmp] = useState({
    name: "",
    age: 0,
    position: "",
    salary: 0,
  });

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
    setSelectedPerson(null);
  };

  const createNew = (e) => {
    e.preventDefault();
    if (
      newEmp.name === "" ||
      newEmp.age === 0 ||
      newEmp.position === "" ||
      newEmp.salary === 0
    ) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const finalData = { ...newEmp, id: employees.length + 1 };
      setEmployees([...employees, finalData]);
      setAdd(false);
      setNewEmp({
        name: "",
        age: 0,
        position: "",
        salary: 0,
      });
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-centSSSer w-full p-10 bg-blue-gray-200">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">Employee Database</h1>
        {employees &&
          employees.map((e) => (
            <div onClick={() => setSelectedPerson(e)} key={e.id}>
              <h1>
                {e.id} {e.name}
                <span className="mx-2" onClick={() => deleteEmployee(e.id)}>
                  Delete
                </span>
              </h1>
            </div>
          ))}
      </div>

      <div className="flex-2 w-full border-2 rounded-10 border-black">
        {selectedPerson !== null &&
        employees.find((e) => e.id === selectedPerson?.id) ? (
          <div>
            <h1>{selectedPerson?.name}</h1>
            <h1>{selectedPerson?.age}</h1>
            <h1>{selectedPerson?.position}</h1>
            <h1>{selectedPerson?.salary}</h1>
          </div>
        ) : (
          <h1>Select Employee to know about info</h1>
        )}
      </div>

      <button onClick={() => setAdd(!add)}>ADD EMPLOYEE</button>
      {add && (
        <form onSubmit={createNew}>
          <input
            type="text"
            value={newEmp.name}
            onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
          />
          <input
            type="number"
            value={newEmp.age}
            onChange={(e) => setNewEmp({ ...newEmp, age: e.target.value })}
          />
          <input
            type="text"
            value={newEmp.position}
            onChange={(e) => setNewEmp({ ...newEmp, position: e.target.value })}
          />
          <input
            type="number"
            value={newEmp.salary}
            onChange={(e) => setNewEmp({ ...newEmp, salary: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default EmployeeDb;
