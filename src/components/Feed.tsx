import React from 'react';
import { CreatePost } from './CreatePost';
import { Post } from './Post';
export function Feed() {
  const posts = [{
    id: 1,
    user: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    time: '3 hrs',
    content: 'Just finished a 5K run! Personal best time. 🏃‍♀️',
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    likes: 84,
    comments: 12,
    shares: 3
  }, {
    id: 2,
    user: {
      name: 'Tech News Today',
      avatar: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    time: '5 hrs',
    content: 'Breaking: New smartphone release date announced for next month. What features are you most excited about?',
    likes: 243,
    comments: 56,
    shares: 21
  }, {
    id: 3,
    user: {
      name: 'Michael Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    time: '1 day',
    content: 'Check out this amazing sunset from my vacation! #nofilter #beachlife',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    likes: 432,
    comments: 37,
    shares: 15
  }];
  return <div className="w-full md:w-2/4 pt-4 px-0 md:px-4 space-y-4">
      <div className="bg-white rounded-lg shadow p-4">
        <CreatePost />
      </div>
      <div className="space-y-4">
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>;
}