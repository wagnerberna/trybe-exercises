// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma _Promise_, que é utilizada pelo método `getUserName`.

const users = {
: { name: 'Mark' },
: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}