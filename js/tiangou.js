let array = [];
let typed = null;
(function () {
    $.ajax({
        url: "https://api.oioweb.cn/api/SimpWords",
        type: "get",
        timeout: 60000,
        success: function (res) {
            const txt = res.result.content;
            let array = txt.replace('，', ',').replace('.', ',').split(',')
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