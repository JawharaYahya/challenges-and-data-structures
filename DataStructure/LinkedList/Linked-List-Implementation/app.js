const linkedList = require("./linkedList");

const list = new linkedList();

list.add(10);
list.printList();
list.reverse();
list.printList();
list.remove(10);

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.printList();
list.reverse();
list.printList();

list.remove(1);
list.remove(2);
list.remove(3);
list.remove(4);


list.reverse();
list.printList();


list.remove(10);
list.printList();

console.log(list.includes(20));
console.log(list.includes(10));

list.insertAt(15,2);
list.printList();

