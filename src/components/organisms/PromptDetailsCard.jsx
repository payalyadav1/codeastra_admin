import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { MdCheckCircle } from "react-icons/md";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";

export default function PromptDetailsCard() {
  return (
    <div className="flex justify-center p-4 sm:p-6 -mt-2">
      <Card className="w-full h-170 max-w-md rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl -mt-2 font-semibold">
            Prompt Details
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          
          <div className="space-y-2">
            <Label className='text-md'>Prompt ID</Label>
            <Input className='bg-[#f9fafb] border-none rounded-sm text-center' value="#PR-2025-1105-042" readOnly />
          </div>

          
          <div className="space-y-2">
            <Label className='text-md'>Category</Label>
            <Select  defaultValue="uiux">
              <SelectTrigger className='w-57'>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uiux">UI/UX Design</SelectItem>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
              </SelectContent>
            </Select>
          </div>

          
          <div className="space-y-2">
            <Label className='text-md'>Status</Label>
            <div className="flex items-center gap-2 ml-20  font-medium">
              <MdCheckCircle className="h-4 w-4 text-[#15803d]" />
              Completed
            </div>
          </div>

        
          <div className="space-y-2">
            <Label className='text-md'>Admin Notes</Label>
            <Textarea className='h-25' placeholder="Add internal notes..." />
          </div>

     
          <div className="space-y-3">
            <Label className='text-md'>Flag Options</Label>

            <div className="flex items-center gap-2">
              <Checkbox id="lowQuality" />
              <Label htmlFor="lowQuality">Low Quality</Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="needsReview" />
              <Label htmlFor="needsReview">Needs Review</Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="followUp" />
              <Label htmlFor="followUp">Requires Follow-up</Label>
            </div>
          </div>

        
          <Button className="w-full h-10 rounded-md">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
