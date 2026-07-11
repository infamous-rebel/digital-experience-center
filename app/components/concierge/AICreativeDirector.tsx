'use client';

import { useState } from 'react';

export function AICreativeDirector() {
  const [idea, setIdea] = useState('');
  const [response, setResponse] = useState('');

  const generate = () => {
    setResponse('AI-generated concept: A stunning projection mapping show on a landmark building featuring real-time audience interaction and synchronized spatial audio.');
  };

  return (
    <div className="fixed bottom-24 right-8 glass p-8 rounded-3xl w-96 z-50">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        ✨ AI Creative Director
      </h3>
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Describe your event..."
        className="w-full h-32 bg-black/50 border border-white/20 rounded-2xl p-4 mb-4"
      />
      <button onClick={generate} className="w-full py-4 bg-white text-black rounded-2xl font-medium">
        Generate Immersive Concept
      </button>
      {response && <div className="mt-6 p-4 bg-black/70 rounded-2xl text-sm">{response}</div>}
    </div>
  );
}