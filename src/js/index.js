document.addEventListener("DOMContentLoaded", (event) => {
    app();
});

const app = () => {
    if (
        window.location.pathname === "/index.html" ||
        window.location.pathname === "/"
    ) {
        changeTip();
    } else {
        console.log("No es home we");
    }
};

const changeTip = () => {
    const tipP = document.getElementById("tip");
    const tipImg = document.getElementById("tip__img");
    const tips = [
        "NO DEJES OBJETOS PELIGROSOS A SU ALCANCE",
        "OFRÉCELE UNA ALIMENTACIÓN DE CALIDAD",
        "LÁVALO Y CEPÍLLALO CON ASIDUIDAD",
        "LLÉVALO AL VETERINARIO DE FORMA PERIÓDICA",
        "PREMIA SU BUEN COMPORTAMIENTO Y ACARÍCIALO",
        "NO LO DEJES SOLO",
        "EDUCA A TU PERRO Y TEN PACIENCIA CON ÉL",
    ];

    const imgs = [
        "../../build/img/tip_img.jpg",
        "../../build/img/tip_img_1.jpeg",
        "../../build/img/tip_img_2.jpeg",
        "../../build/img/tip_img_3.jpeg",
        "../../build/img/tip_img_4.jpeg",
        "../../build/img/tip_img_5.jpeg",
    ];
    tipP.innerHTML = tips[Math.floor(Math.random() * tips.length)];
    tipImg.src = imgs[Math.floor(Math.random() * imgs.length)];
    setInterval(() => {
        tipP.innerHTML = tips[Math.floor(Math.random() * tips.length)];
        tipImg.src = imgs[Math.floor(Math.random() * imgs.length)];
    }, 5000);
};
