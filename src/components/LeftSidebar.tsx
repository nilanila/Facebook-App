import React from 'react';
import { User, Users, Bookmark, Clock, Calendar, Flag, ChevronDown } from 'lucide-react';
export function LeftSidebar() {
  return <div className="w-1/4 hidden md:block sticky top-16 h-[calc(100vh-64px)] overflow-y-auto pb-4">
      <div className="p-2 space-y-1">
        <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="w-8 h-8 rounded-full mr-3" />
          <span className="font-medium">John Doe</span>
        </div>
        <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <Users size={20} className="text-blue-600" />
          </div>
          <span>Friends</span>
        </div>
        <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <Bookmark size={20} className="text-purple-600" />
          </div>
          <span>Saved</span>
        </div>
        <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <Clock size={20} className="text-blue-600" />
          </div>
          <span>Memories</span>
        </div>
        <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <Calendar size={20} className="text-red-600" />
          </div>
          <span>Events</span>
        </div>
        <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <Flag size={20} className="text-orange-600" />
          </div>
          <span>Pages</span>
        </div>
        <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
            <ChevronDown size={20} />
          </div>
          <span>See more</span>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-2 pt-2">
        <h3 className="text-gray-500 font-semibold px-4 mb-2">
          Your shortcuts
        </h3>
        <div className="p-2 space-y-1">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-gray-300 rounded mr-3 flex items-center justify-center">
              <span className="text-xs">🎮</span>
            </div>
            <span>Gaming Group</span>
          </div>
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-gray-300 rounded mr-3 flex items-center justify-center">
              <span className="text-xs">🏋️</span>
            </div>
            <span>Fitness Club</span>
          </div>
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-gray-300 rounded mr-3 flex items-center justify-center">
              <span className="text-xs">🍳</span>
            </div>
            <span>Cooking Enthusiasts</span>
          </div>
        </div>
      </div>
    </div>;
}