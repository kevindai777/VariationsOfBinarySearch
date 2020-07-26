//Various implementations of binary search





//Finding the element normally
let low = 0
let high = nums.length - 1

while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (nums[mid] == target) {
        return mid
    } else if (nums[mid] > target) {
        high = mid - 1
    } else {
        low = mid + 1
    }
}

//Returning 'low' here would return the first search insert position





//Finding the first position of an element
//(The element DOES have to exist in this case)
let low = 0 
let high = nums.length - 1
let ans = -1

while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (nums[mid] < target) {
        low = mid + 1
    } else if (nums[mid] > target) {
        high = mid - 1
    } else if (nums[mid] == key) {
        ans = mid 
        high = mid - 1
    }
}

//Return -1 if it doesn't exist
return ans

//A variation of finding the first instance of a target (278. First Bad Version)
let low = 0
let high = n

while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    
    if (isBadVersion(mid)) {
        high = mid
    } else {
        low = mid + 1
    }
}





//Finding the last position of an element
//(The element DOES have to exist in this case)
let low = 0 
let high = nums.length - 1
let ans = -1

while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (nums[mid] < target) {
        low = mid + 1
    } else if (nums[mid] > target) {
        high = mid - 1
    } else if (nums[mid] == key) {
        ans = mid 
        low = mid + 1
    }
}

//Return -1 if it doesn't exist
return ans





//Finding the first position of an element (34. Find first and last position of element in sorted array)
//(The element does NOT have to exist in this case)
let low = 0
let high = nums.length - 1

while (low < high) {
    let mid = Math.floor((low + high) / 2)

    if (nums[mid] >= target) {
        high = mid
    } else {
        low = mid + 1
    }
}

if (nums[low] !== target) {
    return -1
} else {
    return low
}





//Find the last position of an element (34. Find first and last position of element in sorted array)
//(The element does NOT have to exist in this case)
let low = 0
let high = nums.length - 1

while (low < high) {
    let mid = Math.floor((low + high) / 2)

    if (nums[mid] <= target) {
        low = mid + 1
    } else {
        high = mid
    }
}

if (nums[low] !== target) {
    return low - 1
} else {
    return low
}
