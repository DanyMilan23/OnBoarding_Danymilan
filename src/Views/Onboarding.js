import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import OnboardingFactory from '../Components/OnboardingFactory';

const OnBoarding = ({data, done}) => {
  const [screen, setScreen] = useState(null);
  const [actual, setActual] = useState(0);
  useEffect(() => {
    const iteracion = (datos, done) => {
      let salida = [];
      for (let i = 0; i < datos.length; i++) {
        let sig = i == datos.length - 1 ? 0 : i + 1;
        let status = i == 0 ? true : false;
        salida.push({
          title: datos[i].title,
          text: datos[i].text,
          imagen: datos[i].imagen,
          color: datos[i].color,
          posicion: i,
          siguiente: sig,
          estado: status,
          funcion: done,
        });
      }
      setScreen(salida);
    };
    iteracion(data, done);
  }, [data]);

  return (
    <>
      {screen != null ? (
        <>
          {screen.map(sc => (
            <>
              {sc.posicion == actual ? (
                <OnboardingFactory
                  imagen={sc.imagen}
                  textoPrincipal={sc.title}
                  textSecundario={sc.text}
                  funcionBoton1={done}
                  funcionBoton2={() => {
                    setActual(sc.siguiente);
                  }}
                  color={sc.color}
                />
              ) : null}
            </>
          ))}
        </>
      ) : null}
    </>
  );
};

export default OnBoarding;
