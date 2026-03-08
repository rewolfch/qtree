import React from 'react';
import SEO from '../components/SEO';

const FAQ: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="FAQ - Quality Tree" description="Frequently Asked Questions" />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">What is Quality Tree?</h3>
          <p className="mt-2 text-gray-600">Quality Tree is a tool to help you visualize and improve your software quality process.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
