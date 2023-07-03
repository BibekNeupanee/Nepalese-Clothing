import React from "react";
import "./Fabrics.scss";
import Header from "../../components/Header/Header";
import FabricList from "../../components/FabricComponents/FabricList/FabricList";
import AddFabric from "../../components/FabricComponents/AddFabric/AddFabric";

function Fabrics() {
  return (
    <>
      <Header />
      <div className="add_fabric">
        <AddFabric />
      </div>
      <div className="fabric-list">
        <FabricList />
      </div>
    </>
  );
}

export default Fabrics;
