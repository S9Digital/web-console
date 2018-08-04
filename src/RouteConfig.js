import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Property from "./components/Property";
import RoomList from "./components/RoomList";
import Room from "./components/Room";

//route components
// const PropertyScreen = () => <Landing />;

// const DefaultScreen = () => <Default />;

// const RoomListScreen = () => <RoomList />;

// const RoomScreen = () => <Room />;

const routes = [
  {
    path: "/property",
    component: Property
  },
  {
    path: `/property/${propertyId}/defaults`,
    component: Default
  },
  {
    path: `/property/${propertyId}/rooms`,
    component: RoomList,
    routes: [
      {
        path: `/room/${roomId}`,
        component: Room
      }
    ]
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const RouteConfig = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/property" />
        </li>
        <li>
          <Link to="/sandwiches">Sandwiches</Link>
        </li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  </Router>
);

const mapStateToProps = (state, props) => ({
  rooms: state.rooms,
  roomId: state.rooms
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteConfig);
