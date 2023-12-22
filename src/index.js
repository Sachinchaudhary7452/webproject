// ...........................Project Code Ecommerce Website Folder Project.js..................................................................
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './Project.js/Productcontext';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.Fragment>
);





 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //......................................................... Old code................................................
//  import React from 'react';
//   import ReactDOM from 'react-dom';
//   import { BrowserRouter } from 'react-router-dom';
//  // import './App.css';
//   import './index.css';
//   import App from './App';
  
// //  import Poster from './Poster';
// // //import Due from './Due';
// // import ComA from './ComA';
// // import Auraiya from './Auraiya';
// //import Yadav from './Yadav';
// //import Chaudhary from './Chaudhary';
//  //import Demo from './Demo';
//  //import Practise from './Practise';
//   ReactDOM.render(
//  <React.Fragment>
 
//   {/* <Yadav></Yadav>  */}
//   {/* <Chaudhary></Chaudhary> */}
//    {/* <Demo></Demo>   */}
//         {/* <Practise></Practise>     */} 
//         {/* <Due></Due> */}
//         {/* <ComA></ComA> */}
//   {/* //   <Auraiya></Auraiya> */}
//     {/* //  
//             <Poster></Poster> */}
//    <BrowserRouter>
//       <App></App>
//     </BrowserRouter> 
//      </React.Fragment>
//      , document.getElementById('root')); 



