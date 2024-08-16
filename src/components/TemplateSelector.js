import React, { useState, useEffect } from 'react';
import SignaturePreview from '../components/SignaturePreview';

const dummyData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  jobTitle: 'Software Engineer',
  phoneNumber: '+1-234-567-890',
  companyName: 'Example Corp',
  webSite: 'https://www.example.com',
  addressLine1: '123 Main St',
  addressLine2: 'Apt 456',
  photoURL: 'https://via.placeholder.com/150',
  bannerURL1: 'https://via.placeholder.com/600x100',
  bannerURL2: 'https://via.placeholder.com/600x100',
  bannerURL3: 'https://via.placeholder.com/600x100',
  fontName: 'Arial',
  colorOne: '#000000',
  colorTwo: '#ffffff',
  colorThree: '#0000ff',
  facebookURL: 'https://www.facebook.com/johndoe',
  twitterURL: 'https://www.twitter.com/johndoe',
  linkedinURL: 'https://www.linkedin.com/in/johndoe',
  youtubeURL: 'https://www.youtube.com/johndoe',
  githubURL: 'https://www.github.com/johndoe',
};

function TemplateSelector({ onSelect }) {
  const [templates, setTemplates] = useState({});

  useEffect(() => {
    const templateCount = 10;
    const templatePromises = [];

    for (let i = 1; i <= templateCount; i++) {
      templatePromises.push(fetch(`/templates/template_${i}.html`).then(res => res.text()));
    }

    Promise.all(templatePromises)
      .then(htmlContents => {
        const newTemplates = {};
        htmlContents.forEach((htmlContent, index) => {
          newTemplates[`template_${index + 1}`] = {
            id: `template_${index + 1}`,
            htmlContent,
            fileUrl: `/templates/template_${index + 1}.html`
          };
        });
        setTemplates(newTemplates);
      })
      .catch(error => console.error('Error loading templates:', error));
  }, []);

  useEffect(()=>{
    console.log(templates);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-base font-semibold mb-6">Select a template</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {Object.entries(templates).map(([templateId, template]) => (
          <div
            key={templateId}
            className="cursor-pointer border border-gray-300 p-8 w-auto h-[250px] overflow-hidden rounded-sm flex justify-center items-center"
            onClick={() => onSelect(template)}
          >
            <SignaturePreview
              template={template}
              formData={dummyData}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;