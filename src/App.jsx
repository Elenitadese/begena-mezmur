import { useState } from "react";
import Header from "./Component/Header";


// apple start here 
import "./App.css";
import "./assets/css/styles.css";
import "./assets/css/bootstrap.css";
import AppleHeader from "./Component/Header/AppleHeader";
;
import Footer from "./Component/Footer/Footer";
import AppleRout from "./Routes/AppleRout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      {/* <Header /> */}
    


      <AppleRout/>


    </>
  );
}

export default App;




// import "./App.css";
// import "./assets/css/styles.css";
// // import './assets/css/bootstrap-5.3.1-dist'
// import "./assets/css/bootstrap.css";

// // import 'bootstrap/dist/css/bootstrap.min.css';

// import Header from "./Components/Header/Header";
// import Alert from "./Components/Main/Alert";
// import Section1 from "./Components/Main/Section1";
// import Section2 from "./Components/Main/Section2";
// import Section3 from "./Components/Main/Section3";
// import Section4 from "./Components/Main/Section4";
// import Section5 from "./Components/Main/Section5";
// import Section6 from "./Components/Main/Section6";
// import Footer from "./Components/Footer/Footer";
// import AppleYoutube from "./Components/Appleyoutube/AppleYoutube";



// function App() {
//   return (
//     <>
//       <Header />
//       <Alert />
//       <Section1 />
//       <Section2 />
//       <Section3 />
//       <Section4 />
//       <Section5 />
//       <Section6 />
//       {/* <AppleYoutube/> */}
//       <Footer />
//     </>
//   );
// }

// export default App;

