import { Switch, Route } from 'react-router-dom';
import Product from './Screens/Product';
import Movement from './Screens/Movement';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Product} exact />
            <Route path="/movements" component={Movement} />
        </Switch>
    );
};

export default Routes;
