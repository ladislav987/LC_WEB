import React from "react";

const UseReducer = () => {
  return (
    <>
      <p>
        useReducer() sa používa na viac zložité aplikácie ako zjednotenie
        useState.
      </p>

      <p>Odporúčany tvar useReducer: </p>

      <div className="code-example">
        <pre>
          <code>{`const [state, dispatch] = useReducer(reducer, defaulState);

Kde:
state- je názov useReducera
dispatch- funkcia ktorou voláme určitu zmenu podľa typu (dispatch({type: "NO_VALUE"}))
reducer- je prvý parameter useReducera a taktiež funkcia ktorá manipuluje so stavom
defaultState- objekt v ktorom sú defaultne hodnoty s ktorými pracujeme
            - k týmto hodnotam sa pristupuje cez názov useReducera (state.name)

`}</code>
        </pre>
      </div>

      <p>
        Keď chceme zavolať zmenu určitej hodnoty zavoláme funkciu dispatch.
        Parameter funkcie musí byť vždy objekt ( &#123; &#125; ) a do tohto
        objektu budeme najčastejšie posielať typ akcie ktorej názov je
        odporučané písať veľkými písmenami.
      </p>

      <div className="code-example">
        <pre>
          <code>{`dispatch({ type: "ADD_ITEM" });
`}</code>
        </pre>
      </div>

      <p>Do objektu vo funkcii dispatch môžeme poslať viac vlastnosti.</p>

      <div className="code-example">
        <pre>
          <code>{`if (name) {
      const newPeople = { id: Math.max(state.people.map(s => s.id)) + 1, name}
      dispatch({ type: "ADD_ITEM", payload:newPeople });
      setName("");
    }

    Kde:
    payload- pomenuváva vlastnosť ktorá drží data v objekte.
`}</code>
        </pre>
      </div>

      <p>
        Funkcia reducer príjma do parametrov state (stav pred akciou) a action
        (akú akciu chceme vykonať)
      </p>
      <p>Kedže funkcia reducer mení stav vždy musí niečo vracať!</p>
      <p>
        Dobrým zvykom je aby reducer defaultne vracal new Error aby sme vedeli
        že požadovaný typ akcie neexistuje.
      </p>
      <p>
        V returne musíme vždy prve pomocou spread operátora rozbaliť
        predzchadzajúci stav.
      </p>

      <div className="code-example">
        <pre>
          <code>{`const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
    return {
    ...state,
      ..........
    }
    throw new Error ("no matching action type sir developer")
}
`}</code>
        </pre>
      </div>

      <p>Kedže useReducer spravuje viacero hodnôt</p>
    </>
  );
};

export default UseReducer;
