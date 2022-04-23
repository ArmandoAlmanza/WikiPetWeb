document.addEventListener("DOMContentLoaded", (event) => {
    app();
});

const app = () => {
    changeTip();
};

const changeTip = () => {
    const tipP = document.getElementById("tip");

    const tips = [
        "Cudia a tu perro",
        "Sacalo a pasear diario",
        "Dale aguita caliente",
        "aaaaaaaaaaaaaaaaa",
        "Dale de comer a una hora adecuada",
    ];

    setInterval(
        () => (tipP.innerHTML = tips[Math.floor(Math.random() * 4)]),
        5000
    );
};
