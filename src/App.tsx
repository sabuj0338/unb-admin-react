import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import LoaderContext from './context/LoaderContext';

const Empty = React.lazy(() => import("./components/widget/Empty"));
const CircleProgressIndicator = React.lazy(() => import("./components/CircleProgressIndicator"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
// import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// const ProtectedAdminRoute = ({ component: Component, ...restOfProps }) => {
//     const {auth} = useContext(AuthContext);
//     return (
//         <Route
//           {...restOfProps}
//           render={(props) =>
//             (auth.user !== null &&( auth.user.type === 'admin' ||  auth.user.type === 'super-admin')) ? <Component {...props} /> : <Redirect to="/signin" />
//           }
//         />
//     );
// }

// const ProtectedSuperAdminRoute = ({ component: Component, ...restOfProps }) => {
//     const {auth} = useContext(AuthContext);
//     return (
//         <Route
//           {...restOfProps}
//           render={(props) =>
//             (auth.user !== null && auth.user.type === 'super-admin') ? <Component {...props} /> : <Redirect to="/signin" />
//           }
//         />
//     );
// }

function App() {
    const [isLoading, setIsLoading]:[boolean, (isLoading: boolean) => void] = React.useState<boolean>(true);
  return (
    <Suspense fallback={<CircleProgressIndicator/>}>
        <AuthContextProvider>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/topics' element={<Empty/>} />
                <Route path='/settings' element={<Empty/>} />
            </Routes>
            
        </AuthContextProvider>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
    </Suspense>
  );
}

export default App;
