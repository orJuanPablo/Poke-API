import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import FourOFour from "../views/404";
import PokeDetail from "../views/PokeDetail";

export default function Routes() {
    return(
        <Router>
            <Switch>    
                <Route path="/" exact>
                    <Home />        
                </Route>
                <Route path = "/pokemon/:id">
                    <PokeDetail />
                </Route>
                <Route>
                    <FourOFour/>
                </Route>
            </Switch>
        </Router>
    );
}