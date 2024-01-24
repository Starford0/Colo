import React from "react";
import "./beforefooter.css";

const BeforeFooter = () => {
  return (
    <main className="main">
      <div className="model">
        <img
          src="https://themewagon.github.io/coloshop/images/deal_ofthe_week.png"
          alt=""
        />
      </div>
      <div className="auction">
        <div className="week">
          <div className="theweek">
            <h1>Deal Of The Week</h1>
          </div>
          <div className="counter">
            <div>
              <h1>2</h1>
              <h4>Day</h4>
            </div>
            <div>
              <h1>23</h1>
              <h4>Hours</h4>
            </div>
            <div>
              <h1>53</h1>
              <h4>Mins</h4>
            </div>
            <div>
              <h1>01</h1>
              <h4>Sec</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BeforeFooter;
