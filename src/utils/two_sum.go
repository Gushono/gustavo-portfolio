package main

import "fmt"

func twoSum(nums []int, target int) []int {
	numMap := make(map[int]int)
	for i, num := range nums {
		complement := target - num
		if index, ok := numMap[complement]; ok {
			return []int{index, i}
		}
		numMap[num] = i
	}
	return []int{}
}

// Example usage:
// func main() {
// 	nums := []int{2, 7, 11, 15}
// 	target := 9
// 	result := twoSum(nums, target)
// 	fmt.Println(result) // Output: [0 1]
// }

