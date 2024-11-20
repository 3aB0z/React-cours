import { useEffect, useState } from "react";

function TestEffect() {
  const [nombre1, setNombre1] = useState();
  const [nombre2, setNombre2] = useState();

  const [somme, setSomme] = useState("");

  useEffect(() => {
    console.log("somme changed!!!!!");
  }, [somme, nombre1]);

  return (
    <>
      <input
        type="text"
        className="bg-gray-50 border"
        onChange={(e) => setNombre1(e.target.value)}
      />
      <input
        type="text"
        className="bg-gray-50 border"
        onChange={(e) => setNombre2(e.target.value)}
      />
      <input
        type="text"
        className="bg-gray-50 border"
        value={somme}
        onChange={(e) => setSomme(e.target.value)}
      />
      <button onClick={() => setSomme(Number(nombre1) + Number(nombre2))}>
        Calculer
      </button>
    </>
  );
}

export default TestEffect;
