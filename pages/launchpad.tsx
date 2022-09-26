import React from 'react';
import Card from '../components/LaunchPad/Card';
import Navbar from '../components/Navbar';

export default function Dex() {
  return (
    <>
      <div className="flex w-full min-h-screen text-white">
        <div className="w-1/4">
          <Navbar />
        </div>
        <div className="w-5/6 p-5">
          <Card />
        </div>
      </div>
    </>
  );
}
