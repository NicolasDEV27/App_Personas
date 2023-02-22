const cli = document.getElementById("cli");
const cue = document.getElementById("cue");
const cueF = document.getElementById("cueF");
const bank = document.getElementById("bank");
const cant = document.getElementById("cant");
const btn = document.getElementById("boton");

const destino = document.getElementById("cteDestino");
const cuenta= document.getElementById("ctaDestino");
const ctaFin = document.getElementById("ctaFinal");
const banco = document.getElementById("bancos");
const cantidad = document.getElementById("monto");

const min = 1000000000;
const max = 9999999999;
let montomin = 10;
let montomax = 50000000;

btn.addEventListener("click", mostrar);

function mostrar()
{
    if((cuenta.value < max && cuenta.value >= min) && (ctaFin.value < max && ctaFin.value >= min) && (cantidad.value <= montomax && cantidad.value >= montomin))
    {
    alert("Transacción realizada con éxito");
    cli.innerHTML += "Nombre de quien consigna: " + destino.value; 
    cue.innerHTML += "Cuenta de " + destino.value + ": " + cuenta.value; 
    cueF.innerHTML += "Cuenta del destinatario: " + ctaFin.value; 
    bank.innerHTML += "Banco del destinatario: " + banco.value; 
    cant.innerHTML += "Monto enviado: $ " + cantidad.value; 
    }
    else if((cuenta.value < max && cuenta.value >= min)&& (ctaFin.value < max && ctaFin.value >= min))
    {
        alert("Recuerde que el monto mínimo es $ 10 pesos y el máximo $ 50.000.000");
    }
    else if((cantidad.value <= montomax && cantidad.value >= montomin))
    {
        alert("Revise las cuentas ingresadas y digite una válida");
    }
    else
    {
        alert("Verifique que todos los campos estén correctos");
    }
}
