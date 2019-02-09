import React from "react"
import Mapbox from "../components/mapbox"
import "./map.css"

const Map = (props) => {
	return (
		<div>
			<div id="map">
				<Mapbox {...props} />
			</div>
		</div>
	)
}
export default Map