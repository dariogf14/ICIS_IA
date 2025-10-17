export const productos = [
  {
    id: 1,
    nombre: 'Smartwatch',
    vendedor: { nombre: 'Apple', rating: 4.8 },
    imagenes: [
      'https://picsum.photos/200/200?random=1',
      'https://picsum.photos/200/200?random=2',
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
      'https://picsum.photos/200/200?random=3',
      'https://picsum.photos/200/200?random=4',
    ],
    enStock: false,
    precio: { moneda: '€', valor: 89.90, enOferta: false },
    caracteristicas: ['Cancelación de ruido', 'Bluetooth 5.2', 'Batería 30h']
  },
];