const somethingWillHappen = () => {
    return new Promise((resolved, reject) => {
        if (true) { 
            resolved('Hey!');}
            else {
                reject('Whoops!');
            }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethimesWillHappen2 = () => {
    return new Promise ((resolved, reject) => {
        if (true) {
            setTimeout(() => {
                resolved('true');
            }, 2000)
        } else {
            const error = new Error('Whoops!');
            reject(error);
        }
    });
}

somethimesWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([somethingWillHappen(), somethimesWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.log(err)
    })