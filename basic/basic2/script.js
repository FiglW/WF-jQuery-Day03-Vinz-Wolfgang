var box = $("<div></div>");
var input = $("<input type='text' placeholder='add something'>");
var button = $("<button type='button'>Add</button>");

$("body").append(box);
$(box).append(input);
$(input).after(button);

$(button).click( addToList);

function addToList() {
    var inputval = $(input).val();
    var listitem = $(`<p>${inputval}</p>`);
    $(box).append(listitem);
    
    $("p").click(function(){
        $(this).animate({
            paddingLeft : "+=3000000"
        }, 1000, function () {
            $(this).remove() 
        });
    })
    $(input).val(" ");

};


