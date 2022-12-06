import logo from '../../assets/logo(4508x3000).png';
import Itens from '../../assets/Itens';

const cesta = {
  top: {
    title: 'Detalhes da Cesta'
  },
  details: {
    name: 'Cesta de Verduras',
    farmName: 'Jenny Jack Farm',
    description: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
    price: 'R$ 40,00',
    farmLogo: logo,
    buttom: 'Comprar'
  },
  itens: {
    title: 'Itens da cesta',
    list: [
      {
        name: 'Tomate',
        img: Itens.Tomate
      },
      {
        name: 'Abóbora',
        img: Itens.Abóbora
      },
      {
        name: 'Batata',
        img: Itens.Batata
      },
      {
        name: 'Brócolis',
        img: Itens.Brócolis
      },
      {
        name: 'Pepino',
        img: Itens.Pepino
      },
    ]
  }
};

export default cesta;