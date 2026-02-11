import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { Switch } from "../ui/switch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { Separator } from "../ui/separator"
import { X } from "lucide-react"
import '../../App.css'
import { Check } from "lucide-react"
import { FaStar } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";


export default function SubscriptionPlanDialog({ open, setOpen }) {
    const [features, setFeatures] = useState([
        "Unlimited AI Tools",
        "24/7 Support",
        "50GB Storage",
    ])

    const [newFeature, setNewFeature] = useState("")

    const addFeature = () => {
        if (!newFeature.trim()) return
        setFeatures((prev) => [...prev, newFeature])
        setNewFeature("")
    }

    const removeFeature = (index) => {
        setFeatures((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="!max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-md">
                <DialogHeader className="border-b -mx-6  pb-4 mb-4 ">
                    <DialogTitle className="text-xl font-bold ml-5">
                        Add New Subscription Plan
                    </DialogTitle>

                    <p className="text-sm -mt-2 text-gray-400 ml-5">
                        Create and configure a new pricing plan for users.
                    </p>
                </DialogHeader>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Basic Plan Information</h3>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <Label className='text-md'>Plan Name</Label>
                                <Input className='mt-2 h-10' placeholder="e.g., Professional Plan" />
                            </div>

                            <div>
                                <Label className='text-md'>Plan Type</Label>
                                <Select>
                                    <SelectTrigger className='mt-2 !h-10 w-full' >
                                        <SelectValue placeholder="Basic" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="basic">Basic</SelectItem>
                                        <SelectItem value="pro">Pro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            <div>
                                <Label className='text-md'>Pricing Model</Label>
                                <Select>
                                    <SelectTrigger className='mt-2 h-10 w-full'>
                                        <SelectValue placeholder="Monthly" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="monthly">Monthly</SelectItem>
                                        <SelectItem value="yearly">Yearly</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label className='text-md'>Price Amount</Label>
                                <Input className='mt-2 h-10 w-full' placeholder="₹ 999" />
                            </div>

                            <div>
                                <Label className='text-md'>Billing Cycle</Label>
                                <Select>
                                    <SelectTrigger className='mt-2 h-10 w-full'>
                                        <SelectValue placeholder="Monthly" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="monthly">Monthly</SelectItem>
                                        <SelectItem value="yearly">Yearly</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <Label className='text-md font-semibold'>Status</Label>
                            <div className="flex items-center gap-3">
                                <span className="text-md text-gray-500">Draft</span>
  <Switch
                                    className="
                                               data-[state=checked]:bg-black
                                                data-[state=unchecked]:bg-gray-300
                                                  [&>span]:transition
                                                  data-[state=checked]:[&>span]:bg-gray-300
                                                 data-[state=unchecked]:[&>span]:bg-black
                                                                          " />                                <span className="text-md">Active</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 -mt-4">Set plan as active or draft</p>

                    </div>


                    <div className="space-y-4 !mt-10">
                        <h3 className="font-semibold text-md">Plan Features</h3>

                        <div className="flex gap-2">
                            <Input className='h-10'
                                placeholder="e.g., Unlimited AI Tools"
                                value={newFeature}
                                onChange={(e) => setNewFeature(e.target.value)}
                            />
                            <Button className='h-10 text-md' onClick={addFeature}>Add Feature</Button>
                        </div>

                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border rounded-lg px-3 py-2 bg-[#f9fafb]"
                                >
                                    <div className="flex items-center gap-2">
                                        <Check size={16} className="text-green-600" />
                                        <span>{feature}</span>
                                    </div>

                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeFeature(index)}
                                    >
                                        <X size={16} />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="space-y-4">
                        <h3 className="font-semibold text-md">Usage Limits</h3>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <Label>Max Users</Label>
                                <Input className='h-10 mt-2' placeholder="10" />
                            </div>

                            <div>
                                <Label>Storage Limit (GB)</Label>
                                <Input className='h-10 mt-2' placeholder="50" />
                            </div>
                        </div>



                        <div className="flex items-center justify-between mt-7">
                            <Label className='text-md font-semibold'>API Access</Label>
                            <div className="flex items-center gap-3">
                                <span className="text-md text-gray-500">No</span>
  <Switch
                                    className="
                                               data-[state=checked]:bg-black
                                                data-[state=unchecked]:bg-gray-300
                                                  [&>span]:transition
                                                  data-[state=checked]:[&>span]:bg-gray-300
                                                 data-[state=unchecked]:[&>span]:bg-black
                                                                          " />                                <span className="text-md">Yes</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 -mt-4">Enable API access for this plan</p>

                        <div>
                            <Label className='text-md'>Team Members Limit</Label>
                            <Input className='h-10 mt-2' placeholder="5" />
                        </div>





                        <div className="flex items-center justify-between">
                            <Label className='text-md text-gray-600'>Custom Domain Support</Label>
                            <div className="flex items-center gap-3">
                                <span className="text-md text-gray-500">No</span>
                                <Switch
                                    className="
                                               data-[state=checked]:bg-black
                                                data-[state=unchecked]:bg-gray-300
                                                  [&>span]:transition
                                                  data-[state=checked]:[&>span]:bg-gray-300
                                                 data-[state=unchecked]:[&>span]:bg-black
                                                                          " />
                                <span className="text-md">Yes</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 -mt-1 ">Allow Custom domain mapping</p>


                    </div>


                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Plan Highlight Options</h3>



                        <div className="flex items-start justify-between">

                            <div className="flex items-start gap-3">
                                <FaStar className="text-yellow-500 mt-3 " />

                                <div>
                                    <Label className="text-md text-gray-600">
                                        Mark as Popular
                                    </Label>

                                    <p className="text-sm text-gray-500">
                                        Show star badge on plan card
                                    </p>
                                </div>
                            </div>

  <Switch
                                    className="
                                               data-[state=checked]:bg-black
                                                data-[state=unchecked]:bg-gray-300
                                                  [&>span]:transition
                                                  data-[state=checked]:[&>span]:bg-gray-300
                                                 data-[state=unchecked]:[&>span]:bg-black
                                                                          " />
                        </div>


                        <div className="mt-9 flex items-start justify-between">

                            <div className="flex items-start gap-3">
                                <FaCrown className="text-[#a855f7] mt-3 " />

                                <div>
                                    <Label className="text-md text-gray-600">
                                        Show as Recommended
                                    </Label>

                                    <p className="text-sm text-gray-500">
                                        Display crown badge on plan card
                                    </p>
                                </div>
                            </div>

  <Switch
                                    className="
                                               data-[state=checked]:bg-black
                                                data-[state=unchecked]:bg-gray-300
                                                  [&>span]:transition
                                                  data-[state=checked]:[&>span]:bg-gray-300
                                                 data-[state=unchecked]:[&>span]:bg-black
                                                                          " />
                        </div>

                        <div>
                            <Label className='text-lg text-gray-600'>Highlight Color</Label>
                            <div className="flex">
                                <Input className='h-10 mt-2 w-30 bg-[#efefef] text-black font-semibold text-center ' defaultValue="#000000" />
                                <p className="text-md text-gray-500 mt-4 ml-5">Choose gradient color for card highlight</p>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-6 border-t pt-6 mt-8 flex items-center justify-between px-6 bg-[#f9fafb] h-20 ">
                        <button
                            onClick={() => setOpen(false)}
                            className="text-gray-600 hover:text-black text-md font-medium"
                        >Cancel</button>

                        <Button className="bg-black hover:bg-gray-900 text-white px-6 h-12 w-35 text-md -mt-2">
                            Create Plan
                        </Button>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}