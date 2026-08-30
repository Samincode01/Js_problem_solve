// 1. Reverse a String
function reverseString(str){
    return str.split("").reverse().join("");
}


// 2. Find Maximum
function findMax(nums){
    let max = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
        }
    }

    return max;
}


// 3. Check for Palindrome
function isPalindrome(str){
    let reversed = str.split("").reverse().join("");

    return str === reversed;
}


// 4. Sum Array Elements
function sumArray(nums){
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }

    return sum;
}


// 5. Count Vowels
function countVowels(str){
    let count = 0;
    let vowels = "aeiou";

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }

    return count;
}


// 6. Two Sum
function twoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }

    return [];
}


// 7. Flatten a Nested Array
function flattenArray(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flattenArray(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }

    return result;
}


// 8. Group Anagrams
function groupAnagrams(strs){
    let groups = {};

    for(let str of strs){
        let key = str.split("").sort().join("");

        if(!groups[key]){
            groups[key] = [];
        }

        groups[key].push(str);
    }

    return Object.values(groups);
}


// 9. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s){
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for(let right = 0; right < s.length; right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


// 10. Deep Clone an Object
function deepClone(obj){
    if(obj === null || typeof obj !== "object"){
        return obj;
    }

    let clone = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}