import React,{Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoaders } from './components/Layout/Loaders';


const Home=lazy(()=> import("./pages/Home"));
const Login=lazy(()=> import("./pages/Login"));
const Chat=lazy(()=> import("./pages/Chat"));
const Groups=lazy(()=> import("./pages/Groups"));
const Notfound=lazy(()=> import("./pages/Notfound"));
let user=true;


const App=()=> {
  return (
  <BrowserRouter>
  <Suspense fallback={<LayoutLoaders/>}>
  <Routes>
    <Route element={<ProtectRoute user={user}/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/groups" element={<Groups/>}/>
    <Route path="/chat/:chatId" element={<Chat />} />
    </Route>
    <Route path="/login" element={<ProtectRoute user={!user} redirect='/'>
      <Login/>
    </ProtectRoute>}/>

    <Route path="*" element={<Notfound/>}/>
  </Routes>
  </Suspense>
  </BrowserRouter>
  );
}

export default App;