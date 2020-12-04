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
// saída deve ser: "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701"
const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street, order.address.number, order.address.apartment}`);
}
//customerInfo(order);

console.log('código refatorado1:');
//propriedades (chaves) de order entre {} acessando esses valores.
const customerInfo2 = ({name, phoneNumber, address, order}) => {
  console.log(`Olá ${order.delivery.deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${address.street, address.number, address.apartment}`);
}
//customerInfo2(order);

console.log('código refatorado2:');
//const para acessar dados de address
const customerInfo3 = ({name, phoneNumber, address, order}) => {
  const {street, number, apartment} = address;
  const {delivery} = order;
  console.log(`Olá ${delivery.deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${street, number, apartment}`);
}
customerInfo3(order);


//saída deve ser: "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00." 
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);