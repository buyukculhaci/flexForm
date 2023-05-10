function veriGet(controller, action, data = {}, page = "TanımlanmamışGet", by = "name", test = false) {

    $.ajax({
        type: "POST",
        url: '/' + controller + '/' + action,
        data: data,
        async: false,
        dataType: 'json',
        success: function (data) {
            if (test) {
                console.log('** Form Verisi **');
                console.log(data);
            }

            if (data.multi != undefined) {
                return data.multi;
            }
            else {
                Object.keys(data.single).forEach(itm => {
                    console.log(data.single[itm]);
                    if (by == 'id') {
                        $('[name="' + itm + '"]').val(data.single[itm]);
                    }
                    else {
                        $('[id="' + itm + '"]').val(data.single[itm]);
                    }

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
}

function veriSet(controller, action, data, page = "TanımlanmamışSet", toastTitle = '') {
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
