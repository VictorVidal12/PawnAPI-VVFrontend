import './App.css'

// Dependencias
import { Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom'
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

// Imports de componentes
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Layout from './components/Layout'
import EmpezarEmpeñar from './pages/EmpezarEmpeñar'
import EmpezarVender from './pages/EmpezarVender'
import MyPawns from './pages/Tables/MyPawns'
import ActivePawns from './pages/Tables/ActivePawns'
import ActiveSales from './pages/Tables/ActiveSales'
import MySales from './pages/Tables/MySales'
import OnProcessPawns from './pages/Tables/OnProcessPawns'
import OnProcessSales from './pages/Tables/OnProcessSales'
import Pawn_request from './pages/CreatePawnRequest'
import SalesRequest from './pages/Tables/SalesRequest'
import PawnsRequest from './pages/Tables/PawnsRequest'
import MyPawnRequest from './pages/Tables/MyPawnRequest'
import MySalesRequest from './pages/Tables/MySalesRequest'

import ProductDetails from './pages/ProductDetails';
import About from './pages/About'
import Car from "./pages/Car"
import PawnRequest from './pages/CreatePawnRequest'
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductContext from './components/ProductContext';
import Sandbox from './Sandbox';
import AccountInfo from './pages/CustomerInformation';
import CreateSellRequest from './pages/CreateSellRequest copy';
import CreatePawnRequest from './pages/CreatePawnRequest';
import ProductDetailsRequest from './pages/ProductDetailsRequest';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>

        {/* Colocarlo en condicional? */}
        <Route path="/EmpezarEmpeñar" element={<EmpezarEmpeñar />} />
        <Route path="/EmpezarVender" element={<EmpezarVender />} />

        <Route path="/MyPawns" element={<MyPawns />} />
        <Route path="/MyShopping" element={<MySales />} />

        <Route path="/ActivePawns" element={<ActivePawns />} />
        <Route path="/ActiveSales" element={<ActiveSales />} />

        <Route path="/OnProcessPawns" element={<OnProcessPawns />} />
        <Route path="/OnProcessSales" element={<OnProcessSales />} />

        <Route path="/SalesRequest" element={<SalesRequest />} />
        <Route path="SalesRequest/:id" element={<ProductDetailsRequest />} />

        <Route path="/PawnsRequest" element={<PawnsRequest />} />
        <Route path="PawnsRequest/:id" element={<ProductDetailsRequest />} />

        <Route path="/MyPawnRequest" element={<MyPawnRequest />} />
        <Route path="/MySalesRequest" element={<MySalesRequest />} />

        <Route path="/createSell" element={<CreateSellRequest />} />
        <Route path="/createPawn" element={<CreatePawnRequest />} />

        <Route element={<ProductContext />}>
          <Route index element={<Landing />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Route>
        
        {/* <Route path="/Car" element={<Car />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/CustomerInformation" element={<AccountInfo />} />
        <Route path="pawnRequest" element={<PawnRequest />}/>
        {/* <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:index" element={<EditProduct />} /> */}


        <Route path="s" element={ <Sandbox />} />
      </Route>
    </>
  ))

  const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider store={store}>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  )

}

export default App
