let Node = function () {
  this.value = null;
  this.nextNode = null;
};

let LinkedList = function () {
  this.root = null;

  this.append = function (value) {
    if (this.root == null) {
      this.root = new Node();
      this.root.value = value;
    } else {
      let tempNode = this.root;
      while (tempNode.nextNode != null) {
        tempNode = tempNode.nextNode;
      }
      tempNode.nextNode = new Node();
      tempNode.nextNode.value = value;
    }
  };

  this.prepend = function (value) {
    const tempNode = this.root;
    this.root = new Node();
    this.root.value = value;
    this.root.nextNode = tempNode;
  };

  this.size = function (value) {
    let size = 0;
    let tempNode = this.root;
    while (tempNode != null) {
      size++;
      tempNode = tempNode.nextNode;
    }
    return size;
  };

  this.head = function () {
    return this.root;
  };

  this.tail = function () {
    let tempNode = this.root;
    while (tempNode.nextNode != null) {
      tempNode = tempNode.nextNode;
    }
    return tempNode;
  };

  this.at = function (index) {
    let size = 0;
    let tempNode = this.root;
    while (tempNode != null && size < index) {
      size++;
      tempNode = tempNode.nextNode;
    }
    if (size == index && tempNode != null) {
      return tempNode;
    } else {
      return 'Out of Bounds';
    }
  };

  this.insertAt = function (value, index) {
    let size = 0;
    let nextNode = this.root;
    let prevNode = null;
    while (nextNode != null && size < index) {
      size++;
      prevNode = nextNode;
      nextNode = nextNode.nextNode;
    }
    if (size == index && nextNode != null) {
      //return tempNode;
      let newNode = new Node();
      newNode.value = value;
      if (prevNode != null) {
        prevNode.nextNode = newNode;
      } else {
        this.root = newNode;
      }
      newNode.nextNode = nextNode;
    } else {
      return 'Out of Bounds';
    }
  };

  this.removeAt = function (index) {
    let size = 0;
    let tempNode = this.root;
    let prevNode = null;
    while (tempNode != null && size < index) {
      size++;
      prevNode = tempNode;
      tempNode = tempNode.nextNode;
    }
    if (size == index && tempNode != null) {
      //return tempNode;
      if (prevNode != null) {
        prevNode.nextNode = tempNode.nextNode;
      } else {
        this.root = tempNode.nextNode;
      }
    } else {
      return 'Out of Bounds';
    }
  };

  this.pop = function () {
    if (this.root == null) {
      return 'Empty list';
    } else if (this.root.nextNode == null) {
      let returnNode = this.root;
      this.root = null;
      return returnNode;
    } else {
      let tempNode = this.root;
      let prevNode = null;
      while (tempNode.nextNode != null) {
        prevNode = tempNode;
        tempNode = tempNode.nextNode;
      }
      prevNode.nextNode = null;
      return tempNode;
    }
  };

  this.contains = function (value) {
    let tempNode = this.root;
    if (tempNode.value == value) {
      return true;
    } else {
      while (tempNode.nextNode != null) {
        tempNode = tempNode.nextNode;
        if (tempNode.value == value) {
          return true;
        }
      }
    }
    return false;
  };

  this.find = function (value) {
    let index = 0;
    let tempNode = this.root;
    if (tempNode.value == value) {
      return index;
    } else {
      while (tempNode.nextNode != null) {
        tempNode = tempNode.nextNode;
        index++;
        if (tempNode.value == value) {
          return index;
        }
      }
    }
    return null;
  };

  this.toString = function () {
    let tempNode = this.root;

    if (tempNode != null) {
      console.log(`( ${tempNode.value} )`);
    }
    while (tempNode.nextNode != null) {
      tempNode = tempNode.nextNode;
      console.log(`=> ( ${tempNode.value} )`);
    }
  };
};

ll = new LinkedList();
ll.append(5);
ll.append(6);
ll.prepend(1);
ll.append(7);
console.log(ll.size());
console.log(ll.head());
console.log(ll.tail());
