import {
  HelpCircle,
  Notebook,
  Mail,
  MessageCircle,
  Home,
  Users,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react";
import { FaCube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  { key: "dashboard", label: "Dashboard", icon: Home },
  { key: "usermanagement", label: "User", icon: Users },
  { key: "analytics", label: "Analytics", icon: BarChart2 },
  { key: "leads", label: "Leads", icon: Mail },
  { key: "subscription", label: "Reports", icon: Notebook },
  { key: "builder", label: "Messages", icon: MessageCircle },
  { key: "settings", label: "Setting", icon: Settings },
  { key: "support", label: "Support", icon: HelpCircle },
];

export default function Sidebar({ active }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);


  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
        />
      )}

      <aside
        className={`
          bg-black text-white h-screen
          px-3 py-6 flex flex-col justify-between
          transition-all duration-300 z-50

          /* Desktop */
          sm:sticky sm:top-0
          ${isOpen ? "sm:w-46" : "sm:w-18"}

          /* Mobile Overlay Sidebar */
          fixed sm:static top-0 left-0
          ${isOpen ? "w-64" : "w-18"}
        `}
      >
        <div className="space-y-6">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[linear-gradient(135deg,_#82AFFF_0%,_#B8A4F9_70.71%)]
            w-10 h-10 rounded-md flex items-center justify-center
            mx-auto sm:mx-2 shadow-md cursor-pointer"
          >
            <FaCube />
          </div>

          <nav className="space-y-1">
            {menuItems.map(({ key, label, icon: Icon }) => {
              const isActive = active === key;

              return (
                <div
                  key={key}
                  onClick={() => {
                    navigate(`/${key}`);
                  }}
                  className={`flex items-center gap-4 px-2 py-2 rounded-lg cursor-pointer
                    transition-all duration-200
                    ${isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                    }`}
                >
                  <div
                    className={`p-2 rounded-md flex items-center justify-center
                      ${isActive
                        ? "bg-[linear-gradient(45deg,_rgba(130,175,255,0.25)_40%,_rgba(184,164,249,0.25)_120%)] shadow-[0_0_18px_#82AFFF88]"
                        : ""
                      }`}
                  >
                    <Icon size={18} />
                  </div>

                  {isOpen && (
                    <span className="text-sm font-medium">
                      {label}
                    </span>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4 px-2 py-2 text-gray-400 hover:text-white cursor-pointer transition">
            <div className="p-2 rounded-md">
              <LogOut size={18} />
            </div>
            {isOpen && <span className="text-sm">Log Out</span>}
          </div>

          <div className="flex items-center gap-4 px-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-8 h-8 rounded-full object-cover border border-[#82AFFF]"
            />
            {isOpen && (
              <span onClick={() => navigate("/adminprofile")} className="text-sm text-gray-300">
                Profile
              </span>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}