import React, { useEffect, useState } from "react";
import{Card} from "../Card/Card";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    await fetch("http://localhost:9000/api/products")
      .then((resp) => resp.json())
      .then((value) => {
        if (value.success) {
          setProducts(value.data);
          console.log(value);
        }
      });
  };

  return (
    <div>
      <h2>Productos</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((x) => {
          return <Card key={x.id} {...x} />;
        })}
      </div>
    </div>
  );
};
