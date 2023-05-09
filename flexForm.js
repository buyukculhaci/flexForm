function veriGet(action, controller, data = {}, page = "TanımlanmamışGet", reachType="name") {
    var ret;
    $.ajax({
        type: "POST",
        url: '/' + controller + '/' + action,
        data: data,
        async: false,
        dataType: 'json',
        success: function (data) {
            console.log(data);

            if (data.multi != undefined) {
                ret = data.multi;
            }
            else {
                Object.keys(data.single).forEach(itm => {
                    $('[name="' + itm + '"]').val(data.single[itm]);
                });
            }
        },
        failure: function (err) {
            console.log(err);//hataları json objesi olarak db'ye kaydedeceğim, içinde user
        },
        error: function (err) {
            console.log(err);
        }
    });
    return ret;
}

function veriSet(action, controller, data, page = "TanımlanmamışSet", toastTitle = '') {
    let res = {
        result: false,
        data: '',
    };
    $.ajax({
        type: 'POST',
        url: '/' + controller + '/' + action,
        data: data,
        processData: false,
        contentType: false,
        async: false,
        success: function (data) {
            if (toastTitle != '') {
                showToast("Form kaydedildi", 'Bilgi', 'info', 'toast-bottom-right', 2000);
            }
            res = {
                result: true,
                data: data,
            }
        },
        failure: function (err) {
            console.log(err);
            res = {
                result: false,
                data: '',
            };
        },
        error: function (err) {
            console.log(err);
            res = {
                result: false,
                data: '',
            };
        }
    });
    return res;
}
