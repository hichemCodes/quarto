import Game from "../Pages/Game";
import History from "../Pages/history";

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

  const route: routesType = [
    {
       name: "history",
       path: "/history",
       element: history,
     }
    ];


export default routes;
