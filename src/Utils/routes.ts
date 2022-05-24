import Game from "../Pages/Game";
import regles from "../Pages/regles";
import history from "../Pages/history";

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
  },
  {
    name: "history",
    path: "/history",
    element: history,
  }
];

export default routes;
