import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import OrgMain from "../../components/Organizer/OrgMain";

export default function AdminIndex() {
  const session = useSession();
  if (
    !(session.status === "authenticated" && session.data.user?.role === "admin")
  ) {
    return <p>Access Denied! Please login as admin.</p>;
  }
  return <OrgMain />;
}
