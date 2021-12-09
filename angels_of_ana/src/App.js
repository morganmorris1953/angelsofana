import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@stripe/stripe-js';

// // components
import AppNav from './components/AppNav.js';
import HomePage from './pages/HomePage.js';
import Login from './pages/Login.js';
import Shop from './pages/Shop.js';
import Charities from './pages/Charities.js';
import Cart from './pages/Cart.js'
import {loadStripe} from '@stripe/stripe-js';



function App() {
  const stripe = loadStripe('pk_test_51K3gRwB9NwtY2gLjBpnSruJs15ObuDDNbWTpc8NY9LQk9TUpcQJRIckpgIzzCMvNyhFDnuJQUenip1PKJHOzAe1h00eYXUwmUc');
  const [searchQuery, setSearchQuery] = useState(null);
  return (
        <div className='main' style={{backgroundImage: "linear-gradient(to right, #000000, #DA291C, #00843D)", minHeight: "100vh", color: "white", display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 'calc(10px + 2vmin'}}>
          
          <BrowserRouter>
          {/* <FilterContext.Provider value={filterWord}/> */}
            <AppNav setSearchQuery={setSearchQuery} />
            <Routes>
              <Route exact path="/" element={ <HomePage /> } />
              <Route exact path="/pages/shop" element={ <Shop /> } />
              <Route exact path='/pages/cart' element={<Cart />} />
              <Route exact path="/pages/charities" element={ <Charities /> } />
              <Route exact path='/login' element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      );
}

export default App;








// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css'
// import { useState} from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // components
// import AppNav from './components/AppNav/AppNav.js';
// import HomePage from './pages/HomePage.js';
// import ArticlePage from './pages/ArticlePage.js';
// import SectionPage from './pages/SectionPage.js';
// import CreateArticlePage from './pages/CreateArticlePage';
// import Login from './pages/Login';

// //context
// // import FilterContext from "./contexts/FilterContext"

// function App() {
//   const [searchQuery, setSearchQuery] = useState(null);
//   // const [filterWord, setFilterWord] = useState("")
//   // render
//   return (
//     <div>
      
//       <BrowserRouter>
//       {/* <FilterContext.Provider value={filterWord}/> */}
//         <AppNav setSearchQuery={setSearchQuery} />
//         <Routes>
//           <Route exact path="/" element={ <HomePage searchQuery={searchQuery} /> } />
//           <Route exact path="/articles/:articleID" element={ <ArticlePage /> } />
//           <Route exact path="/sections/:sectionName" element={<SectionPage searchQuery={searchQuery}/>} />
//           <Route exact path="/articles/new" element={ <CreateArticlePage /> } />
//           <Route exact path='/login' element={<Login />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
