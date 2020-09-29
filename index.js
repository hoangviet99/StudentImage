$(document).ready(function(){
    $('input[type="button"]').click(function(){
        var id = $("#studentId").val();
        var linkImg = "http://online.dlu.edu.vn/HinhSV/" + id + ".jpg";
        alert(linkImg);
        $("#studentImage").attr("src", linkImg);
    })
})