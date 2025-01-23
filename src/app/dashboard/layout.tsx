import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-100">{children}</main>
            </div>

        </>
    )
}