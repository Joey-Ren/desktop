$(function () {
    $.extend({
        mizhiSchedule: function () {
            var a = new Date(),
                e = 3600 * a.getHours() + 60 * a.getMinutes() + a.getSeconds(),
                c = e / 86400,
                b = (100 - 100 * c).toFixed(1);
            c = (109 - 109 * c).toFixed(2);
            $(".today-num").text(b + "%");
            $(".today-item").css("height", c + "%");
            b = a.getDay();
            0 === b && (b = 7);
            c = (e + 86400 * (b - 1)) / 604800;
            b = (100 - 100 * c).toFixed(1);
            c = (109 - 109 * c).toFixed(2);
            $(".toweek-num").text(b + "%");
            $(".toweek-item").css("height", c + "%");
            b = a.getFullYear();
            c = a.getMonth();
            a = a.getDate();
            var d = new Date(b, c + 1, 0).getDate();
            d = (e + 86400 * (a - 1)) / (86400 * d);
            var f = (100 - 100 * d).toFixed(1);
            (109 - 109 * d).toFixed(2);
            $(".tomonth-num").text(f + "%");
            $(".tomonth-item").css("height", f + "%");
            d = 0;
            f = [
                31,
                (0 == b % 4 && 0 != b % 100) || 0 == b % 400 ? 29 : 28,
                31,
                30,
                31,
                30,
                31,
                31,
                30,
                31,
                30,
                31,
            ];
            for (var g = 0; g < c; g++) d += f[g];
            a =
                (e + 86400 * (d + a - 1)) /
                (86400 * ((0 == b % 4 && 0 != b % 100) || 0 == b % 400 ? 366 :
                    365));
            e = (100 - 100 * a).toFixed(1);
            a = (109 - 109 * a).toFixed(2);
            $(".toyear-num").text(e + "%");
            $(".toyear-item").css("height", a + "%");
        },
    });
    $.mizhiSchedule();
    setInterval($.mizhiSchedule, 2e3);
});