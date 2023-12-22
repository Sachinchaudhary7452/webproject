import React, { useState } from "react";
//import AccountBoxIcon from '@mui/icons-material/AccountBox';



const Chaudhary = () => {
     const[itms,input] = useState(0);

     const additem = () => {
        input(itms + 1);
     };

     const additem1 = () => {
        input(itms -1);
     }
    return (
        <React.Fragment>
        <h1>Solving the increment or dercrement</h1>

        <h1>{itms}</h1>
        <div className="main_div">
        <button className="sc" onClick={additem} AccountBoxIcon>increment</button>
        <button className="pc" onClick={additem1}>dercrement</button>
        </div>
        </React.Fragment>

    );

};



export default Chaudhary;





