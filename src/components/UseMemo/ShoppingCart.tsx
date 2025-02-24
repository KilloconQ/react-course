// objetivo: crea cache  y ejecuta el resutlado de una funcion costosa. Evita quese vuelva a llamar el método.
// controlar si el beneficio de memorizarlo es superior a recarcularlo

import { useMemo, useState } from "react";

// Ejemplo
// Lista de compras, se calculo el precio
//  no se agrega nada ni se cambia nada, cual es el costo de la lista de compras? El mismo
interface Item {
  id: number;
  name: string;
  price: number;
}

export const ShoppingCart = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Manzana", price: 1.5 },
    { id: 2, name: "Pera", price: 2.0 },
    { id: 3, name: "Banana", price: 1.0 },
  ]);

  const [discount, setDiscount] = useState<number>(0);

  const totalCost = useMemo(
    () => items.reduce((total, item) => total + item.price, 0),
    [items],
  );
  const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Producto ${items.length + 1}`,
      price: Math.random() * 5,
    };

    setItems([...items, newItem]);
  };

  return (
    <div>
      <h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}: ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>

        <p>Costo total: ${totalCost.toFixed(2)}</p>

        <p>
          Descuento: $
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
          />
        </p>

        <p>Costo final: ${finalCost.toFixed(2)}</p>

        <button onClick={addItem}>Agregar Producto</button>
      </h2>
    </div>
  );
};
