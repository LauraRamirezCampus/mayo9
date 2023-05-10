//Listar de los reclutas que lleven 2 meses en el programa.
//////////////////////////////////////////////////////////////


//2. Listar los reclutas que se encuentren asociados a un team especifico.
function listarAsTeam1(){
    //lista team 1
    document.getElementById("lstAteam").innerHTML=" ";

    fetch("http://localhost:4001/team/1/reclutas")
    .then(datos => datos.json())
    .then(team1 =>{
        console.log(team1,"que pertenecen al team1");
        for(let i=0; i< team1.length; i++){
        let id=team1[i].id;
        let nombre=team1[i].nombre;
        let edad=team1[i].edad;
        let telefono=team1[i].telefono;
        let email=team1[i].email;
        let direccion=team1[i].direccion;
        let fechaNac=team1[i].fecha_de_nacimiento;
        let identificacion=team1[i].numero_de_identificacion;
        let fechaIn=team1[i].fecha_de_ingreso;
        let team =team1[i].teamId
        console.log(id,"nom");
        document.getElementById("thead").innerHTML=`<tr>
        <td>id</td>
        <td>nombre</td>
        <td>edad</td>
        <td>telefono</td>
        <td>email</td>
        <td>direccion</td>
        <td>fecha de nacimiento</td>
        <td>numero de identificacion</td>
        <td>fecha de ingreso</td>
        <td>Id Team</td>
        <td></td>
    </tr>`
        document.getElementById("lstAteam").innerHTML+=/*html*/`
            <tr>
                <th>${id}</th>
                <th>${nombre}</th>
                <th>${edad}</th>
                <th>${telefono}</th>
                <th>${email}</th>
                <th>${identificacion}</th>
                <th>${direccion}</th>
                <th>${fechaNac}</th>
                <th>${fechaIn}</th>
                <th>${team}</th>
                <th><button type="button" class="btn btn-danger"onclick="eliminar1()">ELIMINAR</button></th>
            </tr>
        
    

        
        `
    }
        

        
    })
}

function listarAsTeam2(){
    //lista team 1
    document.getElementById("lstAteam").innerHTML=" ";

    fetch("http://localhost:4001/team/2/reclutas")
    .then(datos => datos.json())
    .then(team2 =>{
        console.log(team2,"que pertenecen al team1");
        for(let i=0; i< team2.length; i++){
        let id=team2[i].id;
        let nombre=team2[i].nombre;
        let edad=team2[i].edad;
        let telefono=team2[i].telefono;
        let email=team2[i].email;
        let direccion=team2[i].direccion;
        let fechaNac=team2[i].fecha_de_nacimiento;
        let identificacion=team2[i].numero_de_identificacion;
        let fechaIn=team2[i].fecha_de_ingreso;
        let team =team2[i].teamId
        console.log(id,"nom");
        document.getElementById("thead").innerHTML=`<tr>
        <td>id</td>
        <td>nombre</td>
        <td>edad</td>
        <td>telefono</td>
        <td>email</td>
        <td>direccion</td>
        <td>fecha de nacimiento</td>
        <td>numero de identificacion</td>
        <td>fecha de ingreso</td>
        <td>Id Team</td>
        <td></td>
    </tr>`
        document.getElementById("lstAteam").innerHTML+=/*html*/`
            <tr>
                <th>${id}</th>
                <th>${nombre}</th>
                <th>${edad}</th>
                <th>${telefono}</th>
                <th>${email}</th>
                <th>${identificacion}</th>
                <th>${direccion}</th>
                <th>${fechaNac}</th>
                <th>${fechaIn}</th>
                <th>${team}</th>
                <th><button type="button" class="btn btn-danger"onclick="eliminar2()">ELIMINAR</button></th>
            </tr>
        
    

        
        `
    }
        

        
    })
}
//3. Listar módulos que se encuentren asignados a un skill especifico.

function ModulosDeSkill(){
    //lista team 1
    document.getElementById("lstAteam").innerHTML=" ";

    fetch("http://localhost:4001/skill/1/modulo_skill")
    .then(datos => datos.json())
    .then(team =>{
        console.log(team,"que pertenecen al team1");
        for(let i=0; i< team.length; i++){
        let id=team[i].id;
        let nombre=team[i].nombre;
        
        console.log(id,"nom");
        document.getElementById("thead").innerHTML=`<tr>
        <td>id</td>
        <td>nombre</td>
        
    </tr>`
        document.getElementById("lstAteam").innerHTML+=/*html*/`
            <tr>
                <th>${id}</th>
                <th>${nombre}</th>
            
            </tr>
        
    

        
        `
    }
        

        
    })
}


function ModulosDeSkill2(){
    //lista team 1
    document.getElementById("lstAteam").innerHTML=" ";

    fetch("http://localhost:4001/skill/2/modulo_skill")
    .then(datos => datos.json())
    .then(team =>{
        console.log(team,"que pertenecen al team1");
        for(let i=0; i< team.length; i++){
        let id=team[i].id;
        let nombre=team[i].nombre;
        
        console.log(id,"nom");
        document.getElementById("thead").innerHTML=`<tr>
        <td>id</td>
        <td>nombre</td>
        
    </tr>`
        document.getElementById("lstAteam").innerHTML+=/*html*/`
            <tr>
                <th>${id}</th>
                <th>${nombre}</th>
            
            </tr>
        
    

        
        `
    }
        

        
    })
}




