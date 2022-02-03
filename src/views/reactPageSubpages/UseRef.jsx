import React from "react";

const useRef = () => {
  return (
    <>
      <p>
        Najpouživanejši vlastnosť na useRef() je targetovanie konkretného DOM
        elementu.
        <br /> useRef() poskytuje hodnotu medzi renderovaním ale sám nespúšťa
        renderovanie.
      </p>

      {/* <p>Výhoda používania useRef() je že nemusíme volať onChange zakaždým ale spolu s referenciou máme konkrétnu hodnotu elementu.</p> */}

      <div className="code-example">
        <pre>
          <code>{`const UseRefBasics = () => {

  const refContainer = useRef<HTMLInputElement>(null); //nastavená hodnota na null

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value); // teraz môžeme vypísať hodnotu v inpute
  }

  return <form className='form' onSubmit={handleSubmit}>
    <div>
      <input
        type="text"
        ref={refContainer} // priradená referencia na refContainer
      />
      <button type='submit'>submit</button>
    </div>
  </form>;
};
`}</code>
        </pre>
      </div>
    </>
  );
};

export default useRef;
