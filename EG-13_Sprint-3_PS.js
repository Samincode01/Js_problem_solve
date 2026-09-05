// 01. Contains Duplicate
var containsDuplicate = function(nums) {
    let seen = new Set();

    for(let num of nums){
        if(seen.has(num)){
            return true;
        }

        seen.add(num);
    }

    return false;
};


// 02. Move Zeroes
var moveZeroes = function(nums) {
    let index = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[index] = nums[i];
            index++;
        }
    }

    while(index < nums.length){
        nums[index] = 0;
        index++;
    }
};


// 03. Valid Anagram
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let count = {};

    for(let char of s){
        count[char] = (count[char] || 0) + 1;
    }

    for(let char of t){
        if(!count[char]){
            return false;
        }

        count[char]--;
    }

    return true;
};


// 04. Ransom Note
var canConstruct = function(ransomNote, magazine) {
    let count = {};

    for(let char of magazine){
        count[char] = (count[char] || 0) + 1;
    }

    for(let char of ransomNote){
        if(!count[char]){
            return false;
        }

        count[char]--;
    }

    return true;
};


// 05. Majority Element
var majorityElement = function(nums) {
    let count = 0;
    let candidate = 0;

    for(let num of nums){
        if(count === 0){
            candidate = num;
        }

        if(num === candidate){
            count++;
        }else{
            count--;
        }
    }

    return candidate;
};


// 06. 3Sum
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    let result = [];

    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === 0){
                result.push([nums[i], nums[left], nums[right]]);

                while(left < right && nums[left] === nums[left + 1]){
                    left++;
                }

                while(left < right && nums[right] === nums[right - 1]){
                    right--;
                }

                left++;
                right--;
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }
        }
    }

    return result;
};


// 07. Subarray Sum Equals K
var subarraySum = function(nums, k) {
    let count = new Map();
    count.set(0, 1);

    let sum = 0;
    let result = 0;

    for(let num of nums){
        sum += num;

        if(count.has(sum - k)){
            result += count.get(sum - k);
        }

        count.set(sum, (count.get(sum) || 0) + 1);
    }

    return result;
};


// 08. Top K Frequent Elements
var topKFrequent = function(nums, k) {
    let count = {};

    for(let num of nums){
        count[num] = (count[num] || 0) + 1;
    }

    let arr = Object.keys(count);

    arr.sort((a, b) => count[b] - count[a]);

    return arr.slice(0, k).map(Number);
};


// 09. Longest Consecutive Sequence
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;

    for(let num of set){
        if(!set.has(num - 1)){
            let current = num;
            let length = 1;

            while(set.has(current + 1)){
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};


// 10. Sort Colors
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while(mid <= high){
        if(nums[mid] === 0){
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        }else if(nums[mid] === 1){
            mid++;
        }else{
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};
