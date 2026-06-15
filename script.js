const text =
"Soccer Player • Student • Future Software Engineer";

let index = 0;

function type() {

    if(index < text.length){

        document.getElementById("typing").innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(type,50);
    }
}

type();

window.addEventListener("scroll", () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / height) * 100;

    document.getElementById("progress-bar")
    .style.width = progress + "%";

    document.querySelectorAll(".reveal")
    .forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("active");
        }
    });
});

document.getElementById("copyBtn")
.addEventListener("click", () => {

    navigator.clipboard.writeText(
    "samuelhe1216@gmail.com");

    alert("Email copied!");
});

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target =
        +counter.dataset.target;

        const count =
        +counter.innerText;

        const increment =
        target / 60;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(update,30);

        }else{

            counter.innerText = target;
        }
    };

    update();
});