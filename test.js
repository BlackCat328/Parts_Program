const ary111 = [
    {name:'tom',age:12,fr:[{name:'jerry',age:34}]},
    {name:'bob',age:23,fr:[{name:'hhh',age:14},{name:'gim',age:27}]}
]

function initTreeData(ary) {
    let newAry = ary?.map((item) => {
        return {
          title: item.name,
          key: item.age.toString(),
          children: initTreeData(item.fr),
        };
      });

    return newAry;
}

console.log(initTreeData(ary111))

