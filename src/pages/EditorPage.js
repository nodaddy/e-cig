import React, { useState } from 'react';
import TemplateSelector from '../components/TemplateSelector';
import Editor from '../components/Editor';
import SignaturePreview from '../components/SignaturePreview';
import CopyButton from '../components/CopyButton';

function EditorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    phoneNumber: '',
    companyName: '',
    webSite: '',
    addressLine1: '',
    addressLine2: '',
    photoURl: '',
    bannerURL1: '',
    bannerURL2: '',
    bannerURL3: '',
    fontName: '',
    colorOne: '',
    colorTwo: '',
    colorThree: '',
    facebookURL: '',
    twitterURL: '',
    linkedinURL: '',
    youtubeURL: '',
    githubURL: '',
  });
  const [signatureHtml, setSignatureHtml] = useState('');

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="container mx-auto px-4 flex flex-col overflow-hidden">
      {selectedTemplate === null ? (
        <TemplateSelector onSelect={handleTemplateSelect} />
      ) : (
        <div className="container flex justify-between mx-auto gap-24">
          <div className="flex-grow">
            <Editor formData={formData} setFormData={setFormData} />
          </div>
          <div className="w-full max-w-md ml-4 py-6">
            <h2 className="text-base font-semibold mb-6">Preview</h2>
            <div id="main-signature">
              <SignaturePreview
                template={selectedTemplate}
                formData={formData}
                onHtmlChange={setSignatureHtml} // Pass the function to capture the HTML
              />
            </div>
            <div className="flex flex-col mt-6 justify-center gap-6">
              <CopyButton text={signatureHtml} className="w-full" />
              <button
                onClick={() =>
                  window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', '_blank', 'noopener,noreferrer')
                }
                className="bg-gray-100 border font-medium py-3 px-4 gap-3 rounded-lg flex items-center hover:bg-gray-200 w-full"
              >
                <img src="/assets/octicon_play-16.svg" alt="Paste Signature Tutorial" className="w-auto h-[24px]" />
                How to Paste Signature in Gmail
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditorPage;
