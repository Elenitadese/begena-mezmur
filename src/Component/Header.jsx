// import React from 'react'

// const Header = () => {
//   return (

//     <ul>
//       <li>
//         <a href="/">Home</a>
//       </li>
//       <li>
//         <a href="/about">About</a>
//       </li>
//       <li>
//         <a href="/contact">Contact</a>
//       </li>
//     </ul>
    
//   );
// }

// export default Header


//but it stell render again so for user exeperiance we modify as below using link without page relod 


import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Header;
