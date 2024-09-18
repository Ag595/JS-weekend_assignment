// ex.1.1 --------------------------------
function boolToWord(bool) {
    return bool ? "Yes" : "No";
}
console.log(boolToWord(true));  
console.log(boolToWord(false)); 

// ex.2 --------------------------------
function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
  }
  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));  
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));  

// ex 2.2 -------------------------------
function binaryArrayToNumber(arr) {
    return parseInt(arr.join(''), 2);
  }
  
  console.log(binaryArrayToNumber([0, 0, 0, 1]));  
  console.log(binaryArrayToNumber([0, 0, 1, 0]));  
  console.log(binaryArrayToNumber([0, 1, 0, 1]));  
  console.log(binaryArrayToNumber([1, 0, 0, 1]));  
  console.log(binaryArrayToNumber([0, 1, 1, 0]));  
  console.log(binaryArrayToNumber([1, 1, 1, 1]));  
  console.log(binaryArrayToNumber([1, 0, 1, 1]));  

  // ex 2.3 -----------------------------
  function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);
    
    if (Number.isInteger(sqrt)) {
      return Math.pow(sqrt + 1, 2);
    } else {
      return -1;
    }
  }
  console.log(findNextSquare(121)); 
  console.log(findNextSquare(625));  
  console.log(findNextSquare(114));  

  // ex 2.4 -----------------------------
  function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
  }
  console.log(findUniq([1, 1, 1, 2, 1, 1])); 
  console.log(findUniq([0, 0, 0.55, 0, 0]));  

  // ex 2.5 ------------------------------
  function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i; 
    }
    return sum;
  }

  console.log(summation(2));  
  console.log(summation(8));  

  function centuryFromYear(year) {
    return Math.ceil(year / 100);
  }
  
  console.log(centuryFromYear(1705));  
  console.log(centuryFromYear(1900));  
  console.log(centuryFromYear(1601));  
  console.log(centuryFromYear(2000));
  
  // ex 2.7 -----------------------------
  function basicOp(operation, value1, value2) {
    switch(operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return "Invalid operation";
    }
  }
  
  
  console.log(basicOp('+', 4, 7));  
  console.log(basicOp('-', 15, 18)); 
  console.log(basicOp('*', 5, 5));   
  console.log(basicOp('/', 49, 7));  

  // ex 3.1 ------------------------------
  function nb_year(p0, percent, aug, p) {
    let years = 0;
    
    percent = percent / 100;
    while (p0 < p) {

        p0 = p0 + p0 * percent + aug;
        years++; 
    }

    return years; 
}

console.log(nb_year(1500, 5, 100, 5000));     
console.log(nb_year(1500000, 2.5, 10000, 2000000));  
console.log(nb_year(1000, 2, 50, 1200));      

// ex 3.2 -----------------------------------
function number(busStops) {
    let peopleOnBus = 0;

    
    for (let i = 0; i < busStops.length; i++) {
        peopleOnBus += busStops[i][0];
        peopleOnBus -= busStops[i][1];
    }
    return peopleOnBus; 
}

console.log(number([[10, 0], [3, 5], [5, 8]])); 
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])); 
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])); 

// ex 4.1 --------------------------
function fibonacci(n) {
    let a = 0, b = 1, temp;
    
    if (n === 0) return a;
    
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
}
console.log(fibonacci(8));  
console.log(fibonacci(10)); 

// ex 4.2 --------------------------
function tribonacci(signature, n) {
    if (n === 0) return [];
    if (n <= 3) return signature.slice(0, n);
    let result = signature.slice();
    for (let i = 3; i < n; i++) {
        result.push(result[i - 1] + result[i - 2] + result[i - 3]);
    }
     return result;
}

console.log(tribonacci([1, 1, 1], 10)); 
console.log(tribonacci([0, 0, 1], 10)); 
console.log(tribonacci([1, 1, 1], 0)); 

