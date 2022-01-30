import React from "react";

const Async = () => {
  return (
    <div>
      <p>
        Asynchrónne programovanie alebo asynchrónna operácia znamená že program
        čaká na výsledok žiadosti na pozadí.
      </p>

      <p>
        Pred funkciu napíšeme slovo "async" ktoré hovorí že funkciu bude bežať
        asynchrónne s inými funkciami
      </p>

      <p>
        Taktiež pred funkciu ktorá čaká odpoveď zo servera napíšeme slovo
        "await" ktoré hovorí že má čakať na hodnotu.
      </p>

      <div className="code-example">
        <pre>
          <code>{`(async function () {
    try{
        let comments = await get("/comments");
        let post = await get("/posts/ + comments[0].postId");
        let user = await get("/users/ + post[0].userId");

        console.log(user, user.name);
    }
    catch (err) {
    console.error("Error", err);
    }
}())`}</code>
        </pre>
      </div>

      <p>Príklad kedy sa časovače spúšťaju sekvenčne (čakajú na seba). </p>

      <div className="code-example">
        <pre>
          <code>{`Funckia start() ktorá nastaví časovač:

function start(id, time) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(timer done);
            resolve();
        }, time);
    });
};

Časovač:

(async function () {

try {
    let timer1 = await start(1, 4000);
    let timer2 = await start(2, 1000);
    let timer3 = await start(3, 2500);

    console.log("sequential done");

} catch (err) {
    console.error("neda sa načítať", err);
}
}());`}</code>
        </pre>
      </div>

      <p>Priklad kde sa časovače spustia paralelne (nebudú na seba čakať).</p>

      <div className="code-example">
        <pre>
          <code>{`Funckia start() ktorá nastaví časovač:

function start(id, time) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(timer done);
            resolve();
        }, time);
    });
};

Časovač:

(async function () {
    try {
        let timer1 = start(1, 4000);
        let timer2 = start(2, 1000);
        let timer3 = start(3, 2500);

        await timer1;
        await timer2;
        await timer3;

        console.log("parallel done");


    } catch (err) {
        console.error("neda sa načítať", err);
    }
}());`}</code>
        </pre>
      </div>
    </div>
  );
};

export default Async;
