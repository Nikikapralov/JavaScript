function three_sum(nums: Array<number>): Array<Array<number>> {
    /*
        """
    TWO POINTER SOLUTION
    Given an integer array nums, return all the triplets
    [nums[i], nums[j], nums[k]] such that i != j, i != k,
    and j != k, and nums[i] + nums[j] + nums[k] == 0.

    Notice that the solution set must not contain duplicate triplets.

    SOLUTION:
    We set the first number as fixed and apply the two sum solution to the
    problem. We order the array to make accounting for duplicates easier since
    with the hash map solution we would have to order the array or write a custom
    hash function anyway.

    To get all unique combinations we make use of the sorted array.
    [-4, -1, -1, -1, 0, 1, 2, 2] for example.
    We start at -4. We find combinations.
    We start at -1. We find first combination. -1 -1 2
    We don't break the loop but we continue to find all combinations.
    How? Well the second number was already -1. If we choose -1 again, we end up with 2.
    So we need to move the pointer all the way to a new number: 0. We have -1 0 1
    We then move to 1, to 2 till the end.
    We then encounter -1 for our first number again (2 more times) but we say: Hey, I already have
    all of the combinations, I don't need them again so we skip.
    """
    */
    let result: Array<Array<number>> = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; ++i){
        let first_number = nums[i];
        let target = -first_number;

        if (i >=1 && first_number == nums[i - 1]){
            continue;
        }

        let left_pointer = i + 1;
        let right_pointer = nums.length - 1;
        
        while (left_pointer != right_pointer && left_pointer < nums.length){
            let left_value = nums[left_pointer];
            let right_value = nums[right_pointer];
            let summed = left_value + right_value;

            if (target == summed){
                result.push([first_number, left_value, right_value]);

                while (left_value == nums[left_pointer] && left_pointer != right_pointer) {
                    ++left_pointer;
                }

            } else if (summed < target){
                ++left_pointer;
            } else {
                --right_pointer;
            }
        }
    }

    return result;
}

console.log(...three_sum([-1,0,1,2,-1,-4]))