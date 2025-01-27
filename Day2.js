    // write code print something like this 543212345

    function printInSequence(){
        function recursive(rows) {
            if (rows === 1) {
              return '1';
            } else {
              return `${rows}` + recursive(rows - 1) + `${rows}`;
            }
          }
          return recursive(rows);
    }

    printInSequence(5)


    /**
     * things done recursivly can also be done iteratably  
     * iteration doesnot take recurusive call stack space hence better space complexity
     * Recursion have both ascending phase and desceding phase it means we go from 5-4-3-2-1 then we come 1-2-3-4-5
     * iteration doesnot have 
     * why use recursion
     * better redeablity
     * easy to write 
     * complex question
     */


    /**
     * ways to identify the base condition
     * 1.last valid input
     * 2.first invalid input
     * 
     */

    //Recurrence Relation
    /**
     * breaking the main problem into sub problem with the same instance
     * F(n)           =    F(n-1)         *    n
     * mainProblem        sub problem
     */


    //Solving recurrsion question
    /**
     * try to create recusrion tree
     */