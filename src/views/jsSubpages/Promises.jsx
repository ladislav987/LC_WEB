import React from "react";

const Promises = () => {
  return (
    <div>
      <p>
        Promise je hodnota ktorú ešte nemáme ale v budúcnosti ju budeme mať.
        Používajú sa spolu s AJAX.
      </p>
      <p>
        Častejšie ako písanie vlastných promises budeme používať knižnice alebo
        funkcie ktoré pormises používajú na pozadí a preto bude našou úlohou
        napísať do .then() funckiu keď sa žiadosť podarí naopak v prípade
        neúspechu funkciu do .catch()
      </p>

      <div className="code-example">
        <pre>
          <code>{`let data = fetch(url);

data.then(res => res.json())
    .then(out => console.log(out))
    .catch(err => console.error("error));`}</code>
        </pre>
      </div>

      <p>
        Dorobiť
        https://www.learn2code.sk/aplikacia/skupiny#/javascript-a-es6/chapters/76-es6-19-promises-02-timer-cez-slub-all-race-prax
      </p>
    </div>
  );
};

export default Promises;
