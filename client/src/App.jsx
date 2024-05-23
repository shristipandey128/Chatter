import React,{Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoaders } from './components/Layout/Loaders';
// import { Dashboard } from '@mui/icons-material';
// import AdminLogin from './pages/admin/AdminLogin';


const Home=lazy(()=> import("./pages/Home"));
const Login=lazy(()=> import("./pages/Login"));
const Chat=lazy(()=> import("./pages/Chat"));
const Groups=lazy(()=> import("./pages/Groups"));
const Notfound=lazy(()=> import("./pages/Notfound"));

const AdminLogin=lazy(()=> import("./pages/admin/AdminLogin"))
const UserManagement=lazy(()=> import("./pages/admin/UserManagement"))
const ChatManagement=lazy(()=> import("./pages/admin/ChatManagement"))
const MessageManagement=lazy(()=> import("./pages/admin/MessageManagement"))
const Dashboard=lazy(()=> import("./pages/admin/dashboard"))

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
<Route path='/admin' element={<AdminLogin/>}/>
    <Route path="/admin/dashboard" element={<Dashboard/>}/>
    <Route path="/admin/users" element={<UserManagement/>}  />
      <Route path="/admin/chats" element={<ChatManagement/>}  /> 
      <Route path="/admin/messages" element={<MessageManagement/>}  />
      {/* <Route  path="*" element={<NotFound/>}   /> */}
    
    
  </Routes >
  </Suspense>
  </BrowserRouter>
  );
}

export default App;