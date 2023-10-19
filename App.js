import React, { Suspense } from "react";
import { fetchData } from "./src/fetchData";
import "./src/App.css";


const apiData = fetchData("https://localhost:44368/api/Clientes");

function App() {
const data = apiData.read();
console.log(data)
return (
 <div cLassName ="App">
    <h1>Datos de mis Clientes</h1>
      <Suspense fallback={<div>Loading...</div>}>
       <ul className="card">
        {data?.map((item)=> (
          <li key={item.id_Cliente}> {item.nombre} {item.apellido} {item.direccion} {item.telefono} </li>  
       ))}
     </ul> 
   </Suspense>
  </div>
);
}
export default App;