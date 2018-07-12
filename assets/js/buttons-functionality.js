$(document).ready(function(){

    //Defining an interval Id for using it in the timer functionality
    var intervalId;

    //Clicking on add button adds 40 buttons to the page
    $("#add-button").on("click",function(event){
        //Clearing the  window inteval If any of main buttons clicked when the window interval is running.   
        window.clearInterval(intervalId);
        for(i=0;i<40;i++){
            var btn= $('<button id="button'+i+'" class="added-button btn btn-outline-secondary">Button '+(i+1)+ '</button>');
            btn.appendTo($("#button-section"))  ;
        }
    });

    //Clicking clear button removes all the buttons at once
    $("#clear-button").on("click",function(event){
        //Clearing the  window inteval If any of main buttons clicked when the window interval is running.   
        window.clearInterval(intervalId);
        $("#button-section").empty();
    });

    //Adding the click event to the dynamically added buttons
    $("#button-section").on("click",".added-button",function(event){
        alert($(this).text()+" was clicked.");  
    });

    //When the remove button is clicked,removes a button at a time
    $("#remove-button").on("click",function(event){
        //Using window interval of 1000ms or 1 second
        intervalId= window.setInterval(
                function () {
                    //finds the last button
                    $('#button-section').find('button').last().remove();
                }, 1000);
    });

});