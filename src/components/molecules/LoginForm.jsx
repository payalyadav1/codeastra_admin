import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import code from '../../assets/codeastra1.png'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [password, setPassword] = useState("password123456");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-8 lg:py-0">
      {/* Logo */}
      <div className="mb-8 lg:mb-12">
        <div className="flex items-center gap-1">
        <img src={code} alt="codeastra logo" className="h-20 w-50"/>
        </div>
      </div>

      {/* Login Title */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Login</h1>
        <p className="text-gray-500 text-sm sm:text-base">Login to access your admin account</p>
      </div>

      {/* Form */}
      <div className="space-y-5 max-w-md">
        {/* Email Input */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-600 text-sm">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 border-gray-300 focus:border-gray-400 rounded-lg"
            placeholder="john.doe@gmail.com"
          />
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-600 text-sm">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 border-gray-300 focus:border-gray-400 rounded-lg pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={setRememberMe}
              className="border-gray-300"
            />
            <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
              Remember me
            </Label>
          </div>
          <button className="text-sm text-[#e91e63] hover:underline font-medium">
            Forgot Password
          </button>
        </div>

        {/* Login Button */}
        <Button className="w-full h-12  ] text-white rounded-lg text-base font-medium">
          Login to Dashboard
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-400 text-sm">Or login with</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-3 gap-3">
          {/* Facebook */}
          <Button
            variant="outline"
            className="h-12 border-black  rounded-lg"
          >
            <FaFacebook/>
          </Button>
          
          {/* Google */}
          <Button
            variant="outline"
            className="h-12 border-black  rounded-lg"
          >
           <FcGoogle />
          </Button>
          
          {/* Apple */}
          <Button
            variant="outline"
            className="h-12 border-black  rounded-lg"
          >
            <FaApple />
          </Button>
        </div>
      </div>
    </div>
  );
}