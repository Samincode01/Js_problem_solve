// 01. Check if a Year is a Leap Year
function isLeapYear(year){
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

// 02. Generate Fibonacci Sequence Up to N Terms
function generateFibonacci(n){
    let result = [];

    for(let i = 0; i < n; i++){
        if(i === 0){
            result.push(0);
        }else if(i === 1){
            result.push(1);
        }else{
            result.push(result[i - 1] + result[i - 2]);
        }
    }

    return result;
}

// 03. Calculate the Greatest Common Divisor (GCD)
function findGCD(a, b){
    while(b !== 0){
        let temp = a % b;
        a = b;
        b = temp;
    }

    return a;
}

// 04. Calculate the Least Common Multiple (LCM)
function findLCM(a, b){
    return (a * b) / findGCD(a, b);
}

// 05. Check if a Number is Prime
function isPrime(num){
    if(num < 2){
        return false;
    }

    for(let i = 2; i * i <= num; i++){
        if(num % i === 0){
            return false;
        }
    }

    return true;
}

// 06. Merge Two Sorted Arrays into One Sorted Array
function mergeSortedArrays(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// 07. Find the Median of an Unsorted Array
function findMedian(nums){
    let arr = [...nums];
    arr.sort((a, b) => a - b);

    let middle = Math.floor(arr.length / 2);

    if(arr.length % 2 === 0){
        return (arr[middle - 1] + arr[middle]) / 2;
    }

    return arr[middle];
}

// 08. Find the Second Largest Number in an Array
function findSecondLargest(nums){
    let largest = -Infinity;
    let second = -Infinity;

    for(let num of nums){
        if(num > largest){
            second = largest;
            largest = num;
        }else if(num > second && num !== largest){
            second = num;
        }
    }

    if(second === -Infinity){
        return null;
    }

    return second;
}

// 09. Find Most Frequent Element (Mode) in an Array
function findMode(arr){
    let count = {};
    let mode = arr[0];
    let maxCount = 0;

    for(let item of arr){
        if(count[item] === undefined){
            count[item] = 1;
        }else{
            count[item]++;
        }

        if(count[item] > maxCount){
            maxCount = count[item];
            mode = item;
        }
    }

    return mode;
}

// 10. Natural Sorting of Strings with Embedded Numbers
function naturalSort(arr){
    return [...arr].sort((a, b) => {
        let aParts = a.match(/(\d+|\D+)/g);
        let bParts = b.match(/(\d+|\D+)/g);

        let length = Math.min(aParts.length, bParts.length);

        for(let i = 0; i < length; i++){
            if(aParts[i] === bParts[i]){
                continue;
            }

            let aNum = Number(aParts[i]);
            let bNum = Number(bParts[i]);

            if(!isNaN(aNum) && !isNaN(bNum)){
                return aNum - bNum;
            }

            return aParts[i].localeCompare(bParts[i]);
        }

        return aParts.length - bParts.length;
    });
}
