import { useEffect } from 'react';
import '../../node_modules/@tomtom-international/web-sdk-maps/dist/maps.css'
import './MapContainer.css'
import tt from '@tomtom-international/web-sdk-maps';

const MapContainer: React.FC = () => {
    useEffect(() => {
        let map = tt.map({
            key: '<your-api-key>',
            container: 'map'
        });
        map.on('load', () => {
            map.resize();
        })
    }, []);
    
    return (
        <div id='map'></div>
    );
};

export default MapContainer;