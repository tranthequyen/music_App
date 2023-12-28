import '@/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Button } from 'primereact/button';
import { publicRoutes } from '@/routes';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component
                    return <Route key={index} path={route.path} element={<Page />} />
                })}
            </Routes>
        </Router>
    );
}

export default App;
