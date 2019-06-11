export default {
    getApi(){
        const url = 'http://localhost:3000/posts';
        const getData = []; 

        fetch(url)
            .then(res => res.json())
            .then(data => getData.push(...data))
            .catch(error => {
                console.error(error);
            });
        return getData;
    },
}