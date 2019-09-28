import {
    actions,
    cardStackReducer,
} from 'react-native-navigation-redux-helpers-compat';

const globalnavkey = 'globalnav';

export interface Route {
    key: string,
};

export interface NavigationState {
    index: number,
    key: string,
    routes: Array<Route>,
};

const navigationInitialState: NavigationState = {
    index: 0,
    key: globalnavkey,
    routes: [
        {
            key: 'Auth',
        },
    ],
};

export const cardNavigation = cardStackReducer(navigationInitialState);

const navigator = {
    pop: () => actions.popRoute(globalnavkey),
    push: (route: Route) => actions.pushRoute(route, globalnavkey),
    reset: (routes: Array<Route>, index: number = 0) =>
        actions.reset(routes, globalnavkey, index),
    resetTo: (routeKey: string, params: object = {}) => {
    if (routeKey === 'Auth') {
        return actions.reset([{key: routeKey, ...params}], globalnavkey, 0);
    }
    return actions.reset(
        [{key: 'HomeScreen'}, {key: routeKey, ...params}],
        globalnavkey,
        1
    );
    },
    replaceAt: (routeKey: string, route: Route) =>
        actions.replaceAt(routeKey, route, globalnavkey),
};

export interface Navigator {
    // TODO type return values
    pop(): any,
    push(route: Route): any,
    reset(routes: Array<Route>): any,
    resetTo(key: string, params: object): any,
    replaceAt(key: string, route: Route): any,
};
    

export default navigator;
