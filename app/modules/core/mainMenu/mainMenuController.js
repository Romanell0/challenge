define([], function(){
   var mainMenuController =  function($_mainMenu){
       this.$_mainMenu = $_mainMenu;
       this.title = "tes!!";
       this.mainMenu = this.getItem();
    }
   mainMenuController.$inject = ['$_mainMenu'];
    mainMenuController.prototype = {
        getItem: function(){
            var allItem = this.$_mainMenu.getItems();
            return allItem;
        }
    }
    return mainMenuController;
});