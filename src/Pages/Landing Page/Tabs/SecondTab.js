import React from "react";
import "./Tabs.css";

function SecondTab() {
  return (
    <div className="txt-size">
      <ul>
        <li>
          <p>
            Once our proposed solution fits the client and we have enough data
            for a detailed estimation, we create a scope estimation that
            includes a timeline with iterations, acceptance criteria, deadlines,
            etc.
          </p>
        </li>
        <li>
          <p>
            These details regarding the stages of the development process, the
            quality of software pieces, and deadlines give the client a better
            understanding of the product creation process. At this stage, the
            client can give us their additional concerns and expectations
            regarding the development process and the final result so we can use
            them in the detailed analysis
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SecondTab;
