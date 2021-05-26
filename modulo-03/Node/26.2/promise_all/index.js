const promise1 = new Promise((resolve, reject) => {
    try {
        resolve(22);
        // throw new Error('Errrrrrrou!');
    } catch (error) {
        reject(error);
    }
});

// promise1
//     .then(p => console.log(p))
//     .catch(error => { console.error(error); });

const promise2 = new Promise((resolve, reject) => {
	resolve(true);
});
const promise3 = new Promise((resolve, reject) => {
	resolve("Trybe");
});

Promise.all([promise1, promise2, promise3])
    .then((values) => {
	    console.log(values);
    }).catch((error) => {
        console.error(error.message);
    });
