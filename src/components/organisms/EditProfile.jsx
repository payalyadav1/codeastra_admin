import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Separator } from "../ui/separator"
import {
  Lock,
  ShieldCheck,
  Camera,
} from "lucide-react"
import '../../App.css'
import { MdCheckCircle } from "react-icons/md";
import { useState } from "react"
import { useRef } from "react"


export default function EditProfile({ open, setOpen }) {
  const [preview, setPreview] = useState(null)
  const fileInputRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const imageUrl = URL.createObjectURL(file)
    setPreview(imageUrl)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent className="w-[95vw] max-w-md rounded-xl p-0  max-h-[90vh]  overflow-y-auto no-scrollbar">
        <DialogHeader className="px-6 pt-6 border-b pb-4">
          <DialogTitle className="text-xl font-semibold">
            Edit Profile
          </DialogTitle>
          <p className="text-md text-muted-foreground">
            Update your personal and account information
          </p>
        </DialogHeader>
 <div className="px-6 pb-6 space-y-6">

          {/* IMAGE UPLOAD */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative h-24 w-24 rounded-full border flex items-center justify-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <Camera className="h-5 w-5 text-muted-foreground" />
              )}
            </div>

            {/* hidden input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />

            <button
              type="button"
              className="text-sm font-medium text-primary"
              onClick={() => fileInputRef.current.click()}
            >
              Change photo
            </button>

            <p className="text-xs text-muted-foreground">
              JPG or PNG, max 2MB
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input className='h-10' defaultValue="Marcus Anderson" />
            </div>

            <div className="space-y-2 mt-6">
              <Label>Email Address</Label>
              <Input className='h-10'
                defaultValue="marcus.anderson@codestra.com"
                disabled
              />
              <p className="text-xs text-muted-foreground">
                Email cannot be changed. Contact support for assistance.
              </p>
            </div>

            <div className="space-y-2 mt-6">
              <Label>Phone Number</Label>
              <Input defaultValue="+1 (555) 123-4567" />
            </div>

            <div className="space-y-2 mt-6">
              <Label>Role</Label>
              <Input className='h-10' defaultValue="Super Admin" />
            </div>

            <div className="space-y-2 mt-6">
              <Label>Timezone</Label>
              <Select defaultValue="pst">
                <SelectTrigger className='h-10 w-full'>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pst">
                    Pacific Time (PT) - UTC-8
                  </SelectItem>
                  <SelectItem value="est">
                    Eastern Time (ET) - UTC-5
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Language</Label>
              <Select defaultValue="en">
                <SelectTrigger className='h-10 w-full'>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <p className="text-md font-semibold">Security Settings</p>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-muted-foreground" />
                <span>Password</span>
              </div>
              <Button variant="ghost" size="sm">
                Change
              </Button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span>Two-Factor Authentication</span>
                
              </div>
             
            </div>
            <div className="flex gap-2 ml-5 ">
              <MdCheckCircle className="text-green-600 " />
             <span className="text-green-600 text-xs font-medium">
                Enabled
              </span> 
            </div>

            <Button variant="outline" className="w-full mt-3 h-10 text-md">
              Manage Security Settings
            </Button>
          </div>

        
        </div>
          <div className="flex items-center justify-around   bg-[#f9fafb] border-t h-20 w-full">
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button  onClick={() => setOpen(false)}>Save Changes</Button>
          </div>
      </DialogContent>
    </Dialog>
  )
}

