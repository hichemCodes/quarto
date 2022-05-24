import Game from "../Pages/Game";
import regles from "../Pages/regles";

type routesType = {
  name: string;
  path: string;
  element: any;
}[];

const routes: routesType = [
 {
    name: "Game",
    path: "/",
    element: Game,
  },
  {
    name: "regles",
    path: "/regles",
    element: regles,
  }
];

export default routes;
