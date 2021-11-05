import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from '../Page';
import routeListData from './data/route-list-data';

const RouteList = () => (
    <Switch>
        {routeListData.map((item, index) => {
            const { exact, path, content } = item;
            let { title } = item;
            if (!title) {
                title = content.name;
            }
            const key = `id-${index + 1}`;
            return (
                <Route key={key} exact={exact} path={path}>
                    <Page key={key} title={title} content={content} />
                </Route>
                
                
            );
        })}
    </Switch>
);

export default RouteList;