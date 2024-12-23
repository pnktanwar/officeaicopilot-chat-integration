import React from 'react';
import { useCopilotChat } from './OfficeAICopilotChatEntryPoint';
import { myAnnotationHandler } from './MyAnnotationHandler';

export const MyCopilot = () => {
  const OfficeAICopilotChat = useCopilotChat();
  return (
    <div>
      <h1>My Copilot</h1>
      { OfficeAICopilotChat && <OfficeAICopilotChat annotationHandler={myAnnotationHandler} /> }
    </div>
  );
};
