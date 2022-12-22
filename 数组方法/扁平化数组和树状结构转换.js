//扁平化数组转树状结构
const data = [
 { id: 1, name: "a" },
 { id: 12, name: "b", parentId: 1 },
 { id: 121, name: "c", parentId: 12 },
 { id: 122, name: "d", parentId: 12 },
 { id: 2, name: "e" },
 { id: 22, name: "f", parentId: 2 },
 { id: 222, name: "g", parentId: 22 },
 { id: 223, name: "m", parentId: 22 },
];

const result1 = data.reduce((pre, cur, i, arr) => {
 cur.childrens = arr.filter((item) => cur.id === item.parentId);
 if (!cur.parentId) pre.push(cur);
 return pre;
}, []);

console.log(JSON.stringify(result1, null, 2));

//树状结构转扁平数组
const tree = [
 {
  id: 1,
  name: "a",
  childrens: [
   {
    id: 12,
    name: "b",
    parentId: 1,
    childrens: [
     {
      id: 121,
      name: "c",
      parentId: 12,
     },
     {
      id: 122,
      name: "d",
      parentId: 12,
     },
    ],
   },
  ],
 },
 {
  id: 2,
  name: "e",
  childrens: [
   {
    id: 22,
    name: "f",
    parentId: 2,
    childrens: [
     {
      id: 222,
      name: "g",
      parentId: 22,
     },
     {
      id: 223,
      name: "m",
      parentId: 22,
     },
    ],
   },
  ],
 },
];

const result2 = tree.reduce(function (pre, cur, i, arr) {
 pre.push(
  // id: cur.id,
  cur.name.toUpperCase()
  // parentId: cur.parentId
 );
 cur.childrens &&
  cur.childrens.forEach((v) => {
   v.parentId = cur.id;
   arguments.callee(pre, v); //递归
  });
 return pre;
}, []);

console.log(JSON.stringify(result2, null, 2));

function saveIds(ary) {
 let ids = [];
 for (let i = 0; i < ary.length; i++) {
  if (ary[i].childrens && ary[i].childrens.length > 0) {
   console.log("111");
   saveIds(ary[i].childrens);
  } else {
   console.log("222");
   console.log("ary[i].id", ary[i].id);
   ids.push(ary[i].id);
   console.log("ids", ids);
  }
 }
 ids.concat(ids);
 console.log("ids===========", ids);
 return ids;
}

function findTreeArr(arr, newArr) {
 for (let i = 0; i < arr.length; i++) {
  if (!arr[i].childrens && arr[i].id) {
   newArr.push(arr[i].id);
  } else {
   if (arr[i].childrens) {
    findTreeArr(arr[i].childrens, newArr);
   }
  }
 }
 return newArr;
}

console.log("tree", findTreeArr(tree, []));
