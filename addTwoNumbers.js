// Given the following: Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Return the Output


var addTwoNumbers = function(l1, l2) {
    
    var reverseList = function(head) {
    if(head == null || head.next == null) {
        return head
    }}
    
    let reversedToNumber1 = reverseList(l1).join('')
    let reversedToNumber2 = reverseList(l2).join('')
    let addedNum = +reversedToNumber1 + +reversedToNumber2
    return reverseList(Array.from(String(addedNum), Number))
   
};
