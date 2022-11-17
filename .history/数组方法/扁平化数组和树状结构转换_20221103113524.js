const data = [
    { id: 1, name: 'a' },
    { id: 12, name: 'b', parentId: 1 },
    { id: 121, name: 'c', parentId: 12 },
    { id: 122, name: 'd', parentId: 12 },
    { id: 2, name: 'e' },
    { id: 22, name: 'f', parentId: 2 },
    { id: 222, name: 'g', parentId: 22 },
    { id: 223, name: 'm', parentId: 22 },
]

const result = data.reduce((pre, cur, i, arr) => {
    cur.childrens = arr.filter(item => cur.id === item.parentId)
    if (!cur.parentId) pre.push(cur)
    return pre
}, [])

console.log(JSON);