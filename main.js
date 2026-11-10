const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20 },
{ id: 2, nombre: 'Juan', edad: 22 },
{ id: 3, nombre: 'María', edad: 21 },
];

const promesa = new Promise((resolve,reject) => {
    if (estudiantes.id === 1) {
        res(console.log("Nombre: " + estudiantes.nombre));
    } else if(estudiantes.id === 2){
        res1(console.log("Nombre: " + estudiantes.nombre));        
    } else if (estudiantes.id === 3){
        res2(console.log("Nombre: " + estudiantes.nombre));
    } else{
        console.log("Error: NO existe un estudiante con este ID ");
    }

});

promesa.then((res) => console.log("Nombre: " + estudiantes.nombre[0]));
promesa.then((res1)=> console.log("Nombre: " + estudiantes.nombre[1]));
promesa.then((res2)=> console.log("Nombre: " + estudiantes.nombre[2]));
promesa.catch((error)=> console.log("Error: NO existe un estudiante con este I"))
