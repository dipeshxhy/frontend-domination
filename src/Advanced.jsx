import React from 'react';

const Advanced = () => {
  const [person, setPerson] = React.useState([
    {
      name: 'Dipesh',
      ag: 24,
    },
    {
      name: 'Manisha',
      ag: 22,
    },
  ]);
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
        {person.map((p, i) => {
          return (
            <div key={i}>
              <ul>
                <li>{p.name}</li>
                <li>{p.ag}</li>
              </ul>
            </div>
          );
        })}
        <button
          onClick={() =>
            setPerson((prev) =>
              prev.map((p) =>
                p.name == 'Dipesh' ? { ...p, ag: p.ag + 1 } : p,
              ),
            )
          }
        >
          Increase Dipesh's Age
        </button>
      </div>
    </div>
  );
};

export default Advanced;
