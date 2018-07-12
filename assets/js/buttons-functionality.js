$(document).ready(function(){

    var intervalId;
    $("#add-button").on("click",function(event){
        window.clearInterval(intervalId);
        for(i=0;i<40;i++){
            //var btn=$('<button id="button" class="btn btn-primary">Add</button>')
            var btn= $('<button id="button'+i+'" class="added-button btn btn-outline-secondary">Button '+(i+1)+ '</button>');
            //console.log(btn);
            //var $btn=$(btn);
            btn.appendTo($("#button-section"))  ;
        }

    });
    $("#clear-button").on("click",function(event){
        window.clearInterval(intervalId);

        $("#button-section").empty();
    });

    $("#button-section").on("click",".added-button",function(event){
        alert($(this).text()+" was clicked.");  
    });

    $("#remove-button").on("click",function(event){
        intervalId= window.setInterval(
                function () {
                    $('#button-section').find('button').last().remove();

                    console.log("hjkefj");

            
                }, 1000);
    });

});