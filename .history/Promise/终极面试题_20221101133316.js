Promise.resolve()
    .then(() => {
        console.log(0);
        return Promise.resolve(4)
    })
    .the()