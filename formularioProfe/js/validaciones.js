//RUT
function validarRut(rut)
{
    if(rut.length >=9 && rut.length <=10)
    {
        return true;
    }
}  

//NOMBRE
function validarNombre(nombre)
{
    if(nombre.length >=3 && nombre.length <=20)
    {
        return true;
    }
}  

//APELLIDO PATERNO
function validarApellidoPaterno(apellido_paterno)
{
    if(apellido_paterno.length >=3 && apellido_paterno.length <=20)
    {
        return true;
    }
}  

//APELLIDO MATERNO
function validarApellidoMaterno(apellido_materno)
{
    if(apellido_materno.length >=3 && apellido_materno.length <=20)
    {
        return true;
    }
}  

//EDAD
function validarEdad(edad)
{
    if(edad >=18 &&  edad<=35)
    {
        return true;
    }
}  

//CELULAR
function validarCelular(celular)
{
    if(celular.length >=9 && celular.length <=12)
    {
        return true;
    }
}  

//GENERO
function validarGenero(genero)
{
    if(genero !="")
    {
        return true;
    }
    return false;
} 


/* comentarios */
