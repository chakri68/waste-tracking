import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import OrgMain from "../../components/Organizer/OrgMain";

export default function AdminIndex() {
  const session = useSession();
  if (
    !(session.status === "authenticated" && session.data.user?.role === "admin")
  ) {
    return (
      <div style={{ backgroundColor: "white" }}>
        <img src="/De.webp" style={{ height: "40Vh" }} />
      </div>
    );
  }
  return <OrgMain />;
}
