import Game from "../Pages/Game";

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
  }
];

export default routes;
