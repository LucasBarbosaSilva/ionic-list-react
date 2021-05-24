import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonText, IonListHeader } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import api from '../services/api';
import styles from './Tab1.module.css';

type Countrie = {
  name: string,
  capital: string,
  region: string,
  subregion: string,
}



const Tab1: React.FC = () => {
  const [countries, setCountries] = useState([] as Countrie[]) ;
  const [amount, setAmount] = useState(0);

  async function setCountriesList() {
    const resp = await api.get("all", {
      params: {
        _limit: 2,
        _sort: 'name'
      }
    })
    const data = resp.data;
    setCountries(data)
    setAmount(countries.length);
  }
  
  useEffect(() => {setCountriesList()}, []);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Lista de Países
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className={styles.container}>
        <h3>Quantidade de países: {amount}</h3>     
        <IonList 
          inset={true}
        >
          {countries.map((countrie, index) => {
            return(
              <IonItem lines="inset" >
                <IonLabel className={styles.item} >
                  <h5>{countrie.name}</h5> 
                  <h6>{countrie.capital}</h6> 
                  <h6>{countrie.region}</h6>
                  <h6>{countrie.subregion}</h6>
                </IonLabel>
              </IonItem>
            );
          })}            
        </IonList>
          
  
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
