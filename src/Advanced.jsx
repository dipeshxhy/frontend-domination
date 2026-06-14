import React from 'react';

const Advanced = () => {
  const [person, setPerson] = React.useState({
    name: 'Dipesh',
    isBanned: false,
    age: 24,
  });
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5, 6]);
  function addGender() {
    setPerson((prev) => ({
      ...prev,
      gender: 'Male',
    }));
  }
  //   React.useEffect(() => {
  // addGender();
  //   },[])
  return (
    <div className="w-98 bg-slate-300 rounded p-4 text-black">
      <h1
        className={`text-2xl font-bold ${person.isBanned ? 'text-red-500' : 'text-green-500'}`}
      >
        {person.name} is {person.isBanned ? 'banned' : 'not banned'}
      </h1>
      <h2>Age is {person.age}</h2>
      <h2>Gender is {person.gender}</h2>
      <button onClick={addGender}>Add gender</button>
      <button
        className={`px-2.5 py-2 ${person.isBanned ? 'bg-green-600' : 'bg-red-500'} text-slate-200 rounded`}
        onClick={() =>
          setPerson((prev) => ({ ...prev, isBanned: !prev.isBanned }))
        }
      >
        {person.isBanned ? 'Unban' : 'Ban'}
      </button>

      <hr />

      <div>
        {numbers.map((n, i) => {
          return (
            <div key={i}>
              <ul>
                <li>{n}</li>
              </ul>
            </div>
          );
        })}
        <button
          onClick={() =>
            setNumbers((prev) => prev.filter((num, index) => index !== prev.length - 1))
          }
        >
          erase
        </button>
      </div>
    </div>
  );
};

export default Advanced;
