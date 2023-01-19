import { useSession } from "next-auth/react";
import OrgReports from "../../components/Organizer/OrgReports";

export default function AdminDashboard() {
  const session = useSession();
  if (
    !(session.status === "authenticated" && session.data.user?.role === "admin")
  ) {
    return <p>Access Denied! Please login as admin.</p>;
  }
  return (
    <>
      <OrgReports />
    </>
  );
}
