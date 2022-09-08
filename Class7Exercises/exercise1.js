function redundantReturn (){
    let str = "Hello";

    function inner() {
        console.log ("String inside inner function: ", str);
    }
    return inner();
}
 redundantReturn();