import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabClick = (id) => {
        setActiveTab(id);
    };

    return (
        <div>
            <div className="flex border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-16 py-2 text-xl ml-48 font-medium  ${activeTab === tab.id ? 'border-2 bg-green-500 border-black text-white' : 'text-gray-500 hover:text-black'} focus:outline-none`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4">
                {tabs.map((tab) => (
                    <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
