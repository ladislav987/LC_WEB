import React from "react";

const Props = () => {
  return (
    <div>
      <p>
        Props je obyčajný HTML atribút ktorému môžeme pridať názov a hodnotu.{" "}
      </p>

      <div className="code-example">
        <code>
          <span className="token punctuation">&lt;</span>
          <span>TheComponent </span>
          <span>brand</span>
          <span> =</span>
          <span> "main"</span>
          <span className="token punctuation"> /</span>
          <span className="token punctuation">&gt;</span>
        </code>
      </div>

      <p>
        V komponente TheNavigation (rodič) vznikde premená brend === "main".
      </p>
      <p>Do potomka môžeme pošlem props s názvom "props" podľa konvencie</p>

      <div className="code-example">
        <code>
          <span>const</span>
          <span> Function</span>
          <span> = </span>
          <span>(</span>
          <span>props</span>
          <span>)</span>
          <span> =</span>
          <span>&gt;</span>
          <span> &#123;</span>
          <br />
          <span>console</span>
          <span>.</span>
          <span>log</span>
          <span>(</span>
          <span>props</span>
          <span>.</span>
          <span>brand</span>
          <span>)</span>
          <br />
          <span> &#125;</span>
        </code>
      </div>

      <p>
        Hodnota sa preposiela ako <code>String</code> ale ale častejšie sa budú
        props využívať na odoslanie hodnoty premennej alebo parameter potomkovi
        napr.
      </p>

      <div className="code-example">
        <code>
          <span className="token punctuation">&lt;</span>
          <span>TheComponent </span>
          <span>changeTheme</span>
          <span> =</span>
          <span> &#123;</span>
          <span className="token punctuation"> changeTheme</span>
          <span> &#125;</span>
          <span className="token punctuation"> /</span>
          <span className="token punctuation">&gt;</span>
        </code>
      </div>

      <p>Dobrým zvykom je rozložiť Props do funkcie</p>

      <div className="code-example">
        <code>
          <span>const</span>
          <span> Function</span>
          <span> = </span>
          <span>(</span>
          <span>props</span>
          <span>)</span>
          <span> =</span>
          <span>&gt;</span>
          <span> &#123;</span>
          <br />
          <span>const</span>
          <span> &#123;</span>
          <span>brand</span>
          <span>,</span>
          <span> howMany</span>
          <span> &#125;</span>
          <br />
          <span> &#125;</span>
        </code>
      </div>

      <p>A preto v kóde netreba používať props.brand ale skrátene brand.</p>
      <p> <strong>Props sú len na čítanie (Read-only)</strong> </p>
    </div>
  );
};

export default Props;
