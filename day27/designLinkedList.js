// Node class for LinkedList
function Node(val) {
  this.val = val;
  this.next = null;
}

// MyLinkedList class
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

// Add a node at the head
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

// Add a node at the tail
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
};

// Get value at index
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  return current.val;
};
