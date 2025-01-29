import PublicSidebar from "@/components/PublicSidebar";
import { User } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="flex h-screen">
        <PublicSidebar />
        <div className="flex-1 h-full px-2 overflow-hidden">
          <div className="flex justify-between items-center h-28 py-4 px-7 rounded-md">
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <User className="mr-2 h-6 w-6 text-black" />
                <span>Dashboard</span>
              </h2>
              <div className="text-black ml-4">Dashboard</div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 py-7 px-7 h-[calc(100vh-112px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md px-4 py-3 mx-auto">
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-base">
                    Content Creator Dashboard
                  </h1>
                  <button className="w-24 h-10 rounded-md border border-borderColor1">
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
