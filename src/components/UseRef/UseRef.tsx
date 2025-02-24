// objetivo: nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente
// sin causar un re-renderizado cuando se actualiza.
//
// objetivo 2: hacer referencia a un elemento del DOM

import { useRef, useState } from "react";

// Ejemplo de uso de useRef
// Un marcador de un libro que utilizamos para guardar la posición no afecta al contenido del libro

// Se usa cuando se mantiene una variable con valores internos pero no de manera externa en el front

export const BookReader = () => {
  const currentPageRef = useRef<number>(1);
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    currentPageRef.current += 1;
    console.log(`Avanzaste a la pnagina ${currentPageRef.current}`);
  };

  const previousPage = () => {
    if (currentPageRef.current === 1) {
      console.log("No puedes retroceder más");
      return;
    }
    currentPageRef.current -= 1;
    console.log(`Retrocediste a la pnagina ${currentPageRef.current}`);
  };

  const goToPage = (page: number) => {
    if (page < 1) {
      console.log("No puedes ir a una página menor a 1");
      return;
    }
    currentPageRef.current = page;
    setCurrentPage(page);
    console.log(`Fuiste a la página ${currentPageRef.current}`);
  };

  return (
    <div>
      <h2>Book Reader</h2>
      <p>Página actual: {currentPageRef.current}</p>
      <p>Página actual: {currentPage}</p>
      <button onClick={previousPage}>Página anterior</button>
      <button onClick={nextPage}>Página siguiente</button>
      <button onClick={() => goToPage(5)}>Ir a la página 5</button>
    </div>
  );
};
