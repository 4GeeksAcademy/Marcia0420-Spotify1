import React, { useState, useEffect, useRef } from "react";
//  import hooks
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {

	//variable array vacio
	const [myMusic, setMyMusic] = useState([])

	//try catch
	async function obtenerInfo() {
		try {
			const respuesta = await fetch("https://playground.4geeks.com/apis/fake/sound/songs")
			const datos = await respuesta.json()
			setMyMusic(datos)
			console.log(datos)
		} catch (error) {
			console.log(error)
		}
	}


	useEffect(() => {
		obtenerInfo()
	}, [])


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Spotify</h1>
			<ul className="list-group list-group-flush">{
				myMusic.map((deaUna) =>{ 
					return <li onClick={()=>{}} className="list-group-item">{deaUna.name}</li>	
				})
			}</ul>
			<audio/>
		</div >
	);
};

export default Home;
