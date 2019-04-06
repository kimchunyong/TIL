# Type Ahead

## 구현에 필요한것들

- fetch를 통해 API를 받아와서 JSON형태로 가공
- 받아온 JSON데이터를 input에 입력할때 해당하는 데이터만 필터링
- 필터링된 문자에 하이라이트 표시

``` javascript
    //API받아오기
    //강의에는 promise로 구현되어있는데 async/ await를 이용해서 구현해봄
    const endpoint ='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    const cities = [];

    _callApi = () => {
        return fetch(endpoint)
            .then(data => data.json())
            .then(json => json)
            .catch(err => console.log(err))
    }

    _getData = async() => {
        const data = await _callApi();
        cities.push(...data);
    }
    _getData();
```

```javascript
    //데이터 필터 구현
    _findMathches = (wordToMatch, cities) => {
        return cities.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex) || place.state.match(regex);
        })
    }
```

```javascript
    //돔의 input의 이벤트 바인딩
    //view
    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    const eventList = ['change', 'keyup'];
    eventList.forEach(event => {
        searchInput.addEventListener(event, _displayMatches);
    });
```

```javascript
    //이벤트에 따른 data를 DOM에 그리기
    _displayMatches = ({ target }) => {
        const matchArray = _findMathches(target.value, cities);
        const html = matchArray.map(place => {
            const regex = new RegExp(target.value, 'gi');
            const cityName = place.city.replace(regex, `<span class="hl">${target.value}</span>`);
            return `
                <li>
                    <span class="name">${cityName}${place.state}</span>
                    <span class="population">${place.population}</span>
                </li>
            `
        }).join("");

        suggestions.innerHTML = html;
    }
```