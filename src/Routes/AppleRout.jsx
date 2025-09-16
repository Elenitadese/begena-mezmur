import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "../Component/SharedLayout";
import All from "../Component/Main/all";
import Alert from "../Component/Main/Alert";
import AppleYoutube from "../Component/Appleyoutube/AppleYoutube";
import For04 from "../Component/Main/For04";

import M1 from "../Component/Mezmurs/M1/M1";
import M2 from "../Component/Mezmurs/M2/M2";

import M3 from "../Component/Mezmurs/M3/M3";
import M4 from "../Component/Mezmurs/M4/M4";
import M5 from "../Component/Mezmurs/M5/M5";
import M6 from "../Component/Mezmurs/M6/M6";
import M7 from "../Component/Mezmurs/M7/M7";
import M8 from "../Component/Mezmurs/M8/M8";
import M9 from "../Component/Mezmurs/M9/M9";
import M10 from "../Component/Mezmurs/M10/M10";
import M11 from "../Component/Mezmurs/M11/M11";
import M12 from "../Component/Mezmurs/M12/M12";
import M13 from "../Component/Mezmurs/M13/M13";


const AppleRout = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route path="" element={<All />}> */}
        {/* <Route path="/Logo" element={<Alert />} /> */}
        <Route path="/logo" element={<All />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/m1" element={<M1 />} />
        <Route path="/m2" element={<M2 />} />
        <Route path="/m3" element={<M3 />} />
        <Route path="/m4" element={<M4 />} />
        <Route path="/m5" element={<M5 />} />
        <Route path="/m6" element={<M6 />} />
        <Route path="/m7" element={<M7 />} />
        <Route path="/m8" element={<M8 />} />
        <Route path="/m9" element={<M9 />} />
        <Route path="/m10" element={<M10 />} />
        <Route path="/m11" element={<M11 />} />
        <Route path="/m12" element={<M12 />} />
        <Route path="/m13" element={<M13 />} />
        {/* <Route path="/m14" element={<M14 />} /> */}

        {/* <Route path="/applevideo" element={<AppleYoutube />} /> */}
        <Route path="*" element={<For04 />} />
      </Route>
    </Routes>
  );
};

export default AppleRout;

