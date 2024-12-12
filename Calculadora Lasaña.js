const coccion = 40 

const ActualizacionTiempo = () => {
    var capas = Number(document.getElementById("capas").value)
    var TiempoEnHorno = Number(document.getElementById("TiempoEnHorno").value);

    if (capas < 0 || TiempoEnHorno < 0) {
        alert("Por favor, digite valores validos.");
        return;
    }

    var TiempoRestante = coccion - TiemproRestante;
    var TiempoPreparacion = capas * 2;
    var TiempoTotal = TiempoEnHorno + TiempoPreparacion;

    document.getElementById("TiempoRestante").textContent = "Tiempo restante en el horno: " + TiempoRestante + " minutos.";
    document.getElementById("TiempoPreparacion").textContent = "Tiempo total de preparación: " + TiempoPreparacion + " minutos.";
    document.getElementById("TiempoTotal").textContent = "Tiempo total de trabajo: " + TiempoTotal + " minutos";
};

document.getElementById("capas").addEventListener("input", ActualizacionTiempo);
document.getElementById("TiempoEnHorno").addEventListener("input", ActualizacionTiempo);