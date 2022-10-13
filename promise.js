

const p = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'avs',
            port: 200,
            status: 'working',
        }
        resolve(backendData);
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
            data.modified = true;
            resolve(data);
        },2000)
    })
})
.then(clientData => {
    console.log('Data recieved', clientData);
    clientData.formatPromis = true;
    return clientData;
})
.then(data => {
    console.log('Modified', data);
})




