import React from "react";
import "./Fabrics.scss";
import Header from "../../components/Header/Header";
import FabricList from "../../components/FabricComponents/FabricList/FabricList";
import AddFabric from "../../components/FabricComponents/AddFabric/AddFabric";
import useFetch from "../../hooks/useFetch";

function Fabrics() {
  const [fabrics, setFabric] = useFetch("http://localhost:3000/fabric");

  const onFormSubmit = (fabric) => {
    console.log(fabric, fabrics);
    const newFabric = { ...fabrics };
    newFabric.fabric.push(fabric);
    setFabric(newFabric);
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="fabric-list">
            <FabricList fabrics={fabrics?.fabric} />
          </div>
        </section>
        <aside>
          <div className="add-fabric">
            <AddFabric onFormSubmit={onFormSubmit} />
          </div>
          </aside>
      </main>
    </>
  );
}

export default Fabrics;
