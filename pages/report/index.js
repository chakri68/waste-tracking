import { useState } from "react";
import ReportForm from "../../components/ReportForm";
import Form from "../../components/Form";

export default function Report() {
  let [success, setSuccess] = useState(false);
  let [reportData, setReportData] = useState(null);
  return (
    <>
      <Form
        submitCallback={(data) => {
          setSuccess(true);
          setReportData(data);
        }}
      />
      {success ? <ReportForm reportData={reportData} /> : ""}
    </>
  );
}
