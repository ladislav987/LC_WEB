import React from "react";

const CustomHooks = () => {
  return (
    <>
      <p>
        Môžeme si vyrábať vlastné hooks v prípade že máme kód ktorý vieme znovu
        použiť. Názov musí začínať slovom use (napr. useFetch).
      </p>

      <p>
        Vytvoríme si js alebo jsx súbor ktorý naimportujeme do komponentu.
        <br />Z tohto súboru vraciame objekt s našími funkciami,useState alebo
        premennými.
      </p>

      <div className="code-example">
        <pre>
          <code>{`export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [url])

    return {loading, products}
};
`}</code>
        </pre>
      </div>

      <p>
        V komponente destructneme vraciane funckie, useState alebo premenné.
      </p>

      <div className="code-example">
        <pre>
          <code>{`const {loading,products} = useFetch(url)
`}</code>
        </pre>
      </div>
    </>
  );
};

export default CustomHooks;
