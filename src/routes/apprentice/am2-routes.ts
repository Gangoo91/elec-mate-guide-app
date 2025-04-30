
import { RouteObject } from 'react-router-dom';
import AM2HomePage from "../../pages/AM2Page";

const am2Routes: RouteObject[] = [
  {
    path: "/apprentices/study-materials/city-guilds/am2",
    element: <AM2HomePage />,
  },
];

export default am2Routes;
