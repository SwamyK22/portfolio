import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllDashboard from "./screans/AllDashboard";
import FavDashboard from "./screans/FavDashboard";
import MainLayouy from "./layout/MainLayouy";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductDetails from "./screans/ProductDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouy />,
        children: [
            {
                index: true,
                element: <AllDashboard />
            },
            {
                path: '/fav',
                element: <FavDashboard />,
            }
        ]
    },
    {
        path: 'product',
        element: <ProductDetails />
    }
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App;