# Array Cardio2

```javascript
const people = [{
    name: 'Wes',
    year: 1988
}, {
    name: 'Kait',
    year: 1986
}, {
    name: 'Irv',
    year: 1970
}, {
    name: 'Lux',
    year: 2015
}];

const comments = [{
    text: 'Love this!',
    id: 523423
}, {
    text: 'Super good',
    id: 823423
}, {
    text: 'You are the best',
    id: 2039842
}, {
    text: 'Ramen is my fav food ever',
    id: 123523
}, {
    text: 'Nice Nice Nice!',
    id: 542328
}];
```

Array.prototype.some() // is at least one person 19 or older?
```javascript
const isAdult = people.some((person) => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});

console.log({isAdult});
```
Array.prototype.every() // is everyone 19 or older?

```javascript
const allAdult = people.every(person => {
    (new Date()).getFullYear() - person.year >= 19
})

console.log({allAdult});
```

Find is like filter, but instead returns just the one you are looking for
find the comment with the ID of 823423
```javascript
const findId = comments.filter(comment => {
    if (comment.id === 823423) {
        return true;
    }
});

console.log(findId);
```

Find the comment with this ID
```javascript
const index = comments.findIndex(comment => {
    return comment.id === 823423;
})
```
delete the comment with the ID of 823423

```javascript
const newComments = [
    ...comments.slice(0,index);
    ...comments.slice(index + 1);
]
```

