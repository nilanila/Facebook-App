import React from 'react';
import { Search, Video, MoreHorizontal } from 'lucide-react';
export function RightSidebar() {
  const contacts = [{
    id: 1,
    name: 'Sarah Johnson',
    online: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }, {
    id: 2,
    name: 'Robert Chen',
    online: true,
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }, {
    id: 3,
    name: 'Emily Wilson',
    online: false,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }, {
    id: 4,
    name: 'David Kim',
    online: true,
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }, {
    id: 5,
    name: 'Sophia Martinez',
    online: false,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }];
  return <div className="w-1/4 hidden md:block sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-500 font-semibold">Sponsored</h2>
        </div>
        <div className="mb-4">
          <div className="rounded-lg overflow-hidden mb-2">
            <img src="https://images.unsplash.com/photo-1565058296766-9a91526b5a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Advertisement" className="w-full h-32 object-cover" />
          </div>
          <div className="text-sm">
            <p className="font-medium">Try our new coffee blend</p>
            <p className="text-gray-500">coffeeshop.example.com</p>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-500 font-semibold">Birthdays</h2>
          </div>
          <div className="flex items-center mb-4">
            <div className="mr-2 text-xl">🎂</div>
            <p className="text-sm">
              <span className="font-semibold">Mike Thompson</span> and{' '}
              <span className="font-semibold">2 others</span> have birthdays
              today.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-500 font-semibold">Contacts</h2>
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:bg-gray-200 rounded-full p-1">
                <Video size={16} />
              </button>
              <button className="text-gray-500 hover:bg-gray-200 rounded-full p-1">
                <Search size={16} />
              </button>
              <button className="text-gray-500 hover:bg-gray-200 rounded-full p-1">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
          <div className="space-y-2">
            {contacts.map(contact => <div key={contact.id} className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                <div className="relative mr-3">
                  <img src={contact.avatar} alt={contact.name} className="w-8 h-8 rounded-full" />
                  {contact.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
                </div>
                <span>{contact.name}</span>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}