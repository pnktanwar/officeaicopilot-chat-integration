console.log("OfficeAICopilotChatEntryPoint.init");
// this._module = (await import(/* webpackChunkName: "officeaicopilot-chat" */ './officeaicopilot-chat.js'));
import(
    /* webpackIgnore: true */ 
    'http://localhost:3001/officeaicopilot-chat.js'
).then((module) => {
    console.log("PANKAJ TEST :: ", module);
})
.catch((err) => {
    console.error('Failed to load script', err);
});

export default {};