import { IonContent, IonPage } from '@ionic/react';
import MapContainer from '../components/MapContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <MapContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
