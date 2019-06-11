export default {
    getApi(){
        const url = 'http://localhost:3000/posts';

        return fetch(url)
            .then(res => res.json())
            .then(data => data)
            .catch(error => {
                console.error(error);
            });
    },
}