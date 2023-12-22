// import React, { useState } from 'react';

// const Practise = () => {
//     // first hooks use
//     const [name, setName] = useState('');
//     const [fullname, setFullname] = useState('');
//     // second hooks use 

//     const[namenew, setNamenew] = useState('');
//     const[fullnamenew,setFullnamenew] = useState('');

//     const onSubmit = (event) => {
//         event.preventDefault();
//         setFullname(name);
//         setFullnamenew(namenew);
//     };

//     const inputEvent = (event) => {
//         console.log(event.target.value);
//         setName(event.target.value);
//     };


//     const inputEvent1 = (Event) => {
//         console.log("new name", Event.target.value );
//         setNamenew(Event.target.value ) ;
//     };

//     return (
//         <React.Fragment>
//             <div className='main_div'>
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <h1>Result {fullname} {fullnamenew}</h1>
//                         <input type="text" placeholder="Enter the Name" onChange={inputEvent} value={name} />
//                         <br></br>
//                         <br></br>

//                         <input type= "text" placeholder=  "Enter the lastNAme" onChange={inputEvent1} value={namenew}/>
//                         <br></br>
//                         <button type="submit">Click me</button>
//                     </div>
//                 </form>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Practise;





//  import React, { useState } from 'react';


// const Practise = () => {
//     // first hooks use
//     const [name, setName] = useState ({ fname: "",lname: ""});

//     // second hooks use 

//     const inputEvent = (event) => {
//         console.log(event.target.value);
//         console.log(event.target.name);


//         const value = event.target.value;
//         const name = event.target.name;

//         setName((preValue) => {

//             if(name === "fname") {
//                 return {
//                     fname: value,
//                     lname:preValue.lname,
//                 };
//             } else if( name === "lname") {
//                 return {
//                     fname:preValue.fname,
//                     lname:value,
//                 };
//             }

//         });
        
//     };

//     const onSubmit = (event) => {
//         event.preventDefault();
//         alert("form submitted");
        
//     };
 
//     return (
//         <React.Fragment>
//             <div className='main_div'>
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <h1>Result {name.fname} {name.lname}</h1>
//                         <input type="text" placeholder="Enter the Name" onChange={inputEvent}  value={name.fname} name="fname" />
//                         <br></br>
//                         <br></br>

//                         <input type= "text" placeholder=  "Enter the lastNAme" onChange={inputEvent} value={name.lname} name="lname"/>
//                         <br></br>
//                         <button type="submit">
//                         Click me</button>
                       
                        
//                     </div>
//                 </form>
//             </div>

//         </React.Fragment>
//     );

// };
// export default Practise;
   



//other topic




