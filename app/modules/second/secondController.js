define([], function(){
   var secondController =  function(){
        this.title = "second!!";
    }
   secondController.$inject = [];
//    firstController.prototype = {}
    return secondController;
});