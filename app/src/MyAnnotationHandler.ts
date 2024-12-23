import OfficeAICopilotChatEntryPoint from './OfficeAICopilotChatEntryPoint';
let myAnnotationHandler: any = null;    // TODO :: Type of CopilotAnnotationHandler base class here.

OfficeAICopilotChatEntryPoint.deferTillReady.then((module) => {
    const { CopilotAnnotationHandler } = module;
    myAnnotationHandler = new (class extends CopilotAnnotationHandler {
        constructor() {
            super();
            console.log('MyAnnotationHandler :: constructor');
        }

        handleAnnotation() {
            super.handleAnnotation(); // Call method from BaseClass
            console.log('MyAnnotationHandler :: handleAnnotation');
            return "Annotation Handled from MyAnnotationHandler";
        }
    })();
});

export { myAnnotationHandler };
