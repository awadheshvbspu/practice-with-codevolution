import logo from './logo.svg';
import './App.css';
import React
 from 'react';
import Sidebar from './component/Sidebar'
import UseStateHook1 from './component/CodeVolutionHooks/UseStateHook1';
import UseStatewithPreviousState from './component/CodeVolutionHooks/UseStatewithPreviousState';
import UseSateWithObject from './component/CodeVolutionHooks/UseSateWithObject';
import UseStateWithArray from './component/CodeVolutionHooks/UseStateWithArray';
import UseEffectRender from './component/CodeVolutionHooks/useEffect/UseEffectRender';
import RunEffectOnlyOne from './component/CodeVolutionHooks/useEffect/RunEffectOnlyOne';
import UseEffectCleanup from './component/CodeVolutionHooks/useEffect/UseEffectCleanup';
import UseEffectWithIncorrectdependency from './component/CodeVolutionHooks/useEffect/UseEffectWithIncorrectdependency';
import UseEffectFetchData1 from './component/CodeVolutionHooks/useEffect/UseEffectFetchData1';
import UseContext1 from './component/CodeVolutionHooks/useContext/UseContext1';
import UseReducer from './component/CodeVolutionHooks/useReducer/UseReducer'
import UseReducerComplexState from './component/CodeVolutionHooks/useReducer/UseReducerComplexState';
import UseReducerMutiple from './component/CodeVolutionHooks/useReducer/UseReducerMutiple';
import UseReduceFetchData from './component/CodeVolutionHooks/useReducer/UseReduceFetchData';

import UseReducerFetchData2 from './component/CodeVolutionHooks/useReducer/UseReducerFetchData2';
import UseCallbackHook from './component/CodeVolutionHooks/usecallbackHook/UseCallbackHook';
import UseMemoHook from './component/CodeVolutionHooks/useMemo/UseMemoHook';
import UseRefFocusInput from './component/CodeVolutionHooks/useRef/UseRefFocusInput';
import HookTimer from './component/CodeVolutionHooks/useMemo/HookTimer';
import {Routes,Route} from 'react-router-dom';
import Home from './component/reactRouter/Home';
// import About from './component/reactRouter/About';
import NavBar from './component/reactRouter/NavBar';
import OrderSummary from './component/reactRouter/OrderSummary';
import NoMatch from './component/reactRouter/NoMatch';
import Products from './component/reactRouter/Products';
import Featured from './component/reactRouter/Featured';
import New from './component/reactRouter/New';
import Users from './component/reactRouter/Users';
import UserDetails from './component/reactRouter/UserDetails';
import Admin from './component/reactRouter/Admin';
import Profile from './component/reactRouter/Profile';
import { AuthProvider } from './component/reactRouter/Auth';
import Login from './component/reactRouter/Login';
import RequireAuth from './component/reactRouter/RequireAuth';
import YoutubeForm from './formsHooks/YoutubeForm';
import LoginForm from './component/login/LoginForm';
const LazyAbout =React.lazy(()=>import('./component/reactRouter/About'))

export const UserContext = React.createContext()
export const ChannelContext =React.createContext()
function App() {
return (
    <>
    <LoginForm/>
    {/* <YoutubeForm/> */}
    {/* <AuthProvider>
    <NavBar/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/about' element={
    <React.Suspense fallback='Loading....' >
  <LazyAbout/>
    </React.Suspense>
  } />

  <Route exact path='/ordersummary' element={<OrderSummary/>}/>
  <Route path='/products' element={<Products/>}> */}
  {/* <Route index element={<FeaturedProduct/>} /> */}
  {/* <Route path='new' element={<New/>} />
  <Route path='featured' element={<Featured/>} />
  </Route>
  <Route path='*' element={<NoMatch/>} />
  <Route path='/users' element={<Users/>}>
  <Route path=':UserId' element={<UserDetails/>} />
  <Route path='admin' element={<Admin/>}/>
  </Route>
  <Route path ='/profile' element={
    <RequireAuth>

  <Profile/>
    </RequireAuth>}/>
<Route path='/login' element={<Login/>} />

  
</Routes>
</AuthProvider> */}

    {/* <UseRefFocusInput/>
    <HookTimer/> */}
    {/* <UseMemoHook/> */}
    {/* <UseCallbackHook/> */}
    {/* <UseReducer/>
    <UseReducerComplexState/>
    <UseReducerMutiple/>
    <UseReduceFetchData/>
    <UseReducerFetchData2/> */}
    {/* <Sidebar/> */}
    {/* <UseStateHook1/>
    <UseStatewithPreviousState/>
    <UseSateWithObject/>
    <UseStateWithArray/> */}

    {/* <UseEffectRender/>
    <RunEffectOnlyOne/>
    <UseEffectCleanup/>
    <UseEffectWithIncorrectdependency/>
    <UseEffectFetchData1/> */}
    {/* <UserContext.Provider value={'hello'}>
    <ChannelContext.Provider value={'sddsa'}>
<UseContext1/>
    </ChannelContext.Provider>
    </UserContext.Provider> */}
    </>

  );
}

export default App;
