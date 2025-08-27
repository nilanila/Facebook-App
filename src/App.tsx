import React from 'react';
import { Header } from './components/Header';
import { LeftSidebar } from './components/LeftSidebar';
import { Feed } from './components/Feed';
import { RightSidebar } from './components/RightSidebar';
export function App() {
  return <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex justify-between pt-16 px-2 md:px-4">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>;
}