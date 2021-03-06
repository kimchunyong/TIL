# Array Cardio

```javascript
    const inventors = [{
            first: 'Albert',
            last: 'Einstein',
            year: 1879,
            passed: 1955
        }, {
            first: 'Isaac',
            last: 'Newton',
            year: 1643,
            passed: 1727
        }, {
            first: 'Galileo',
            last: 'Galilei',
            year: 1564,
            passed: 1642
        }, {
            first: 'Marie',
            last: 'Curie',
            year: 1867,
            passed: 1934
        }, {
            first: 'Johannes',
            last: 'Kepler',
            year: 1571,
            passed: 1630
        }, {
            first: 'Nicolaus',
            last: 'Copernicus',
            year: 1473,
            passed: 1543
        }, {
            first: 'Max',
            last: 'Planck',
            year: 1858,
            passed: 1947
        }, {
            first: 'Katherine',
            last: 'Blodgett',
            year: 1898,
            passed: 1979
        }, {
            first: 'Ada',
            last: 'Lovelace',
            year: 1815,
            passed: 1852
        }, {
            first: 'Sarah E.',
            last: 'Goode',
            year: 1855,
            passed: 1905
        }, {
            first: 'Lise',
            last: 'Meitner',
            year: 1878,
            passed: 1968
        }, {
            first: 'Hanna',
            last: 'Hammarström',
            year: 1829,
            passed: 1909
        }];

        const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
```

## 1.1 Array.prototype.filter()
1. Filter the list of inventors for those who were born in the 1500's(Filter를 사용해서 1500년대 태어난 사람을 찾아라.)

```javascript
    const borns = inventors.filter(item => {
        return item.year >= 1500 && item.year < 1600;
    });
    console.log(borns);
```

## 1.2 Array.prototype.map()
2. Give us an array of the inventors' first and last names (array의 첫번째와 마지막이름을 합쳐라.)

```javascript
    const fullName = inventors.map(item => {
        return item.first + '' + item.last;
    });
    console.log(fullName);
```

## 1.3 Array.prototype.sort()
3.Sort the inventors by birthdate, oldest to youngest (정렬해라 태어난 날짜를 내림차순)

```javascript
    const birthdates = inventors.sort((a, b) => {
        if (a.year > b.year) {
            return -1; // a 와 b를 비교해서 a가 b보다 클때 return -1을하면 내림차순으로 정렬
        };
    });
    console.log(birthdates);
```

### 1.4 Array.prototype.reduce()
4. How many years did all the inventors live? 얼마나 많이 살았나 다 합쳐서?
```javascript
    const lives = inventors.reduce((acc, cur) => {
        return acc + (cur.passed - cur.year);
    }, 0);
    console.log(lives);
```

### 1.5 Sort()
5.sort the inventors by years lived 정렬해라 오래 살은 순으로
```javascript
    const liveds = inventors.sort((a, b) => {
        console.log("a:" + (a.passed - a.year), "b:" + (b.passed - b.year));
        if ((a.passed - a.year) > ((b.passed - b.year))) return -1;
    });
    console.log(liveds);
```

## 1.6 create a list of Boulevards in Paris that contain 'de' anywhere in the name

```javascript
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'));
    const de = links
        .map(link => link.textContent)
        .filter(streetName => streetName.includes('de'));
    //["Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard de Rochechouart", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard de la Zone"]
```

## 1.7 sort Exercise
Sort the people alphabetically by last name
```javascript
    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);
```

## 1.8 Reduce Exercise
Sum up the instances of each of these

```javascript
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car',
            'truck'
        ];

    const transportation = data.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});

    console.log(transportation);
```