/* <aside>
💡 **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"

</aside> */

function reverseWords(s) {
    const words = s.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
    
    return words.join(' ');
  }
  
  function reverseWord(word) {
    let reversed = '';
    
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
    
    return reversed;
  }
  const s = "Let's take LeetCode contest";
  console.log(reverseWords(s));  
  