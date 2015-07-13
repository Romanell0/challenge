define([], function(){
   var firstController =  function(){
        this.title = "first!!";
    }
   firstController.$inject = [];
//    firstController.prototype = {}
    return firstController;
});