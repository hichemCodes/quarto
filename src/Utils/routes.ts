import HomePage from "../Pages/Homepage";
import Game from "../Pages/Game";

type routesType = {
  name: string;
  path: string;
  element: any;
}[];

const routes: routesType = [
  {
    name: "Homepage",
    path: "/HomePage",
    element: HomePage,
  },{
    name: "Game",
    path: "/",
    element: Game,
  }
];

export default routes;