// ex 5.1 ---------------------------
function trimString(str) {
    return str.slice(1, -1);
}
console.log(trimString("Hello"));   
console.log(trimString("JavaScript")); 
console.log(trimString("A")); 

// ex 5.2 ---------------------------
function repeatStr(count, src) {
    return src.repeat(count);
}
console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));

// ex 5.3 ---------------------------
function toCamelCase(str) {
    let words = str.split(/[-_]/);
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    return words.join('');
}
console.log(toCamelCase("the-stealth-warrior")); 
console.log(toCamelCase("The_Stealth_Warrior")); 

// ex 5.4 --------------------------
function toWeirdCase(str) {
    return str
        .split(' ') 
        .map(word => {
            return word
                .split('')
                .map((char, index) => 
                    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
                )
                .join(''); 
        })
        .join(' '); 
}
console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case")); 

// ex 5.5 -------------------------
function abbrevName(name) {
    const words = name.split(' ');
    const initials = words.map(word => word[0].toUpperCase());
    return initials.join('.');
  }
  console.log(abbrevName("Sam Harris"));  
  console.log(abbrevName("Patrick Feenan"));
  
  // ex 5.6 ------------------------
  function maskify(cc) {
    if (cc.length <= 4) {
      return cc;  
    }
    const maskedPart = '#'.repeat(cc.length - 4);  
    const visiblePart = cc.slice(-4);  
    return maskedPart + visiblePart;
  }
  console.log(maskify("4556364607935616"));   
  console.log(maskify("64607935616"));        
  console.log(maskify("1"));                  
  console.log(maskify(""));                   
  console.log(maskify("Skippy"));             
  console.log(maskify("Nananananananananananananananana Batman!"));


  // ex 5.7 --------------------------
  function findShortestWordLength(str) {
    const words = str.split(' ');
    const wordLengths = words.map(word => word.length);
    const shortestLength = Math.min(...wordLengths);
    return shortestLength;
  }
  console.log(findShortestWordLength("Simple given a string of words"));  
  console.log(findShortestWordLength("The quick brown fox jumped over the lazy dog"));  
  console.log(findShortestWordLength("JavaScript is awesome"));  


  // ex 5.8 --------------------------
  function findLongestWords(str) {
    const words = str.split(' ');
    const maxLength = Math.max(...words.map(word => word.length));
    const longestWords = words.filter(word => word.length === maxLength);
    return longestWords;
  }
  console.log(findLongestWords("Simple given a string of words"));
  console.log(findLongestWords("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWords("JavaScript is awesome")); 


  // ex 6.1 -------------------------
  function accum(s) {
    return s
      .split('')  
      .map((char, index) => {
        return char.toUpperCase() + char.toLowerCase().repeat(index);
      })
      .join('-');  
  }
  console.log(accum("abcd")); 
  console.log(accum("RqaEzty"));  
  console.log(accum("cwAt"));


  // ex 6.2 ------------------------
  function countDuplicates(str) {
    const lowerStr = str.toLowerCase();
    const charCount = {};
    for (let char of lowerStr) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    let duplicatesCount = 0;
    for (let key in charCount) {
      if (charCount[key] > 1) {
        duplicatesCount++;
      }
    }
    return duplicatesCount;
  }
  console.log(countDuplicates("abcde"));
  console.log(countDuplicates("aabbcde"));           
  console.log(countDuplicates("aabBcde"));           
  console.log(countDuplicates("indivisibility"));    
  console.log(countDuplicates("Indivisibilities"));  
  console.log(countDuplicates("aA11"));              
  console.log(countDuplicates("ABBA"));


  // ex 6.3 ---------------------------
  function longest(s1, s2) {
    const combined = s1 + s2;
    const distinctChars = new Set(combined);
    const sortedChars = [...distinctChars].sort().join('');
    return sortedChars;
  }
  const a = "xyaabbbccccdefww";
  const b = "xxxxyyyyabklmopq";
  console.log(longest(a, b));
  const c = "abcdefghijklmnopqrstuvwxyz";
  console.log(longest(c, c)); 

  