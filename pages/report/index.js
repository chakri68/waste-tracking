import { useState } from "react";
import ReportForm from "../../components/ReportForm";
import Form from "../../components/Form";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export default function Report() {
  let [success, setSuccess] = useState(false);
  let [reportData, setReportData] = useState(null);
  const [Display, setDisplay] = useState(true);

  return (
    <>
      <Form
        submitCallback={(data) => {
          setSuccess(true);
          setReportData(data);
        }}
      />
      {/* <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => {
          setDisplay(true);
        }}
      /> */}
      <Dialog
        className="mt-3"
        visible={Display}
        style={{ width: "60vw", height: "90vh" }}
        onHide={() => {
          setDisplay(false);
        }}
      >
        <ReportForm />
      </Dialog>

      {success ? <ReportForm reportData={reportData} /> : ""}
    </>
  );
}
