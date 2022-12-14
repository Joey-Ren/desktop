let array = [];
let typed = null;
(function () {
    $.ajax({
        url: "https://wenan.ge69.com/api/tiangous",
        type: "get",
        timeout: 60000,
        success: function (result) {
            const txt = result.data;
            $.each(txt, function (index, value) {
                array.push(value.attributes.main);
            });
            typed = new Typed("#tiangou", {
                strings: array,
                typeSpeed: 200,
                backSpeed: 50,
                showCursor: false,
                shuffle: true,
                loop: true,
            });
        },
    });
})();