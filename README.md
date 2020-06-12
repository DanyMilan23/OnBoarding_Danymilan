# OnBoarding_DanyMilan

Este es un OnBoarding dinamico, el cual permite crear onBoardings persoonalizados con gran facilidad

## Getting Started

Para lograr instalar el paquete correctamente se debe tener instalada la ultima version de Node js


### Installing

Para instalar el paquete se necesita ejecutar la siguiente linea de codigo

Say what the step will be

```
npm i onboarding_danymilan
```

Y despues correr el proyecto

```
npx react-native run-android
```

Una vez terminado estos pasos ya esta lista la libreria para ser importada y trabajada en ella

### Implementacion

El import se debe realizar de la siguiente manera

```
import MyOnboarding from 'onboarding_danymilan/src';
```

## Ejemplo

De esta manera se debe cargar la data y enviar la funcion de ser necesario

```
const data = [
  {
    title: 'Confianza 2',
    text: 'Lo mejor en medicina.\nEn sus manos',
    imagen: Imagen.LOGO,
    color: '#F07243',
  },
  {
    title: 'Informacion',
    text: 'Toda la informacion a su alcance',
    imagen:Imagen.LOGO,
    color: '#F07243',
  },
  {
    title: 'Interaccion',
    text: 'Interacciones en tiempo real',
    imagen:Imagen.LOGO,
    color: '#F07243',
  },
  {
    title: 'Interaccion',
    text: 'Interacciones en tiempo real',
    imagen:Imagen.LOGO,
    color: '#000000',
  },
];
const App: () => React$Node = () => {
  return (
    <>
      <MyOnboarding data={data} />
    </> 
  );
};
```

## Diseñado

Diseñado por CodeGroup,2020

## Version

0.0.2

## Authors

DanyMilan(Esteban Pereira)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
