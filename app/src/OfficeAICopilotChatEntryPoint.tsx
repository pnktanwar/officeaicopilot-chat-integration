import React from 'react';

export class OfficeAICopilotChatEntryPoint {
    private static _module: any = null; // TODO :: Type here
    public static deferTillReady: Promise<any> = new Promise(async (resolve, reject) => {
        try {
            console.log("OfficeAICopilotChatEntryPoint.init");
            // this._module = (await import(/* webpackChunkName: "officeaicopilot-chat" */ './officeaicopilot-chat.js'));
            OfficeAICopilotChatEntryPoint._module = (
                await import(
                    /* webpackIgnore: true */ 
                    'http://localhost:3001/officeaicopilot-chat.js'
                )
            );
            console.log("OfficeAICopilotChatEntryPoint.init :: ", OfficeAICopilotChatEntryPoint._module);
            resolve(OfficeAICopilotChatEntryPoint._module);
            
        } catch (error) {
            console.error('Error importing lib module:', error);
            throw new Error('Failed to import Office AI Copilot Chat');
        }
    });

    public static getModule() {
        return OfficeAICopilotChatEntryPoint._module;
    }
};

export const useCopilotChat = () => {
    const [, setIsOfficeAICopilotChatLoaded] = React.useState(null);
    React.useEffect(() => {
        OfficeAICopilotChatEntryPoint.deferTillReady.then(() => {
          console.log('Office AI CopilotChat Ready to use');
          setIsOfficeAICopilotChatLoaded(true);
        });
    }, []);
    return OfficeAICopilotChatEntryPoint.getModule()?.CopilotChat;
};

export default OfficeAICopilotChatEntryPoint;