//4. Listar los reclutas menores de edad.

function menores(){
    //lista team 1
    document.getElementById("lstAteam").innerHTML=" ";

    fetch("http://localhost:4001/reclutas")
    .then(datos => datos.json())
    .then(team1 =>{
        console.log(team1,"que pertenecen al team1");
        for(let i=0; i< team1.length; i++){
            let id=team1[i].id;
        let nombre=team1[i].nombre;
        let edad=team1[i].edad;
        let telefono=team1[i].telefono;
        let email=team1[i].email;
        let direccion=team1[i].direccion;
        let fechaNac=team1[i].fecha_de_nacimiento;
        let identificacion=team1[i].numero_de_identificacion;
        let fechaIn=team1[i].fecha_de_ingreso;
        let team =team1[i].teamId
            if(edad<18){
                console.log("menor");
                document.getElementById("thead").innerHTML=`<tr>
        <td>id</td>
        <td>nombre</td>
        <td>edad</td>
        <td>telefono</td>
        <td>email</td>
        <td>direccion</td>
        <td>fecha de nacimiento</td>
        <td>numero de identificacion</td>
        <td>fecha de ingreso</td>
        <td>Id Team</td>
    </tr>`
        document.getElementById("lstAteam").innerHTML+=/*html*/`
            <tr>
                <th>${id}</th>
                <th>${nombre}</th>
                <th>${edad}</th>
                <th>${telefono}</th>
                <th>${email}</th>
                <th>${identificacion}</th>
                <th>${direccion}</th>
                <th>${fechaNac}</th>
                <th>${fechaIn}</th>
                <th>${team}</th>
                
            </tr>
        
    

        
        `
                
            }
            else{
                console.log("mayor");
            }
        
        
    }
        

        
    })
}




//5. Listar los módulos estudiados por un determinado recluta.
// function ModEstudiado(){
//     //lista team 1
//     document.getElementById("lstAteam").innerHTML=" ";
//     let idM1=0;
//     let idr1=0;
    
//     fetch("http://localhost:4001/evaluacion")
//     .then(datos => datos.json())
//     .then(team1 =>{
//         console.log(team1,"que pertenecen al team1");
//         for(let i=0; i< team1.length; i++){
//             let idM=team1[i].id_modulo;
//             let idr=team1[i].id_recluta;
//             let idM1=idM;
//             let idr1=idr;
            
       
//         }
        

        
//     })
//     if(idM1="first"){
//         // let idd=team1[i+1].id_recluta;
//         //console.log(team1[i].id_recluta,"esta en first");
        
        
//     fetch("http://localhost:4001/team/1/reclutas")
//     .then(datos => datos.json())
//     .then(team1 =>{
//         console.log(team1,"que pertenecen al team1");
//         for(let i=0; i< team1.length; i++){
//         let id=team1[i].id;
//         let nombre=team1[i].nombre;
//         let edad=team1[i].edad;
//         let telefono=team1[i].telefono;
//         let email=team1[i].email;
//         let direccion=team1[i].direccion;
//         let fechaNac=team1[i].fecha_de_nacimiento;
//         let identificacion=team1[i].numero_de_identificacion;
//         let fechaIn=team1[i].fecha_de_ingreso;
//         let team =team1[i].teamId
//         console.log(id,"nom");
//         document.getElementById("thead").innerHTML=`<tr>
//         <td>id</td>
//         <td>nombre</td>
//         <td>edad</td>
//         <td>telefono</td>
//         <td>email</td>
//         <td>direccion</td>
//         <td>fecha de nacimiento</td>
//         <td>numero de identificacion</td>
//         <td>fecha de ingreso</td>
//         <td>Id Team</td>
//     </tr>`
//         document.getElementById("lstAteam").innerHTML+=/*html*/`
//             <tr>
//                 <th>${id}</th>
//                 <th>${nombre}</th>
//                 <th>${edad}</th>
//                 <th>${telefono}</th>
//                 <th>${email}</th>
//                 <th>${identificacion}</th>
//                 <th>${direccion}</th>
//                 <th>${fechaNac}</th>
//                 <th>${fechaIn}</th>
//                 <th>${team}</th>
//             </tr>
        
    

        
//         `
//     }
//         })
//     }
// }

function eliminar1(){
    

    fetch(`http://localhost:4001/reclutas/1`, {
        method: 'DELETE'
    })
    .then( res => res.json() )
    .then( ()=> location.reload())}

function eliminar2(){
        fetch(`http://localhost:4001/reclutas/2`, {
            method: 'DELETE'
        })
        .then( res => res.json() )
        .then( ()=> location.reload())}
        function eliminar3(){
            fetch(`http://localhost:4001/reclutas/2`, {
                method: 'DELETE'
            })
            .then( res => res.json() )
            .then( ()=> location.reload())}
