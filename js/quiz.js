const quizArr = [
  {
    id: 1,
    question: "Which of the following is a valid declaration of a char?",
    options: {
      A: "char c = 'utea';",
      B: "char c = 'tea';",
      C: "char c = 'tea';",
      D: "char c = 't';",
    },
    answer: "D",
  },
  {
    id: 2,
    question: "WhiWhich of the following is not a Java keyword?",
    options: {
      A: "static",
      B: "void",
      C: "inteface",
      D: "data",
    },
    answer: "D",
  },
  {
    id: 3,
    question: "What is the default value of a boolean variable in Java?",
    options: {
      A: "true",
      B: "false",
      C: "0",
      D: "1",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "What is the size of an int in Java?",
    options: {
      A: "16 bits;",
      B: "32 bits;",
      C: "64 bits: grid;",
      D: " Depends on the operating system",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "Which of the following is used to create a package in Java?",
    options: {
      A: "package",
      B: "impact",
      C: "namespace",
      D: "class",
    },
    answer: "A",
  },
  {
    id: 6,
    question:
      "Which of the following statements is true about constructors in Java?",
    options: {
      A: " A constructor can return a value.",
      B: "A constructor must have a return type.",
      C: "A constructor can be private.",
      D: "A constructor cannot be overloaded.",
    },
    answer: "C",
  },
  {
    id: 7,
    question: "Which method is used to start a thread execution in Java?",
    options: {
      A: "start()",
      B: "run()",
      C: "execute()",
      D: "int()",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "What is the parent class of all classes in Java?",
    options: {
      A: "object",
      B: "class",
      C: "super",
      D: "base",
    },
    answer: "A",
  },
  {
    id: 9,
    question:
      "Which keyword is used to prevent method overriding in Java?",
    options: {
      A: "static",
      B: "final",
      C: "abstract",
      D: "synchronized",
    },
    answer: "B",
  },
  {
    id: 10,
    question: "Which of the following operators is used for bitwise AND in Java?",
    options: {
      A: "&&",
      B: "&",
      C: "||",
      D: "|",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "Which CSS property is used to create space between the elements of a flex container?",
    options: {
      A: "gap",
      B: "flex-gap",
      C: "flex-space",
      D: "flex-between",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "What is the difference between == and ===?",
    options: {
      A: "== checks for equality and === checks for identity",
      B: "== checks for identity and === checks for equality",
      C: "== and === checks for equality",
      D: "== and === checks for identity",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "What is the correct way to check if a variable is an array?",
    options: {
      A: "Array.isArray(myArray)",
      B: "myArray instanceof Array",
      C: "myArray.isArray()",
      D: "typeof myArray === 'array'",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "What is the correct way to declare a class in javascript?",
    options: {
      A: "class MyClass{}",
      B: "function MyClass(){}",
      C: "new MyClass(){}",
      D: "MyClass: function(){}",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "What is the purpose of the alt attribute in an <img> tag?",
    options: {
      A: "To specify the image URL",
      B: "To provide alternative text for an image",
      C: "To define the image size",
      D: "To specify the image alignment",
    },
    answer: "B",
  },
  {
    id: 16,
    question:
      "What is the correct way to convert a string to a number in javascript?",
    options: {
      A: "parseInt(string)",
      B: "parseFloat(string)",
      C: "Number(string)",
      D: "string - 0",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "Which HTML5 attribute is used to specify that an element should be visible only when it is in full-screen mode?",
    options: {
      A: "allowfullscreen",
      B: "allowfullscreen",
      C: "mozfullscreen",
      D: "webkitfullscreen",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "What is the difference between null and undefined?",
    options: {
      A: "null and undefined are same",
      B: "null is an assignment value and undefined is a default value",
      C: "undefined is an assignment value and null is a default value",
      D: "null is an object and undefined is not an object",
    },
    answer: "B",
  },
  {
    id: 19,
    question:
      "Which of the following elements is used to create an interactive widget for drawing on a web page in HTML5?",
    options: {
      A: "draw",
      B: "svg",
      C: "paint",
      D: "canvas",
    },
    answer: "D",
  },
  {
    id: 20,
    question:
      "Which CSS property is used to specify the space between the border of an element and its content?",
    options: {
      A: "typeof myVariable === 'object'",
      B: "myVariable instanceof Object",
      C: "Object.isObject(myVariable)",
      D: "myVariable.constructor === Object",
    },
    answer: "D",
  },
];
