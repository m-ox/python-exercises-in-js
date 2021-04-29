// note: I have no intention to keep using cl forever
cl = console.log


// 1. Return the largest of two numbers from a function.
// EX: longest(1, 2) => 2

    const stringyTwo = [1, 25]

    largestNumberFinder = (stringThing) => {
        return Math.max(...stringThing)
    }

    cl("1). " + "The largest of two numbers provided is: " + largestNumberFinder(stringyTwo))


// 2. Write a function that joins two strings, separated by spaces.
// EX: joiner("the", "dog") => "the dog"

    const stringOne = "Hello,"
     const stringTwo = "friend."

    stringThinger = (stringy, stringo) => {
        return stringy + " " + stringo
    }

    cl("2). " + stringThinger(stringOne, stringTwo))


// 3. Combine two arrays by alternatingly taking elements.
// EX: [1, 2, 3], ['a', 'b', 'c'] => [1, 'a', 2, 'b', 3, 'c']
    
    const arr1 = ['A', 'E', 'I', 'O', 'U']
    const arr2 = ['a', 'e', 'i', 'o', 'u']

    const arrayZipper = (arg1, arg2) => (
        
        // I gave up on trying to figure out how to map two arrays together
        // and concat or push or whatever together through each iteration
        arg1[0].concat(arg2[0])
               .concat(arg1[1])
               .concat(arg2[1])
               .concat(arg1[2]
               .concat(arg2[2]))
               .concat(arg1[3]
               .concat(arg2[3]))
               .concat(arg1[4]
               .concat(arg2[4]))
    )

    cl("3). " + "The worst way to do this is: " + arrayZipper(arr1, arr2))


    const alternateRange = (arg1, arg2) => {
        const alternateArray = []

        if(arr1.length === arr2.length){
            for(let i in arr1){
                alternateArray.push(arr1[i], arr2[i]) // stack them together as two actions each iteration
            }
        } else {
            return "Arrays must be of equal length"
        }
    }

    cl(alternateRange(arr1, arr2))

    //const zipper = (arg1, arg2) => {
    //    var newArray = []
//
    //        ewfstgffbdgfmhgdsggfnhj,.kjhk.l,jmhklj
//
    //    return newArray
    //}
//
    //cl(zipper(arr1, arr2))

    ////newArray
            //    .join(arg1
            //            .map((letter, index) => {
            //                join(letter)
            //                }
            //            )
            //        )

            //arg1[0].concat(arg2[0])

            //.map(letter => { letter.join(arg2) } )

    //let run = 0, first = 0, second = 0;
    //const newArr = [];
    //while(run < arr1.length + arr2.length){
    //
    //   if(first > second){
    //      newArr[run] = arr2[second];
    //      second++;
    //
    //   }else{
    //      newArr[run] = arr1[first];
    //      first++;
    //   }
    //
    //   run++;
    //};
    //
    //cl(...newArr);


//4. Title case a string.
//Ex: "the quick brown fox" => "The Quick Brown Fox"

    const familiarCapital = (stringy) => {
        const words = stringy.split(" ");
    
        return words
                    .map(word => word[0]
                                        .toUpperCase() + word
                                        .slice(1))
                                        .join(" ");
      };
      
    const familiarString = "the quick brown fox jumps over the lazy dog";

    cl("4a). " + familiarCapital(familiarString)) 

        // Below is something I didn't write, but it is cool
        const capitalizeWord = (str) => {
            const firstChar = str
                                .charAt(0)
                                .toLocaleUpperCase()
            const rest0fStr = str
                                .substring(1) // returns rest of string
                                .toLocaleLowerCase()
        
            return  `${firstChar}${rest0fStr}`
        } 
        const capitalizeEachWord = (str) => (
            str
                .split(" ")
                .map((word) => capitalizeWord(word))
                .join(" ")
        
        ) // this () business only works if a "single line of code" but 
        
        cl("4b). " + capitalizeEachWord("bleh bleh bleh"))
        
//5. Return longest word in a string.
//Ex: "the boy jumped over the quick brown fox" => "jumped"

    const stringlet = 'how does that guy keep getting out of jail'

    const longestWordFunc = (stringy) => (
        stringlet
                .split(" ")
                .sort(function(a, b){return b.length - a.length})
                .shift(0)
    )
    
    cl("5). " + "The longest word is: " + longestWordFunc(stringlet))