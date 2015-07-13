define([], function(){
   var mainMenuProvider = function (){
       var menu = [];
       
       this.$get = function () {
            return {
                getItems: function () {
                    return menu;
                }
            }
        };
       
       this.addItem = function (item) {
            menu.push(item);
        }
   } 
   
   mainMenuProvider.$inject = [];
    
    return mainMenuProvider;
});