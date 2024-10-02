const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => { // Instanciamento da Promise
        const error = false; // Simulação de erro

        if (error) {
            reject(new Error('Error in login')); // Caso erro
        }

        console.log("user logged!");
        resolve({ email }); // Caso sucesso
    })
};

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        console.log('getUserVideos');
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
        }, 2000);
    })
}

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        console.log('getVideoDetails');
        setTimeout(() => {
            resolve({ title: 'video title'});
        }, 2500);
    })
}

// Consumindo a Promise
loginUserPromise('guil@gmail.com', '123') // Fazendo login do usuário
    .then((user) => getUserVideos(user.email)) // E então, pegando os vídeo dele
    .then((videos) => getVideoDetails(videos[0])) // E então, pegando o detalhe do primeiro vídeo (index[0])
    .then((videoDetails) => console.log({videoDetails})) // E então, exibir os detalhes recebidos pelo resolve
    .catch((error) => console.log({ error })); // tratamento do erro recebido pelo reject