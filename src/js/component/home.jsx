import React, { useState, useEffect, useRef } from "react";
//  import hooks
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {

	//variable array vacio
	const [myMusic, setMyMusic] = useState([]) //arreglo
	const [musica, setMusica] = useState("")// string
	const myAudio = useRef()

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


	function tocarMusica() {

		myAudio.current.play()
	}

function pausarMusica(){

	myAudio.current.pause()
}






	useEffect(() => {
		obtenerInfo()
	}, [])


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Spotify</h1>
			<ul className="list-group list-group-flush">{
				myMusic.map((deaUna) => {
					return <li onClick={() => { setMusica(deaUna.url) }} className="list-group-item">{deaUna.id}- {deaUna.name}</li>

				})
			}</ul>
			<footer className="d-flex justify-content-around">
				<audio src={"https://assets.breatheco.de/apis/sound/" + musica} ref={myAudio}></audio>
				<i className="fa fa-backward" style={{ color: "#00040a" }}></i>
				<i onClick={() => { tocarMusica() }} className="fa fa-play" style={{ color: "#00060f" }}></i>
				<i onClick={() => { pausarMusica() }} className="fa fa-pause" style={{ color: " #010409" }}></i>
				<i className="fa fa-forward" style={{ color: "#000205" }}></i>
			</footer>
		</div >
	);
};

export default Home;
