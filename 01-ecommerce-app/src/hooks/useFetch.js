import { useEffect, useState } from "react";

export function useFetch(url) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    getProducts();
  }, [url]);

  return { products };
}