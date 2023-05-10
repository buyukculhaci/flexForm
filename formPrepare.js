function MazlemeModal(formCode, formID, ID = 0) {//deprecated

    blurla(true);

    $.ajax({
        type: 'POST',
        url: '/Home/MalzemeBul_Modal',
        cache: false,
        async: false,
        data: {
            formCode: formCode,
            formID: formID,
            ID: ID,
        },
        success: function (response) {
            $("#ModalZone").html(response);
            $("#Modal").modal({ backdrop: 'static', keyboard: false }, 'show');
            blurla(false);
        },
        error: function (error) {
            console.log(error);
        }
    });

    $('#modalForm').find('#formID').val(formID);
    $('#modalForm').find('#formCode').val(formCode);
    if (ID != 0) {
        console.log('Item to modal');
        console.log(ID);
        veriGet('MalzemeDetayGetir', 'Home', data = { malzID: ID }, 'MalzemeBul_Modal_singleItem*getMalzDetails');
    }
}


//modal creator
function modalGetir(controller, view, form, data = {}) {

    blurla(true);

    $.ajax({
        type: "POST",
        url: "/" + controller + "/" + view + "",
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "html",
        success: function (response) {
            console.log(response);
            $("#ModalZone").html(response);
            $("#ModalGeneral").modal({ backdrop: 'static', keyboard: false }, 'show');
            blurla(false);
        },
        failure: function (response) {
            console.log(response.responseText);
        },
        error: function (response) {
            console.log(response.responseText);
        }
    });
}
