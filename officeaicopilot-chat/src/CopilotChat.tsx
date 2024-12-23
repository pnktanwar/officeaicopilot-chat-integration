import React from 'react';

export const CopilotChat = ({
    annotationHandler
}) => {
    return (
        <>
            <h1>CopilotChat</h1>
            <h2>{annotationHandler?.handleAnnotation()}</h2>
        </>
    )
};
