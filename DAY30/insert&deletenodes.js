// Add a node at a specific index
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size || index < 0) return;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  const newNode = new Node(val);
  let current = this.head;

  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }

  newNode.next = current.next;
  current.next = newNode;
  this.size++;
};

// Delete a node at a specific index
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }

  this.size--;
};
