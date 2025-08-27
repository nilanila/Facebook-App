import React from 'react';
import { Image, Video, Smile } from 'lucide-react';
export function CreatePost() {
  return <div>
      <div className="flex items-center mb-3">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
        <div className="bg-gray-100 hover:bg-gray-200 rounded-full py-2 px-4 text-gray-500 flex-grow cursor-pointer">
          What's on your mind, John?
        </div>
      </div>
      <div className="border-t border-gray-300 pt-3">
        <div className="flex justify-between">
          <button className="flex items-center justify-center py-1 px-2 rounded-lg hover:bg-gray-100 flex-grow text-gray-500">
            <Video size={20} className="mr-2 text-red-500" />
            <span>Live Video</span>
          </button>
          <button className="flex items-center justify-center py-1 px-2 rounded-lg hover:bg-gray-100 flex-grow text-gray-500">
            <Image size={20} className="mr-2 text-green-500" />
            <span>Photo/Video</span>
          </button>
          <button className="flex items-center justify-center py-1 px-2 rounded-lg hover:bg-gray-100 flex-grow text-gray-500">
            <Smile size={20} className="mr-2 text-yellow-500" />
            <span>Feeling/Activity</span>
          </button>
        </div>
      </div>
    </div>;
}