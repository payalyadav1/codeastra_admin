import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FaUser, FaShieldAlt, FaKey } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export default function AdminProfileDetails() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-7">

      <Card className="p-4 sm:p-5 md:p-6">
        <h2 className="mb-4 flex items-center gap-2 font-semibold text-lg sm:text-xl">
          <FaUser className="text-base" />
          Personal Information
        </h2>

        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base font-medium">
          {[
            ["Full Name", "John Anderson"],
            ["Email Address", "john.anderson@codeastra.com"],
            ["Phone Number", "+1 (555) 123-4567"],
            ["Role", "Super Admin"],
            ["Last Login", "Jan 15, 2024 at 2:30 PM"],
            ["Account Created", "March 10, 2023"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b py-3 gap-1"
            >
              <span className="text-muted-foreground">{label}</span>
              <span className="break-all">{value}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 sm:p-5 md:p-6 font-medium">
        <h2 className="mb-4 flex items-center gap-2 font-semibold text-lg sm:text-xl">
          <FaShieldAlt className="text-base" />
          Security Settings
        </h2>

        <div className="space-y-5 text-sm sm:text-base">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p>Change Password</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Update your password regularly
              </p>
            </div>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              Change
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p>Two-Factor Authentication</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Add an extra layer of security
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p>Last Device</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                MacBook Pro · Chrome Browser
              </p>
            </div>
            <span className="text-xs sm:text-sm text-green-600 font-medium">
              Current
            </span>
          </div>

          <Button
            variant="outline"
            className="w-full sm:w-auto border-red-300 text-red-500 hover:bg-red-50"
          >
            Logout from All Devices
          </Button>
        </div>
      </Card>

      <Card className="p-4 sm:p-5 md:p-6">
        <h2 className="mb-4 flex items-center gap-2 font-semibold text-lg sm:text-xl">
          <FaKey className="text-base" />
          Permissions & Access
        </h2>

        <p className="font-semibold text-base sm:text-lg">Admin Role Type</p>
        <p className="font-semibold text-base sm:text-lg mt-4">Module Access</p>

        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base mt-2">
          {[
            ["Dashboard", "Full Access", "text-green-600"],
            ["Users", "Full Access", "text-green-600"],
            ["Plans", "Read/Write", "text-blue-500"],
            ["Transactions", "Read Only", "text-amber-600"],
            ["Settings", "Full Access", "text-green-600"],
          ].map(([label, value, color]) => (
            <div key={label} className="flex justify-between">
              <span>{label}</span>
              <span className={color}>{value}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 sm:p-5 md:p-6">
        <h2 className="mb-4 flex items-center gap-2 font-semibold text-lg sm:text-xl">
          <HiAdjustmentsHorizontal />
          Preferences
        </h2>

        <div className="space-y-5 text-sm sm:text-base font-medium">

          <div>
            <p className="mb-1">Language</p>
            <Select defaultValue="en">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English (US)</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="mb-1">Timezone</p>
            <Select defaultValue="pst">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pst">UTC-8 (Pacific Time)</SelectItem>
                <SelectItem value="cet">Central European Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="font-semibold mt-3">Notification Preferences</p>

          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <span>System Alerts</span>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

    </div>
  );
}