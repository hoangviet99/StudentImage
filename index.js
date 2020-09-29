$(document).ready(function(){
    $('input[type="button"]').click(function(){
        let id = $('#studentId').val();
        let linkImg = `http://online.dlu.edu.vn/HinhSV/${id}.jpg`;
        $("#studentImage").attr("src", linkImg);
    })
});