import React from 'react'
import "../M1/M1.css";
const M5 = () => {
  return (
    <>
      <div className="mezmur-page">
        <h1 className="mezmur-title"> 5.መስቀልከ</h1>

        <div className="mezmur-columns">
          <div className="mezmur-column">
            {`
          መስቀልከ ይኩነነ ቤዛ/2/
ይኩነነ/4/ መስቀልከ ይኩነነ ቤዛ
fannoon kee nuuf haa ta'u jabinaa/2/
nuuf haa ta'u jabinaa/4/fannoon kee nuuf haa ta'u jabina/2/
ፈንኖ ኬ ኑፍ ሀተኡ ጀቢና/2/
ኑፍ ሀተኡ ጀቢና/4/ፈኖን ኬ ኑፍ ሀተኡ ጀቢና/2/
 
            `}
          </div>
        </div>

        <div className="mezmur-numbers">
          {`24 24 242 31-4 455-5
31-4 4445 42-3 4-222-2
31-4-444-5 55-4-1-555-5
35-4-2-4-22-222 2`}
        </div>
      </div>
    </>
  );
}

export default M5