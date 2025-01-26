function two_sum_two(numbers: Array<number>, target: number): Array<number> {
    /*
        """
    TWO POINTER SOLUTION
    Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
    find two numbers such that they add up to a specific target number.
    Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
    Return the indices of the two numbers, index1 and index2,
    added by one as an integer array [index1, index2] of length 2.
    The tests are generated such that there is exactly one solution.
    You may not use the same element twice.
    Your solution must use only constant extra space.

    SOLUTION:
    The array is sorted so we can use a two pointers approach.
    We put one at the start and one at the end. We then calculate the sum of
    the values. If its target, we return. If it's bigger, we do -- do the bigger
    pointer to get a smaller value. If its smaller, we do a ++ to get a bigger value.
    Eventually we will reach the 2 numbers that do the sum or the pointers will meet resulting
    in no solution.

    :param nums: An ordered list of integers.
    :return: A list of integers holding the first 2 numbers that sum up to the target.
    """ 
    */
    let left_pointer: number = 0;
    let right_pointer: number = numbers.length - 1;
    let result: Array<number> = [];

    while (left_pointer != right_pointer){
        let left_value: number = numbers[left_pointer];
        let right_value: number = numbers[right_pointer];
        let summed: number = left_value + right_value;

        if (summed == target){
            result.push(left_pointer + 1);
            result.push(right_pointer + 1);
            break;
        }

        else if(summed < target){
            ++left_pointer;
        }

        else {
            --right_pointer;
        }
    }
    return result;
}