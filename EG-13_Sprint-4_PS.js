// 01. Isomorphic Strings
var isIsomorphic = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let map1 = {};
    let map2 = {};

    for(let i = 0; i < s.length; i++){
        if(map1[s[i]] && map1[s[i]] !== t[i]){
            return false;
        }

        if(map2[t[i]] && map2[t[i]] !== s[i]){
            return false;
        }

        map1[s[i]] = t[i];
        map2[t[i]] = s[i];
    }

    return true;
};


// 02. Word Pattern
var wordPattern = function(pattern, s) {
    let words = s.split(" ");

    if(pattern.length !== words.length){
        return false;
    }

    let map1 = {};
    let map2 = {};

    for(let i = 0; i < pattern.length; i++){
        let char = pattern[i];
        let word = words[i];

        if(map1[char] && map1[char] !== word){
            return false;
        }

        if(map2[word] && map2[word] !== char){
            return false;
        }

        map1[char] = word;
        map2[word] = char;
    }

    return true;
};


// 03. Find the Difference
var findTheDifference = function(s, t) {
    let result = 0;

    for(let char of s){
        result ^= char.charCodeAt(0);
    }

    for(let char of t){
        result ^= char.charCodeAt(0);
    }

    return String.fromCharCode(result);
};


// 04. Reverse Linked List
var reverseList = function(head) {
    let prev = null;
    let current = head;

    while(current !== null){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};


// 05. Middle of the Linked List
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
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


// 07. Remove Nth Node From End of List
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let first = dummy;
    let second = dummy;

    for(let i = 0; i <= n; i++){
        first = first.next;
    }

    while(first !== null){
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
};


// 08. Find First and Last Position of Element in Sorted Array
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let first = -1;
    let last = -1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target){
            first = mid;
            right = mid - 1;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    left = 0;
    right = nums.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target){
            last = mid;
            left = mid + 1;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return [first, last];
};


// 09. Permutation in String
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length){
        return false;
    }

    let count1 = {};
    let count2 = {};

    for(let char of s1){
        count1[char] = (count1[char] || 0) + 1;
    }

    for(let i = 0; i < s1.length; i++){
        count2[s2[i]] = (count2[s2[i]] || 0) + 1;
    }

    if(JSON.stringify(count1) === JSON.stringify(count2)){
        return true;
    }

    for(let i = s1.length; i < s2.length; i++){
        count2[s2[i]] = (count2[s2[i]] || 0) + 1;

        count2[s2[i - s1.length]]--;

        if(count2[s2[i - s1.length]] === 0){
            delete count2[s2[i - s1.length]];
        }

        let same = true;

        for(let key in count1){
            if(count1[key] !== count2[key]){
                same = false;
                break;
            }
        }

        if(same && Object.keys(count1).length === Object.keys(count2).length){
            return true;
        }
    }

    return false;
};


// 10. Find All Anagrams in a String
var findAnagrams = function(s, p) {
    let result = [];

    if(p.length > s.length){
        return result;
    }

    let count1 = {};
    let count2 = {};

    for(let char of p){
        count1[char] = (count1[char] || 0) + 1;
    }

    for(let i = 0; i < p.length; i++){
        count2[s[i]] = (count2[s[i]] || 0) + 1;
    }

    for(let i = 0; i <= s.length - p.length; i++){
        if(i > 0){
            count2[s[i - 1]]--;

            if(count2[s[i - 1]] === 0){
                delete count2[s[i - 1]];
            }

            let newChar = s[i + p.length - 1];
            count2[newChar] = (count2[newChar] || 0) + 1;
        }

        let same = true;

        for(let key in count1){
            if(count1[key] !== count2[key]){
                same = false;
                break;
            }
        }

        if(same && Object.keys(count1).length === Object.keys(count2).length){
            result.push(i);
        }
    }

    return result;
};
