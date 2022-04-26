import camiseta from '@images/camiseta.webp'
import taza from '@images/taza.webp'
import pin from '@images/pin.webp'
import stickers1 from '@images/stickers1.webp'
import stickers2 from '@images/stickers2.webp'
import sudadera from '@images/sudadera.webp'
export default {
    cart: [],
    buyer: [],
    orders: [],
    products: [
      {
        'id': '1',
        'image': camiseta,
        'title': 'Camiseta',
        'price': 25,
        'description': 'Playera negra con el logo de Platzi Conf con cuello redondo',
      },
      {
        'id': '3',
        'image': taza,
        'title': 'Taza',
        'price': 10,
        'description': 'Taza conmemorativa de Platzi Conf color blanco.',
      },
      {
        'id': '4',
        'image': pin,
        'title': 'Pin',
        'price': 4,
        'description': 'Pin de aluminio con el logo de Platzi',
      },
      {
        'id': '5',
        'image': stickers1,
        'title': 'Stickers',
        'price': 2,
        'description': 'Sticker de plástico con el logo de Platzi',
      },
      {
        'id': '6',
        'image': stickers2,
        'title': 'Stickers',
        'price': 2,
        'description': 'Sticker de plástico con logo de Platzi y frase',
      },
      {
        'id': '7',
        'image': sudadera,
        'title': 'Sudadera',
        'price': 35,
        'description': 'Sudadera negra con cordones verdes y logo de Platzi',
      },
    ],
  };