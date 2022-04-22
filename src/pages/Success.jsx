import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '@styles/pages/Success.scss'

const Success = () => {
    return(
        <main className='success'>
            <h1 className='success__title'>Gracias por tu compra.</h1>
            <p className='success__description'>Tu pedido llegará a su domicilio en 3 días.</p>
            <div className='success__map'>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </main>
    )
}
export {Success}