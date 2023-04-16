import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout/';
import routes from './config/routes';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout noUseSide={route.noUseSide}>
                                        <Page />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
