import { useSession } from "next-auth/react";
import OrgReports from "../../components/Organizer/OrgReports";

export default function AdminDashboard() {
  const session = useSession();
  if (
    !(session.status === "authenticated" && session.data.user?.role === "admin")
  ) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="../Denied.jpg"
          style={{ height: "80Vh", width: "45vw", marginTop: "100px" }}
        />
      </div>
    );
  }
  return (
    <>
      <OrgReports />
    </>
  );
}
