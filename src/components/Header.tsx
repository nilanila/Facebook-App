import React from 'react';
import { Search, Home, Users, PlaySquare, Store, Bell, MessageCircle, Menu, User } from 'lucide-react';
export function Header() {
  return <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between p-2">
        {/* Left section */}
        <div className="flex items-center">
          <div className="mr-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" fill="#1877F2" />
              <path d="M27.9166 25.4373L28.7383 20.0623H23.5691V16.6873C23.5691 15.2498 24.2758 13.8498 26.5216 13.8498H29V9.24976C29 9.24976 26.9433 8.87476 24.9866 8.87476C20.8983 8.87476 18.2641 11.3123 18.2641 16.0623V20.0623H13.5V25.4373H18.2641V38.6248C19.2591 38.7998 20.2766 38.8748 21.3166 38.8748C22.3566 38.8748 23.3741 38.7998 24.3691 38.6248V25.4373H27.9166Z" fill="white" />
            </svg>
          </div>
          <div className="relative hidden md:block">
            <input type="text" placeholder="Search Facebook" className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-60 focus:outline-none" />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
        </div>
        {/* Middle section */}
        <div className="flex space-x-2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-blue-500 border-b-4 border-blue-500">
            <Home size={24} />
          </div>
          <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-500">
            <Users size={24} />
          </div>
          <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-500">
            <PlaySquare size={24} />
          </div>
          <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-500">
            <Store size={24} />
          </div>
        </div>
        {/* Right section */}
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gray-200 rounded-full cursor-pointer">
            <Menu size={20} />
          </div>
          <div className="p-2 bg-gray-200 rounded-full cursor-pointer">
            <MessageCircle size={20} />
          </div>
          <div className="p-2 bg-gray-200 rounded-full cursor-pointer">
            <Bell size={20} />
          </div>
          <div className="p-2 bg-gray-200 rounded-full cursor-pointer">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>;
}