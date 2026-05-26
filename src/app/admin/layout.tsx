export const dynamic = "force-dynamic";

import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin-sidebar";

const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const apiRoot = apiBase.replace(/\/$/, "")

async function fetchAdminUser(token: string) {
  try {
    const res = await fetch(`${apiRoot}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.warn("Unable to validate admin token", error);
    return null;
  }
}

async function getPendingCount(token: string) {
  try {
    const res = await fetch(`${apiRoot}/api/members`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    const members = await res.json();
    return Array.isArray(members) ? members.filter((member: any) => !member.is_approved).length : 0;
  } catch (error) {
    console.warn("Unable to fetch pending approvals", error);
    return 0;
  }
}

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const token = (await cookies()).get("alm_auth_token")?.value;

  if (!token) {
    redirect("/admin/login");
  }

  const user = await fetchAdminUser(token);
  if (!user || user.role !== "admin") {
    redirect("/admin/login");
  }

  const pendingApprovals = await getPendingCount(token);

  return (
    <div className="min-h-screen bg-[#f4f4f7] text-[#1a2744]">
      <div className="grid min-h-screen grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
        <AdminSidebar pendingApprovals={pendingApprovals} />
        <div className="px-6 py-8 lg:px-10">{children}</div>
      </div>
    </div>
  );
}
