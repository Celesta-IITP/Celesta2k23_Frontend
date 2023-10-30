import React from "react";
import { HashRouter,Route, Switch } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";

// import Index from "pages/Index.js";
import HomePage from "pages/HomePage";
import LandingPage from "views/examples/LandingPage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
import ForgotPage from "views/examples/ForgotPassword.js";
import ResetPage from "views/examples/ResetPassword.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ContactUsPage from "views/examples/ContactUsPage.js";
import Photos from "components/Gallery/gallery.js";
import SigninPage from "views/examples/SigninPage.js";
import Sponsors from "components/Sponsors/sponsors.js";
import Stats from "components/Stats/stats.js";
import NotFound from "components/NotFound/notFound.js";
// import Events from "components/Events/Events.js";
import Events from "components/events";
import OnlineEvents from "./components/Explore/Online/online_explore";
import InformalEvents from "./components/Explore/Informal/info_explore";
import GamiacsEvents from "./components/Explore/Gamiacs/gamiacs_explore";
import ManagerialEvents from "./components/Explore/Managerial/man_explore";
import RoboticsEvents from "./components/Explore/Robotics/robo_explore";
import SuspEvents from "./components/Explore/SUSP/susp_explore";
import TechnicalEvents from "./components/Explore/Technical/tech_explore";
// import CA from "./components/CA/ca.js";
import AddEvent from "./components/AddEvent/addEvent";
import Points from "components/PtsTable/pts.js";

import ProtectedRoute from "./components/ProtectedRoute";

import Teams from "./components/Team/team";
import RegisterPageN from "views/examples/RegisterPagen";

class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route
						path="/"
						exact
						// front page
						// render={(props) => <Index {...props} />}
						render={(props) => <HomePage {...props} />}
					/>
					<Route
						path="/landing-page"
						render={(props) => <LandingPage {...props} />}
					/>
					<Route
						path="/events-page"
						render={(props) => <Events {...props} />}
					/>
					<Route
						path="/register-page"
						// render={(props) => <RegisterPage {...props} />}
						render={(props) => <RegisterPageN {...props} />}
					/>
					<Route
						path="/forgot-page"
						render={(props) => <ForgotPage {...props} />}
					/>
					<Route
						path="/reset-page"
						render={(props) => <ResetPage {...props} />}
					/>
					<Route
						path="/signin-page"
						exact
						render={(props) => <SigninPage {...props} />}
					/>
					<ProtectedRoute
						path="/profile-page"
						exact
						component={ProfilePage}
					/>
					<Route
						path="/Team"
						render={(props) => <Teams {...props} />}
					/>
					<Route
						path="/3"
						render={(props) => <ContactUsPage {...props} />}
					/>
					<Route
						path="/events/add"
						exact
						render={(props) => <AddEvent {...props} />}
					/>
					<Route
						path="/events/online_events"
						exact
						render={(props) => <OnlineEvents {...props} />}
					/>
					<Route
						path="/events/onsite_events"
						exact
						render={(props) => <InformalEvents {...props} />}
					/>
					<Route
						path="/events/gamiacs_events"
						exact
						render={(props) => <GamiacsEvents {...props} />}
					/>
					<Route
						path="/events/man_events"
						exact
						render={(props) => <ManagerialEvents {...props} />}
					/>
					<Route
						path="/events/robo_events"
						exact
						render={(props) => <RoboticsEvents {...props} />}
					/>
					<Route
						path="/events/susp_events"
						exact
						render={(props) => <SuspEvents {...props} />}
					/>
					<Route
						path="/events/tech_events"
						exact
						render={(props) => <TechnicalEvents {...props} />}
					/>
					<Route
						path="/gallery"
						render={(props) => <Photos {...props} />}
					/>
					<Route
						path="/sponsors"
						render={(props) => <Sponsors {...props} />}
					/>
					<Route
						path="/Points"
						render={(props) => <Points {...props} />}
					/>
					<Route
						path="/stats"
						render={(props) => <Stats {...props} />}
					/>
					{/* <Route path="/ca" render={(props) => <CA {...props} />} /> */}
					<Route path="*" component={NotFound} />
					{/* <Redirect from="/" to="/components" /> */}

					{/* <Route
            path="/test-register"
            exact
            // render={(props) => <RegisterPageN {...props} />}
          /> */}
				</Switch>
			</HashRouter>
		);
	}
}
export default App;
