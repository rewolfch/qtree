import React from 'react';

const AppTool: React.FC = () => {
  return (
    <div className="w-full flex-grow flex flex-col h-[calc(100vh-64px)]">
      <iframe 
        src="https://quality-tree-framework-836825617090.us-west1.run.app/" 
        className="w-full h-full border-none"
        title="Quality Tree Framework App"
        allow="clipboard-write"
      />
    </div>
  );
};

export default AppTool;