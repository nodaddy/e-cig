import React, { useEffect, useState } from 'react';

function SignaturePreview({ template, formData, onHtmlChange }) {
  const [templateHtml, setTemplateHtml] = useState('');

  useEffect(() => {
    fetch(template.fileUrl)
      .then((response) => response.text())
      .then((data) => {
        let updatedTemplate = data;
        Object.keys(formData).forEach((key) => {
          const placeholder = new RegExp(`{{${key}}}`, 'g');
          updatedTemplate = updatedTemplate.replace(placeholder, formData[key]);
        });
        setTemplateHtml(updatedTemplate);
        if (onHtmlChange) {
          // Include styles inline if needed for Gmail
          onHtmlChange(updatedTemplate);
        }
      })
      .catch((error) => console.error('Error loading template:', error));
  }, [template, formData, onHtmlChange]);

  return (
    <div>
      {templateHtml ? (
        <div id="main-signature" dangerouslySetInnerHTML={{ __html: templateHtml }}>
        </div>
      ) : (
        <p>Loading preview...</p>
      )}
    </div>
  );
}

export default SignaturePreview;
