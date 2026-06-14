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
            setNumbers(prev=>[...prev, prev.length + 1])
          }
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Advanced;
