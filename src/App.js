import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";

import { AuthProvider } from "./context/AuthContext";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobList from './pages/JobList';
import { JobDetails } from './pages/JobDetails';
import AddJob from './pages/AddJob';
import RegisterAdmin from './pages/RegisterAdmin'
import RegisterCompanyAdmin from './pages/RegisterCompanyAdmin'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<PrivateRoutes />}>
              <Route path="/jobs-list" element={<JobList />} exact />
              <Route path="/job/details/:id" element={<JobDetails />} exact />
              <Route path="/job/add" element={<AddJob />} exact />

              <Route path="/register/admin" element={<RegisterAdmin />} exact />
              <Route path="/register/company-admin" element={<RegisterCompanyAdmin />} exact />
            </Route>

          </Routes>

        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
