import React, { useState } from "react";
import { Button } from "primereact/button";
import { Accordion, AccordionTab } from "primereact/accordion";
import NavBar from "./NavBar";

const ReportForm = ({ reportData }) => {
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
      <div className="surface-0 text-700 text-center  pt-0">
        <div className="text-blue-600 font-bold mb-0">
          <img src="./sucess.gif" style={{ height: "320px" }} />
        </div>
        <div className="text-900 font-bold text-5xl mb-2">
          Thanks for filling the Form
        </div>
        <div className="text-700 text-2xl mb-3">Need Immidiate action?</div>
        <Button
          label="Mail"
          icon="pi pi-send"
          className="font-bold px-5 mb-3 py-3 p-button-raised p-button-rounded white-space-nowrap"
        />
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
                By clicking the button above, you will be redirected to the
                Gmail application and an email will be automatically generated
                with all the details mentioned in the previous form.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
