1. - v konzole npx create-react-app luckypedia_web
2. - doinštalovať sass do appky npm install sass
3. - premazanie súborov
4. - prerobenie súborov na jsx a scss
5. - v index.jsx skontolovať <React.StrictMode> a pridať <BrowserRouter> pre routes a route

6. - vytvoriť komponent pre nav a importovať ho do App.jsx
   - v TheNavigation.jsx importovať import { NavLink } from "react-router-dom";

7. - v App.jsx naimportovať import { Routes, Route } from "react-router-dom";
   - Route musí byť potomok Routes
   - do Route pridám komponenty

8. vytvoriť scss moduly pre views a komponenty

9. vyriešený problém s active class v navigácii

childdren props idú medzi uzatvaracie tagy
rozložím si props ale musí sa volať presne "children" a môžem ho renderovať


V reacte sa map() používa na iterovanie v objekte kde z callback funkcie vráti JSX

const Users = () => {
  const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Victor" },
    { id: 3, name: "Jane" },
  ];

  return (
    <div className="users">
      {data.map((user) => (
        <div className="user">{user}</div>
      ))}
    </div>
  );
};