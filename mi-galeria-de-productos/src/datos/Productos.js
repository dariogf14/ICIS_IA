import smartwatch from '../assets/smartwatch.jpg';
import auriculares from '../assets/auriculares.jpg';
export const productos = [
  {
    id: 1,
    nombre: 'Smartwatch',
    vendedor: { nombre: 'Apple', rating: 4.8 },
    imagenes: [
      smartwatch
    ],
    enStock: true,
    precio: { moneda: '€', valor: 215.50, enOferta: true },
    caracteristicas: ['GPS', 'Monitor de ritmo cardíaco', 'Resistente al agua)']
  },
  {
    id: 2,
    nombre: 'Auriculares',
    vendedor: { nombre: 'Fnac', rating: 4.5 },
    imagenes: [
      auriculares
    ],
    enStock: false,
    precio: { moneda: '€', valor: 89.90, enOferta: false },
    caracteristicas: ['Cancelación de ruido', 'Bluetooth 5.2', 'Batería 30h']
  },
];