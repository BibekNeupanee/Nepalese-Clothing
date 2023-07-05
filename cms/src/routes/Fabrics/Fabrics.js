import React from "react";
import "./Fabrics.scss";
import Header from "../../components/Header/Header";
import FabricList from "../../components/FabricComponents/FabricList/FabricList";
import AddFabric from "../../components/FabricComponents/AddFabric/AddFabric";
import useFetch from "../../hooks/useFetch";
import {
  useSearchText,
  useSearchTextUpdate,
} from "../../contexts/SearchContext";

function Fabrics() {
  const searchText = useSearchText();

  const url =
    searchText === ""
      ? "http://localhost:3000/fabric"
      : `http://localhost:3000/fabric/search/${searchText}`;

  const [fabrics, setFabric] = useFetch(url);

  const onFormSubmit = (fabric) => {
    const newFabric = { ...fabrics };
    newFabric.fabric.push(fabric);
    setFabric(newFabric);
  };

  const onchange = () => {};

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
