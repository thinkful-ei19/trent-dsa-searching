'use strict';

// The Dewey Decimal system
// Since the books are already in order of decimal number, first step would be to cut the dataset in half and
// check if the number you are looking for is greater or less than the middle. Based on that you can reduce
// the dataset by half and then you can loop through the remaining side until you find the correct decimal, and then
// you check it to the title for each of those until you return the book

class BinarySearchTree {
  constructor (key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  
  insert(key, value) {
    //if the tree is empty then this key being inserted is the root node of the tree
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
  
    //If the tree already exist, then start at the root, 
    //and compare it to the key you want to insert
    // If the new key is less than the node's key 
    //then the new node needs to live in the left-hand branch.
    else if (key < this.key) {
      //if the existing node does not have any left child, 
      //meaning that if the `left` pointer is empty 
      //then we can just instantiate and insert the new node 
      //as the left child of that node, passing `this` as the parent.  
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      //if the node has an existing left child, 
      //then we recursively call the `insert` method 
      //so the node is added further down the tree.
      else {
        this.left.insert(key, value);
      }
    }
    //Similarly, if the new key is greater than the node's key 
    //then you do the same thing, but on the right-hand side.
    else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }
  
  find(key) {
    //if the item is found at the root then return that value
    if (this.key === key) {
      return this.value;
    }
    //if the item you are looking for is less than the root 
    //then follow the left child
    //if there is an existing left child, 
    //then recursively check its left and/or right child
    //until you find the item.
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    //if the item you are looking for is greater than the root 
    //then follow the right child
    //if there is an existing right child, 
    //then recursively check its left and/or right child
    //until you find the item.
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    //You have search the treen and the item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }
  
  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      //If the node only has a left child, 
      //then you replace the node with its left child.  
      else if (this.left) {
        this._replaceWith(this.left);
      }
      //And similarly if the node only has a right child 
      //then you replace it with its right child.
      else if (this.right) {
        this._replaceWith(this.right);
      }
      //If the node has no children then
      //simply remove it and any references to it 
      //by calling "this._replaceWith(null)".
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }
  
  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      }
      else if (this === this.parent.right) {
        this.parent.right = node;
      }
  
      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
  
  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

let bst = new BinarySearchTree();
// 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22
bst.insert(25);
bst.insert(15);
bst.insert(50);
bst.insert(10);
bst.insert(24);
bst.insert(35);
bst.insert(70);
bst.insert(4);
bst.insert(12);
bst.insert(18);
bst.insert(31);
bst.insert(44);
bst.insert(66);
bst.insert(90);
bst.insert(22);

// postOrder(bst);

const stockPrices = new BinarySearchTree();

stockPrices.insert(128);
stockPrices.insert(97);
stockPrices.insert(121);
stockPrices.insert(123);
stockPrices.insert(98);
stockPrices.insert(97);
stockPrices.insert(105);

// preOrder(stockPrices);

function inOrder(bst) {
  if (bst.left) {
    inOrder(bst.left);
  }
  console.log(bst.key);
  if (bst.right ) {
    inOrder(bst.right);
  }
}

function preOrder(bst) {
  console.log(bst.key);
  if (bst.left) {
    preOrder(bst.left);
  }
  if (bst.right) {
    preOrder(bst.right);
  }
}

function postOrder(bst) {
  if (bst.left) {
    postOrder(bst.left);
  }
  if (bst.right) {
    postOrder(bst.right);
  }
  console.log(bst.key);
}

function maxStockProfit(arr) {
  let minVal = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
      index = i;
    }
  }
  let maxVal = arr[index];
  for (let j = index; j < arr.length; j++) {
    if (maxVal < arr[j]) {
      maxVal = arr[j];
    }
  }
  return maxVal - minVal;
}

console.log(maxStockProfit([97,94]));