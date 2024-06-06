import Category from '../models/category';
import Service from '../models/Service';
  

export const CATEGORIES = [
      new Category('c1', 'Toyota Supra', '#5A5A5A'),
      new Category('c2', 'Nissan GTR', '#5A5A5A'),
      new Category('c3', 'Cybertruck', '#5A5A5A'),
      new Category('c4', 'Dodge Durango', '#5A5A5A'),
      new Category('c5', 'Tesla Model S', '#5A5A5A'),
      new Category('c6', 'Chevrolet Silverado', '#5A5A5A'),
      new Category('c7', 'Nissan Tsuru', '#5A5A5A'),
      new Category('c8', 'Ford Raptor', '#5A5A5A'),
  
];

export const SERVICES = [
  new Service(
    's1',
    ['c1' ],
    'toyota supra',
    '',
    '',
    'https://mma.prnewswire.com/media/2188962/2024_GRSupra_45thAnniversaryEd_MikanBlast_H.jpg?p=twitter',
    0,
    [
      
      'El Toyota Supra (en japonés: トヨタ・スープラ Toyota Sūpura) es un automóvil deportivo hatchback de 3 puertas, con motor delantero montado longitudinalmente y de tracción trasera, producido por el fabricante japonés Toyota desde 1978 hasta la actualidad. Hubo una pausa desde 2002 hasta su reinicio en 2019.'
    ],
  
    
  ),
  new Service(
    's2',
    ['c2' ],
    'Nissan GTR',
    '',
    '',
    'https://www.nissan.com.mx/content/dam/Nissan/mexico/assets/gt-r/my24/overview/nissan-2024-gtr_tspec_millennium_jade-overview-tokyo1_running-d.jpg.ximg.l_full_m.smart.jpg',
    0,
    [
      
      'El Nissan GT-R es un automóvil deportivo gran turismo cupé 2+2 con motor delantero montado longitudinalmente y tracción en las cuatro ruedas,​ producido por el fabricante japonés Nissan, lanzado en Japón el 6 de diciembre de 2007, en Estados Unidos el 7 de julio de 2008 y en el resto del mundo en marzo de 2009. '
    ],
  
    
  ),

  new Service(
    's3',
    ['c3' ],
    'Cybertruck',
    '',
    '',
    'https://www.mundodeportivo.com/urbantecno/hero/2023/07/04_desktop.jpg?width=1200',
    0,
    [
      
      'Acelera de 0 a 100 km/h en tan solo 2.7 segundos† en modo bestia, mientras mantienes la estabilidad a alta velocidad. Con la dirección electrónica y la dirección trasera, obtienes el manejo de un deportivo y un mejor radio de giro que la mayoría de los sedanes.'
    ],
  
    
  ),

  new Service(
    's4',
    ['c4' ],
    'Dodge Durango',
    '',
    '',
    'https://www.dodge.com/content/dam/cross-regional/nafta/dodge/es_mx/Modelos/2022/durango-2022/01-inicio/1-1-cover/dodge-durango-cover.jpg.img.1440.jpg',
    0,
    [
      
      'El Dodge Durango es un SUV de tamaño mediano estadounidense, que reemplazó al Ram Charger, y se produce desde 1997 por Dodge, filial de Stellantis, en su planta de Newark, Delaware. Del Durango conocemos, de momento, tres generaciones.'
    ],
  
    
  ),

  new Service(
    's5',
    ['c5' ],
    'Tesla Model S',
    '',
    '',
    'https://img.remediosdigitales.com/6d86d4/ms6/1366_2000.jpg',
    0,
    [
      
      'El Model S está construido desde cero como un vehículo eléctrico, con una arquitectura de alta resistencia y un paquete de baterías colocado en el piso para una increíble protección de los ocupantes y un bajo riesgo de volcadura.'
    ],
  
    
  ),

  new Service(
    's6',
    ['c6' ],
    'Chevrolet Sliverado',
    '',
    '',
    'https://www.chevrolet.com.mx/bypass/master_tools/content/dam/Chevrolet/lat-am/mexico-quantum-tools/nscwebsite/es/home/Pick-ups/Silverado%202024/01_images/silverado-cabina-regular-4x2-v2.jpg',
    0,
    [
      
      'La Chevrolet Silverado es una camioneta de tamaño completo usualmente de 6 pasajeros, fabricada por la división Chevrolet de General Motors en Estados Unidos, Canadá, México y Venezuela. Motor delantero, tracción trasera.'
    ],
  
    
  ),

  new Service(
    's7',
    ['c7' ],
    'Nissan Tsuru',
    '',
    '',
    'https://cdn.buttercms.com/E66G5dgJTEmv8OGAIftV',
    0,
    [
      
      'El Tsuru V16 cuenta con un motor de 1.6 litros y cuatro cilindros, con tecnología de 16 válvulas y sistema de inyección de combustible multipunto. Este motor es capaz de generar una potencia máxima de 105 caballos de fuerza y un torque máximo de 107 libras-pie'
    ],
  
    
  ),

  new Service(
    's8',
    ['c8' ],
    'Ford Raptor',
    '',
    '',
    'https://img.remediosdigitales.com/818b47/ford-ranger-raptor_/1366_2000.jpg',
    0,
    [
      
      'Ford Raptor 2020 está equipada con Terrain Mangement, tecnología que ofrece al conductor la posibilidad de elegir entre seis Modos de Manejo para mejorar la dinámica de conducción en una variedad de condiciones ambientales que incluyen: Normal, Sport, Clima, Lodo, Roca y Carrera en el Desierto.'
    ],
  
    
  ),

  
]