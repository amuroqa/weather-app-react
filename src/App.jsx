 import { useEffect, useState } from "react";
 const API_KEY = '9dc4dbbbb4ce79a598d742778cdab7bd'

 function App() {
    const [ciudad, setCiudad]=useState("")
    const [datos, setDatos]=useState({})
    const [sugerencia, setSugerencia]=useState([])
    const [index, setIndex]=useState(-1)
    const [pronostico, setPronostico]=useState([])
    const [favoritos, setFavoritos]=useState(()=>{
    const guardado = localStorage.getItem('favoritos')
    return guardado ? JSON.parse(guardado) : []
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    },[favoritos] )
    
    useEffect(()=>{
        localStorage.setItem('pronostico', JSON.stringify(pronostico))
    },[pronostico])

    const handleChange = async (e) => {
        setCiudad(e.target.value)
        setIndex(-1)

        if(e.target.value.length > 2){
            const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=5&appid=${API_KEY}`)
            const datos = await res.json()
            setSugerencia(datos)  
        }else{
            setSugerencia([])
        }
    }
    const buscar= async()=>{
        setSugerencia([])
        setIndex(-1)
        const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`)
        const respuestaPronostico = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`)
        const datosPronostico =await respuestaPronostico.json()
        const datosJson = await respuesta.json()
        console.log(datosJson)
        setDatos(datosJson)
        setPronostico(datosPronostico)
        }
    
    
    return(
    <div>
        
        <div className="buscador"> 
            <input 
                type="text"
                value={ciudad}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                    setIndex(index + 1)
                    } else if (e.key === 'ArrowUp') {
                    setIndex(index - 1)
                    } else if (e.key === 'Enter' && index >= 0) {
                    setCiudad(sugerencia[index].name)
                    setSugerencia([])
                    setIndex(-1)
                    }
                }}
                />

            {sugerencia.length > 0 && (
                <ul className="sugerencias">
                    {sugerencia.map((item, i) => (
                    <li 
                        key={i} 
                        className={i === index ? 'seleccionada' : ''}
                        onClick={(event) => {
                            event.stopPropagation()
                            setCiudad(item.name)
                            setSugerencia([])
                            setIndex(-1)
                            buscar()
                         }}>
                        {item.name}, {item.country}
                    </li>
                    ))}
                </ul>
)}

            <button onClick={buscar}>buscar</button>
        </div>       
        {datos.main && (
            <div className="tarjeta">
                <div className="tarjeta-header">
                    <h2>Ciudad: {datos.name}</h2>
                    <p>Temperatura {datos.main.temp}°C</p>
                    <p>humedad: {datos.main.humidity} </p>
                    <p>velocidad del viento: {datos.wind.speed} </p>
                    <p>presion: {datos.main.pressure} </p>
                    <p>descripcion: {datos.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png`}/>
                    <button onClick={() => {
                        if(!favoritos.includes(datos.name)) {
                            setFavoritos([...favoritos, datos.name])
                            }
                            
                            setSugerencia([])
                        }}>
                        ❤️ Favorito
                    </button>
                </div>
            </div>)} 
            {favoritos.length > 0 && (
                <div className="favoritos">
                    <h3>Favoritos</h3>
                    <ul>
                    {favoritos.map((fav, i) => (
                        <li key={i} onClick={() => setCiudad(fav)}>
                            {fav}
                            <button
                            onClick={(e)=>{
                                e.stopPropagation();
                                setFavoritos(favoritos.filter((item)=>item !== fav));
                            }} > X

                            </button>
                        </li>
                    ))}
                    </ul>
                </div>
            )}
            {pronostico.list && pronostico.list.slice(0, 5).length>0 &&(
                <div className="pronostico">
                    <h3>pronostico 5 dias</h3>
                    <ul>
                    {pronostico.list.slice(0, 5).map((pro, i) => (
                        <li key={i}>
                            {pro.dt_txt}-{pro.main.temp}°C
                            
                        </li>
                    ))}
                    </ul>
                </div>
            )}
        
    </div>
 )
}
 
export default App
 
 