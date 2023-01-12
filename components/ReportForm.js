import React, { useState } from "react";
import { Button } from "primereact/button";
import { Accordion, AccordionTab } from "primereact/accordion";

const ReportForm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClick = (itemIndex) => {
    let _activeIndex = activeIndex ? [...activeIndex] : [];

    if (_activeIndex.length === 0) {
      _activeIndex.push(itemIndex);
    } else {
      const index = _activeIndex.indexOf(itemIndex);
      if (index === -1) {
        _activeIndex.push(itemIndex);
      } else {
        _activeIndex.splice(index, 1);
      }
    }

    setActiveIndex(_activeIndex);
  };

  return (
    <div>
      <div className="surface-0 text-700 text-center">
        <div className="text-blue-600 font-bold mb-3">
          <img src="./sucess.gif" style={{ height: "350px" }} />
        </div>
        <div className="text-900 font-bold text-5xl mb-3">
          Thanks for filling the Form
        </div>
        <div className="text-700 text-2xl mb-5">Need Immidiate action?</div>
        <Button
          label="Mail"
          icon="pi pi-send"
          className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
        />
        <br />
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Accordion activeIndex={0} style={{ width: "60vw" }}>
            <AccordionTab
              header={
                <React.Fragment>
                  <i className="pi pi-info"></i>
                  <span style={{ marginLeft: "20px" }}>Know More</span>
                </React.Fragment>
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ReportForm;
