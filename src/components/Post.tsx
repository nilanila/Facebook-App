import React from 'react';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
export function Post({
  post
}) {
  return <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <h3 className="font-semibold">{post.user.name}</h3>
              <p className="text-gray-500 text-sm">{post.time}</p>
            </div>
          </div>
          <button className="text-gray-500 hover:bg-gray-100 rounded-full p-2">
            <MoreHorizontal size={20} />
          </button>
        </div>
        <div className="mt-3">
          <p>{post.content}</p>
        </div>
      </div>
      {post.image && <div className="w-full">
          <img src={post.image} alt="Post content" className="w-full" />
        </div>}
      <div className="p-4">
        <div className="flex justify-between text-gray-500 text-sm mb-3">
          <div>
            <span className="text-blue-500">👍</span> {post.likes}
          </div>
          <div>
            {post.comments} comments • {post.shares} shares
          </div>
        </div>
        <div className="border-t border-gray-300 pt-1 flex justify-between">
          <button className="flex items-center justify-center py-2 px-4 rounded-lg hover:bg-gray-100 flex-grow text-gray-500">
            <ThumbsUp size={20} className="mr-2" />
            <span>Like</span>
          </button>
          <button className="flex items-center justify-center py-2 px-4 rounded-lg hover:bg-gray-100 flex-grow text-gray-500">
            <MessageCircle size={20} className="mr-2" />
            <span>Comment</span>
          </button>
          <button className="flex items-center justify-center py-2 px-4 rounded-lg hover:bg-gray-100 flex-grow text-gray-500">
            <Share2 size={20} className="mr-2" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>;
}