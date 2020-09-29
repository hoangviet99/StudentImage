$(document).ready(function(){
    $('input[type="button"]').click(function(){
        var id = $("#studentId").val();
        var linkImg = "http://online.dlu.edu.vn/HinhSV/" + id + ".jpg";
        var outerHTML = '<img id="studentImage" alt="Sinh viên này méo có ảnh nhé!" src="' + linkImg + '">';
        $("#studentImage").attr('src', linkImg);
        $("#link").text($("#studentImage").attr('src'));
    })
})