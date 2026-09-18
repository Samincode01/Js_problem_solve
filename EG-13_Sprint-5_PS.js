// 01. Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    if(nums.length === 0){
        return 0;
    }

    let k = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i - 1]){
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};


// 02. Binary Search
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target){
            return mid;
        }

        if(nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return -1;
};


// 03. Search Insert Position
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target){
            return mid;
        }

        if(nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return left;
};


// 04. Maximum Depth of Binary Tree
var maxDepth = function(root) {
    if(root === null){
        return 0;
    }

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};


// 05. Invert Binary Tree
var invertTree = function(root) {
    if(root === null){
        return null;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};


// 06. Product of Array Except Self
var productExceptSelf = function(nums) {
    let result = new Array(nums.length).fill(1);

    let product = 1;

    for(let i = 0; i < nums.length; i++){
        result[i] = product;
        product *= nums[i];
    }

    product = 1;

    for(let i = nums.length - 1; i >= 0; i--){
        result[i] *= product;
        product *= nums[i];
    }

    return result;
};


// 07. Rotate Array
var rotate = function(nums, k) {
    k = k % nums.length;

    nums.reverse();

    let left = 0;
    let right = k - 1;

    while(left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    left = k;
    right = nums.length - 1;

    while(left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};


// 08. Min Stack
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);

    if(this.minStack.length === 0){
        this.minStack.push(val);
    }else{
        let min = Math.min(val, this.minStack[this.minStack.length - 1]);
        this.minStack.push(min);
    }
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};


// 09. Continuous Subarray Sum
var checkSubarraySum = function(nums, k) {
    let map = new Map();
    map.set(0, -1);

    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];

        let remainder = sum % k;

        if(map.has(remainder)){
            if(i - map.get(remainder) >= 2){
                return true;
            }
        }else{
            map.set(remainder, i);
        }
    }

    return false;
};


// 10. Daily Temperatures
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = [];

    for(let i = 0; i < temperatures.length; i++){
        while(
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ){
            let index = stack.pop();
            result[index] = i - index;
        }

        stack.push(i);
    }

    return result;
};
