import React from 'react'

const AddEventListener = () => {
  return (
    <>
      <p>
        addEventListener() je metóda EventTarget interfacu nastavuje funkciu
        ktorá bude zavolaná pri určitej udalosti. Najčastejšie je cieľ elemet,
        potomok elementu, Document a Window, ale všeobecne to môže byť akykoľvek
        objekt ktorý podoporuje event.
      </p>

      <div className="code-example">
        <pre>
          <code>{`document.getElementById("form").addEventListener("click", event => {
    event.preventDefault();
});`}</code>
        </pre>
      </div>
    </>
  );
}

export default AddEventListener