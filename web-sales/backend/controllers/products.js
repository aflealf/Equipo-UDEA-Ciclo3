exports.getProducts = (req,res) => {
    // Llamada a la bd 
    // Calculo de valor unitario por cantidad. Todo lo que sea procesamiento va a estar en el controlador.
    res.status(200).json("Hola a todos");
}