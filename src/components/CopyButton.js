import React from 'react';

function CopyButton({ text }) {
  const handleCopy = () => {
    copyToClipboard(text);
  };

  const copyToClipboard = (html) => {
    // Create a temporary container div with the HTML content
    const container = document.createElement('div');
    container.innerHTML = html;
    container.id = 'html'; // Set the id to 'html'
    container.style.position = 'fixed'; // Avoid affecting the layout
    container.style.pointerEvents = 'none'; // Disable interactions with the container
    container.style.opacity = 0; // Make it invisible
    document.body.appendChild(container);

  function removeTailwindStyles(element) {
    const elements = element.querySelectorAll('*');
    elements.forEach(el => {
      const style = el.getAttribute('style');
      console.log(style)
      if (style) {
        const cleanedStyle = style
          .replace(/--tw-[^\s;]+;?/g, '')   
          .replace(/^\s*;\s*$/, '')      
          .trim();  
        if (cleanedStyle) {
          el.setAttribute('style', cleanedStyle);
          console.log(cleanedStyle)
        } else {
          el.removeAttribute('style');
        }
      }
    });
  }
  async function copyCleanedContent(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found');
        return;
    }   
    removeTailwindStyles(container);
      
    const range = document.createRange();
    range.selectNodeContents(container);
    console.log(range);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    
    try {
      document.execCommand('copy');
      const text = await navigator.clipboard.readText();
      console.log(text);
      alert('Signature copied to clipboard!');
      console.log('Cleaned content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy content to clipboard', err);
    }

    
    window.getSelection().removeAllRanges();
  }
  
   
  copyCleanedContent('main-signature');

    // // Select the content and copy it
    // const range = document.createRange();
    // range.selectNode(container);
    // window.getSelection().removeAllRanges();
    // window.getSelection().addRange(range);
    // document.execCommand('copy');

    // // Cleanup: remove the temporary container
    // document.body.removeChild(container);

    // alert('Signature copied to clipboard!');
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
    >
      Copy Signature
    </button>
  );
}

export default CopyButton;
