import React from 'react';
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AllRecipes from "./pages/AllRecipes";
import AllReports from "./pages/AllReports"
import Category from "./pages/Category"
import CreateCategory from "./pages/CreateCategory";
import CreateRecipe from './pages/CreateRecipe';
import CreateReport from './pages/CreateReport';
import DoReport from "./pages/DoReport";
import Main from "./pages/Main";
import Login from "./pages/Login";
import RecipeByID from "./pages/RecipeByID";
import Registration from "./pages/Registration";
import UpdateRecipe from "./pages/UpdateRecipe";
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container main">
        <Routes>
          <Route path="/all-recipes" element={<AllRecipes/>} />
          <Route path="/all-reports" element={<AllReports/>} />
          <Route path="/categories" element={<Category/>} />
          <Route path="/create-category" element={<CreateCategory/>} />
          <Route path="/create-recipe" element={<CreateRecipe/>} />
          <Route path="/create-report" element={<CreateReport/>} />
          <Route path="/do-report" element={<DoReport/>} />
          <Route path="/" element={<Main/>} />
          <Route path="api/user/login" element={<Login/>} />
          <Route path="/recipe-by-id" element={<RecipeByID/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/update-recipe" element={<UpdateRecipe/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
