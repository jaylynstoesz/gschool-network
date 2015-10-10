Dispatcher.register(function(action){
   switch(action.type){
       case "SOMETHING_HAPPENED":
           doSomething(action.usefulData);
           break;
       case "OTHER_THING_HAPPENED":
           doOtherThing(action.otherData);
           break;
    }
});
