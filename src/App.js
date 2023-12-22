// // ...................................................Project Code.............................................................
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Project.js/Home';
import Contact from './Project.js/Contact';
import SingleProduct from './Project.js/SingleProduct';
import About from './Project.js/About';
import Product from './Project.js/Product';
import ErrorPage from './Project.js/ErrorPage';
import Cart from './Project.js/Cart';
import Nav from './Project.js/Nav';
import './index.css';
import Login from './Project.js/Login';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/product' component={Product} />
        <Route path='/about' component={About} />
        <Route path='/singleProduct' component={SingleProduct} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Cart} />
        <Route path='/login' component={Login} />
        <Route path='/nav' element={Nav} />
        <Route path='/*' component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;



















































































































































































































// // import React, { useState } from 'react'
// // import 'bootstrap/dist/css/bootstrap.min.css'; 
// // import Demo from './Component.js/Demo';
// // import Poster from './Component.js/Demo';
// // const App = () => {
  
// //   // use of hooks 
// //   const[count,setCount] = useState(" ");
// //   const[data, save] = useState([]);

// //   const inputevent = (event) => {
// //     console.log(event.target.value);
// //     setCount(event.target.value);  
  
// //   }

// //   const inputdata = () => {
// //      save([...data,count]);
// //     setCount('');

// //   }
// //   return (
// //     <>

// //     <div className="container-fluid my-5">
// //       <div className= "row">
// //         <div className='col-sm-6 mx-auto shadow-lg'>
// //           <h1>add the all items</h1>

// //            <div className= "row">
// //             <div className= "col-9">
// //               <input type="text"  onChange={inputevent}placeholder="Enter the items" className='form-control' value={count}/>
// //             </div>
// //              <div className= "col-2">
// //               <button type= "text" className="btn btn-warning font-weight-bold" onClick={inputdata}>Add</button>
// //              </div>
// //               <div className= "container-fluid">
                
// //                   <ul class="list-unstyled row m-5">
// //                     <li>{data} <span><i class="fa-solid fa-trash"></i></span></li>

// //                   </ul>
                
// //               </div>
// //           </div> 
// // {/* //         </div>
// // //       </div>
// // //     </div>
// //      */}   
// // //     </>
// // //   )
// // // }
// // // export default  App;







// // // project work full complete....


// // // import React, { useState } from 'react';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // //  import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// // // const App = () => {
// // //   const [count, setCount] = useState('');
// // //   const [data, setData] = useState([]);

// // //   const inputEvent = (event) => {
// // //     setCount(event.target.value);
// // //   };

// // //   const addData = () => {
// // //     if (count) {
// // //       setData([...data, count]);
// // //       setCount('');
// // //     }
// // //   };

// // //   const deleteItem = (index) => {
// // //     const newData = [...data];
// // //     newData.splice(index, 1);
// // //     setData(newData);
// // //   };

// // //   return (
// // //     <>
// // //       <div className="container-fluid my-5">
// // //         <div className="row">
// // //           <div className='col-sm-6 mx-auto shadow-lg p-4'>
// // //             <h1>Add All Items</h1>
// // //             <div className="row">
// // //               <div className="col-9">
// // //                 <input 
// // //                   type="text" 
// // //                   onChange={inputEvent} 
// // //                   placeholder="Enter the items" 
// // //                   className='form-control' 
// // //                   value={count}
// // //                 />
// // //               </div>
// // //               <div className="col-2">
// // //                 <button 
// // //                   type="button" 
// // //                   className="btn btn-warning font-weight-bold" 
// // //                   onClick={addData}
// // //                 >
// // //                   Add
// // //                 </button>
// // //               </div>
// // //             </div>
// // //             <div className="container-fluid mt-4">
// // //               <ul className="list-unstyled">
// // //                 {data.map((item, index) => (
// // //                   <li key={index}>
// // //                     {item} 
// // //                     <button 
// // //                       className="btn btn-danger btn-sm ml-2"
// // //                       onClick={() => deleteItem(index)}
// // //                     >
// // //                      <FontAwesomeIcon icon={faTrashCan} />
// // //                     </button>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default App;




// // //Dark mode Project


// // import React, { useState } from 'react';
// // import { createTheme, ThemeProvider, CssBaseline, Button } from '@mui/material';
// // import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// // import {faMoon} from '@fortawesome/free-solid-svg-icons';

// // function App() {
// //   const [darkMode, setDarkMode] = useState(false);

// //   const toggleTheme = () => {
// //     setDarkMode(!darkMode);
// //   };

// //   const theme = createTheme({
// //     palette: {
// //       mode: 
// //       darkMode ? 'dark' : 'light',
// //     },
// //   });

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <CssBaseline />
// //       <div style={{ textAlign: 'center', marginTop: '50px' }}>
// //         <Button variant="contained" onClick={toggleTheme}>
// //           DarkMode
// //         <FontAwesomeIcon icon={faMoon} />
// //         </Button>
// //       </div>
// //     </ThemeProvider>
// //   );
// // }

// // export default App;




// // // New project Create

// // import React from 'react';
// // import { Route, Switch } from 'react-router-dom';
// // import Demo from './Component.js/Demo';
// // import Oppo from './Component.js/Oppo';
// // import Menu from './Component.js/Menu';

// // const App = () => {

// //   const error = () => {
// //     return (
// //       <h1>Error</h1>
// //     )
// //   }


// //   return (
// //     <>
// //        <Switch>
// //         <Route  exact path="/" component={Demo} />
// //         <Route exact path="/oppo" component ={Oppo}/>
// //         <Route path='/Name' component = {error}/>
// //         <Route path = '/menu' component= {Menu}/>
        
        
// //       </Switch> 
    
      
    


// //       {/* <Demo></Demo>
// //       <Oppo></Oppo> */}
// //     </>
// //   );
// // };

// // export default App;























