$("#sendTelegram").on("click", function() {
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val();
    var message = $("#message").val().trim();
    
    if(name == "") {
        $("#messageShow").text("Введите имя");
        return false
    }
    if(name.length < 3) {
        $("#messageShow").text("Введите не менее 3 символов");
        return false
    }
    if(phone == "") {
        $("#messageShow").text("Введите телефон");
        return false
    }
    if(phone.length < 7 && phone.test(/[a-z]/ig)) {
        $("#messageShow").text("Введите корректный телефон");
        return false
    }
    if(email == "") {
        $("#messageShow").text("Введите email");
        return false
    }
    if(email.split ('@').length - 1 == 0 | email.split ('.').length - 1 == 0) {
        $("#messageShow").text("Не корректный email");
        return false
    }
    $("#messageShow").text("");

    $.ajax({
        url: 'telegram.php',
        type: 'POST',
        cache: false,
        data: {'name': name,'phone': phone, 'email': email,'message': message},
        dataType: 'html',
        success: function(data) {
            window.location.href = 'thanksfor.html';
        }
    })

});

$("#sendTelegram2").on("click", function() {
    var email2 = $("#email2").val().trim();
    var name2 = $("#name2").val().trim();
    var phone2 = $("#phone2").val().trim();
    var message2 = $("#message2").val().trim();
    
    if(name2 == "") {
        $("#messageShow2").text("Введите имя");
        return false
    }
    if(name2.length < 3) {
        $("#messageShow2").text("Введите не менее 3 символов");
        return false
    }
    if(phone2 == "") {
        $("#messageShow2").text("Введите телефон");
        return false
    }
    if(phone2.length < 7) {
        $("#messageShow2").text("Введите корректный телефон");
        return false
    }
    if(email2 == "") {
        $("#messageShow2").text("Введите email");
        return false
    }
    if(email2.split ('@').length - 1 == 0 | email2.split ('.').length - 1 == 0) {
        $("#messageShow2").text("Не корректный email");
        return false
    }

    $("#messageShow2").text("");

    $.ajax({
        url: 'telegram.php',
        type: 'POST',
        cache: false,
        data: {'name': name2,'phone': phone2, 'email': email2,'message': message2},
        dataType: 'html',
        success: function(data) {
            window.location.href = 'thanksfor.html';
        }
    })

});