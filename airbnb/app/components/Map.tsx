'use client'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import React from 'react'
import { MapsProps } from '@/types/components'

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src
})


const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export default function Map({center}: MapsProps) {
  return (
    <MapContainer
    center={center as L.LatLngExpression || [51, -0.09]}
    zoom={center ? 4 : 2}
    scrollWheelZoom={false}
    className='h-[35vh] rounded-lg'
    >
    <TileLayer url={url} attribution={attribution}/>

    {center && (<Marker position={center as L.LatLngExpression}/>)}
    </MapContainer>
  )
}
