import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                return new int[]{numMap.get(complement), i};
            }
            numMap.put(nums[i], i);
        }
        return new int[]{};
    }
}

// Example usage:
// int[] nums = {2, 7, 11, 15};
// int target = 9;
// Solution solution = new Solution();
// int[] result = solution.twoSum(nums, target);
// for (int i : result) {
//     System.out.print(i + " "); // Output: 0 1
// }

