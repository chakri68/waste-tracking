import { useState } from "react";
import ReportForm from "../../components/ReportForm";
import Form from "../../components/Form";

export default function Report() {
  let [success, setSuccess] = useState(false);
  return (
    <>
      <Form />
      {success ? <ReportForm /> : ""}
    </>
  );
}
