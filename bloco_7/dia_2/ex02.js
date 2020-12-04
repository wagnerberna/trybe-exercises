const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

//saída deve ser: "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."  -Modifique o nome da pessoa compradora. -Modifique o valor total da compra para R$ 50,00.

const orderModifier = ({order, payment}) => {
  const {pizza, drinks, delivery,} = order;
  payment.total = 50;
  delivery.deliveryPerson = 'Luiz Silva';
  
  console.log(`Olá ${delivery.deliveryPerson}, o total do seu pedido de ${Object.keys(pizza)} e ${drinks.coke.type} é R${payment.total}`);
}
orderModifier(order);