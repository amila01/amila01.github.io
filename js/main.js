// hero - section typing function
var typed = new Typed(".typing", {
    strings: ["Undergratuate ?", "Developer ?", "Blogger ?", "Web Designer ?", "Freelancer ?"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Animations in project 
$(document).ready(function() {

    var counts = $(".count");
    var countlen = counts.length;
    var counter = [];

    for (i = 0; i < countlen; i++) {
        counter[i] = parseInt(counts[i].innerHTML);
    }

    var count = function(start, value, id) {
        var start = start;
        setInterval(function() {
            if (start < value) {
                start++;
                counts[id].innerHTML = start;
            }
        }, 400);
    }

    for (j = 0; j < countlen; j++) {
        count(0, counter[j], j);
    }
});