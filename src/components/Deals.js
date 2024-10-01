import { useEffect, useState } from "react";
import ItemsList from "./ItemsList";

const Deals = ({ items }) => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    if (items) {
      const filteredDeals = [
        ...items.Burgers.filter((element) => element.discount !== 0),
        ...items.Aperitivos.filter((element) => element.discount !== 0),
        ...items.Saladas.filter((element) => element.discount !== 0),
        ...items.Sobremesas.filter((element) => element.discount !== 0),
        ...items.Bebidas.filter((element) => element.discount !== 0)
      ];

      setDeals(filteredDeals);
    }
  }, [items]);

  return <ItemsList title={"Ofertas do dia"} items={deals} />;
};

export default Deals;
