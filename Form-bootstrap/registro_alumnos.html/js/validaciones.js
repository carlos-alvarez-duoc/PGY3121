
function validarRut(rut)
{
    if(rut.length >=9 && rut.length <=10)
    {
        return true;
    }
}  


function validarNombre(nombre)
{
    if(nombre.length >=3 && nombre.length <=20)
    {
        return true;
    }
}  

function validarApellidoPaterno(apellido_paterno)
{
    if(apellido_paterno.length >=3 && apellido_paterno.length <=20)
    {
        return true;
    }
}  

function validarApellidoMaterno(apellido_materno)
{
    if(apellido_materno.length >=3 && apellido_materno.length <=20)
    {
        return true;
    }
}  

function validarEdad(edad)
{
    if(edad >=18 &&  edad<=35)
    {
        return true;
    }
}  

function validarCelular(celular)
{
    if(celular.length >=9 && celular.length <=12)
    {
        return true;
    }
}  

function validarGenero(genero)
{
    if(genero !="")
    {
        return true;
    }
    return false;
} 


/* comentarios */
