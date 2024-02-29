import React, { useEffect } from 'react';

function TitleChangeComponent() {
  useEffect(() => {
    document.title = 'Title page';
  }, []);

  return (
    <div>
      <p>This component changes the title of the page on mount.</p>
    </div>
  );
}

export default TitleChangeComponent;
