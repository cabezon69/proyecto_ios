import Category from '../models/category';
import Service from '../models/Service';

export const CATEGORIES = [
  new Category('c1', 'Masajes', '#f5428d'),
  new Category('c2', 'Tratamientos Faciales', '#f54242'),
  new Category('c3', 'Paquetes de Día', '#f5a442'),
  new Category('c4', 'Baños Termales', '#f5d142'),
  new Category('c5', 'Terapias Alternativas', '#368dff'),
  new Category('c6', 'Yoga y Meditación', '#41d95d'),
  new Category('c7', 'Tratamientos Corporales', '#9eecff'),
  new Category('c8', 'Spas de Lujo', '#b9ffb0'),
  new Category('c9', 'Spas Románticos', '#ffc7ff'),
  new Category('c10', 'Spas al Aire Libre', '#47fced')
];

export const SERVICES = [
  new Service(
    's1',
    ['c1', 'c2'],
    'Masaje Relajante y Tratamiento Facial Revitalizante',
    'lujoso',
    'simple',
    'https://example.com/relajante-facial.jpg',
    90,
    [
      'Masaje de Cuerpo Completo (60 minutos)',
      'Tratamiento Facial Personalizado (30 minutos)'
    ],
    [
      'Comience con un masaje relajante de cuerpo completo para liberar la tensión muscular.',
      'Luego, disfrute de un tratamiento facial revitalizante que rejuvenecerá su piel.'
    ],
    false,
    true,
    true,
    true
  ),

  // Agrega más servicios de spa aquí...

]