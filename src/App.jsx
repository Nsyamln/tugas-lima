import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Planet from "./components/Planet";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function App() {
  const [newPlanet, setNewPlanet] = useState({});
  const [tamp, setTamp] = useState({
    id: "",
    name: "",
    diameter: 0,
  });
  const [planets, setPlanets] = useState([
    {
      id: 1,
      name: "Mars",
      diameter: 6794,
    },
    {
      id: 2,
      name: "Jupiter",
      diameter: 142984,
    },
    {
      id: 3,
      name: "Saturn",
      diameter: 120536,
    },
  ]);

  return (
    <>
      <Header />
      <main>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {planets.map((planet, i) => (
            <Planet
              key={i}
              id={planet.id}
              name={planet.name}
              diameter={planet.diameter}
            />
          ))}
        </div>

        <form className="card">
          <h1>Tambah</h1>
          <label>
            ID :
            <input
              value={newPlanet.id}
              onChange={(e) =>
                setNewPlanet({ ...newPlanet, id: e.target.value })
              }
            />
          </label>
          <label>
            Nama :
            <input
              value={newPlanet.name}
              onChange={(e) =>
                setNewPlanet({ ...newPlanet, name: e.target.value })
              }
            />
          </label>
          <label>
            Diameter :
            <input
              type="number"
              value={newPlanet.diameter}
              onChange={(e) =>
                setNewPlanet({ ...newPlanet, diameter: e.target.value })
              }
            />
          </label>
          <div className="contain">
            <button
              onClick={(e) => {
                e.preventDefault();
                setPlanets([newPlanet, ...planets]);
              }}
            >
              <FaPlus size={18} />
              Depan
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setPlanets([...planets, newPlanet]);
              }}
            >
              <FaPlus size={18} />
              Belakang
            </button>
          </div>
        </form>

        <form className="card">
          <h2>Edit/Hapus Berdasarkan ID</h2>
          <label>
            ID :
            <input
              type="number"
              value={tamp.id}
              onChange={(e) => setTamp({ ...tamp, id: e.target.value })}
            />
          </label>
          <label>
            Nama :
            <input
              value={tamp.name}
              onChange={(e) => setTamp({ ...tamp, name: e.target.value })}
            />
          </label>
          <label>
            Diameter :
            <div className="contain2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const perbesar = planets.map((planet) => {
                    if (parseInt(tamp.id) === planet.id) {
                      return { ...planet, diameter: planet.diameter + 1 };
                    } else {
                      return planet;
                    }
                  });
                  setPlanets(perbesar);
                }}
              >
                <FaExpandArrowsAlt size={18} />
                Perbesar
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const perkecil = planets.map((planet) => {
                    if (parseInt(tamp.id) === planet.id) {
                      return { ...planet, diameter: planet.diameter - 1 };
                    } else {
                      return planet;
                    }
                  });
                  setPlanets(perkecil);
                }}
              >
                <FaCompressArrowsAlt size={18} />
                Perkecil
              </button>
            </div>
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              const newPlanet2 = planets.map((planet) =>
                parseInt(tamp.id) === planet.id
                  ? { ...planet, name: tamp.name }
                  : planet
              );

              setPlanets(newPlanet2);
            }}
          >
            <FaRegEdit size={20} />
            Update
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setPlanets(planets.filter((planet) => planet.id != tamp.id));
            }}
          >
            <FaTrashAlt size={20} />
            Hapus
          </button>
        </form>
        <div className="cardDel">
          <label>
            <h1>Hapus</h1>
            <div className="containDel">
              <button onClick={() => setPlanets(planets.slice(1))}>
                <FaTrashAlt size={20} />
                Depan
              </button>
              <button onClick={() => setPlanets(planets.slice(0, -1))}>
                <FaTrashAlt size={20} />
                Belakang
              </button>
            </div>
            <button
              className="delbtn"
              onClick={(e) => {
                setPlanets([]);
                e.preventDefault();
              }}
            >
              <FaTrashAlt size={20} />
              Semua
            </button>
          </label>
        </div>
      </main>
    </>
  );
}

export default App;
