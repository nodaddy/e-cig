import React, { useState } from 'react';
import PersonalInfoTab from './settingstab/PersonalInfoTab';
import CompanyInfoTab from './settingstab/CompanyInfoTab';
import GraphicsTab from './settingstab/GraphicsTab';
import StylingTab from './settingstab/StylingTab';
import SocialMediaTab from './settingstab/SocialMediaTab';

const tabs = [
  { name: 'Personal Info', component: PersonalInfoTab },
  { name: 'Company Info', component: CompanyInfoTab },
  { name: 'Graphics', component: GraphicsTab },
  { name: 'Styling', component: StylingTab },
  { name: 'Social Media', component: SocialMediaTab },
];

function Editor({ formData, setFormData }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div className="container mx-auto px-4 h-[calc(100vh-7rem)]">
      <div className="grid grid-cols-6 h-screen">
        <div className="col-span-2 border-r py-6">
          <h2 className="text-base font-semibold mb-6">Edit your template</h2>
          <div className="space-y-2">
            {tabs.map((tab, index) => (
              <React.Fragment key={tab.name}>
                <button
                  className={`relative block w-full text-left py-6 px-6 rounded-l-md ${
                    activeTab === index ? 'bg-gray-100 font-medium' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.name}
                  {activeTab === index && (
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gray-500 rounded-l-md"></span>
                  )}
                </button>
                {index !== tabs.length - 1 && <hr className="border-t border-gray-200" />} {/* Add hr between tabs */}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="col-span-4 px-6 py-6">
          <div className="flex-1 h-[calc(100vh-10rem)] bg-gray-100 rounded-md p-6 ">
            <h4 className="text-md font-semibold pb-6">{tabs[activeTab].name}</h4>
            <ActiveTabComponent formData={formData} handleChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;