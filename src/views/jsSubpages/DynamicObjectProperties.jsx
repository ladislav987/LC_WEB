import React from "react";

const DynamicObjectProperties = () => {
  return (
    <>
      <p>
        Pomocou hranatých zátvoriek ( [ ] ) môžeme do objektu pomocou funkcie
        pridávať hodnoty dynamicky .
      </p>

      <div className="code-example">
        <pre>
          <code>{`
const object = {
    a:1,
    b:2,
};

let addProp = (obj, propName, propValue) => {
    obj[propName] = propValue;
};

addProp(object, "food", "cheese");
`}</code>
        </pre>
      </div>
    </>
  );
};

export default DynamicObjectProperties;
