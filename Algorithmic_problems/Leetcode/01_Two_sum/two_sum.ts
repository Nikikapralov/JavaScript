

function two_sum(nums: Array<number>, target: number): Array<number> {
    /**
     * Given an array of integers nums and an integer target,
     * return indices of the two numbers such that they add up to the target.
     *
     * My solution:
     * For each number in numbers: O(N)
     *     Find target - number and save it in the map with the index. (O(1))
     *     If number exists in the map: (O(1))
     *         return current index and number index. (O(1))
     *
     * param nums - The input array.
     * param target - The number to sum up to.
     * returns A tuple with the indexes of the two numbers that sum up to the target.
     */

    const map: Map<number, number> = new Map<number, number>();
    const result: Array<number> = new Array<number>();

    for (let i = 0; i < nums.length; ++i){
        const num: number = nums[i];
        const number_to_find: number = target - num;

        if (map.has(number_to_find)){
            result.push(map.get(number_to_find)!);
            result.push(i);
        }

        map.set(num, i);
    }

    return result;
}

console.log(two_sum([2,7,11,15], 9))