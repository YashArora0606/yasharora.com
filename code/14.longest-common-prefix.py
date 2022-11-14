#
# @lc app=leetcode id=14 lang=python3
#
# [14] Longest Common Prefix
#

# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        lcp = ""

        min_len = None
        for word in strs:
            if min_len is None or len(word) < min_len:
                min_len = len(word)

        for i in range(min_len):
            cur_letter = None
            for word in strs:
                if cur_letter is not None and word[i] != cur_letter:
                    return lcp    
                cur_letter = word[i]
            lcp += cur_letter

        return lcp
            
        
# @lc code=end

