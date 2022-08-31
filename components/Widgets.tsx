import React from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { SearchIcon } from "@heroicons/react/outline";
const Widgets = () => {
  return (
    <div className='mt2 px-2 col-span-3 hidden lg:inline ' >
      <div className="mt-2 my-3 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent flex-1 outline-none "
        />
      </div>
       <TwitterTimelineEmbed
  sourceType="profile"
  screenName="ajanitimotew"
  options={{height: 1000}}
  
/>
    </div>
  );
};

export default Widgets;
