"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  Code2,
  FileText,
  Hash,
  Type,
  Calculator,
  GitCompare,
  Braces,
  Database,
} from "lucide-react";

const topics = [
  {
    id: "variables",
    title: "Variables & Constants",
    description: "Learn about const, let, var and their differences",
    icon: <Hash className="w-5 h-5" />,
    color: "bg-blue-500",
    content: `// Variables and Constants in JavaScript

const accountId = 123312; // always use const as a constant
let accountEmail = "kachua@gmail.com"; // always use let as a variable  
var accountcity = "banglore"; // do not use var as it has scope problems
accountname = "kachua"; // bad way to declare variables

// Key Points:
// • const - cannot be reassigned, use for constants
// • let - block-scoped, preferred for variables
// • var - function-scoped, avoid using (scope issues)
// • Never declare without keyword (creates global variable)

console.table([accountId, accountEmail, accountcity, accountname]);`,
  },
  {
    id: "datatypes",
    title: "Data Types",
    description: "Primitive vs Non-primitive types and typeof operator",
    icon: <Type className="w-5 h-5" />,
    color: "bg-green-500",
    content: `// JavaScript Data Types

// Primitive Types (7 types) - stored in Stack memory
const name = "kachua";           // String
const score = 6969;              // Number  
const isLoggedIn = false;        // Boolean
const tempOutside = null;        // Null (typeof shows "object" - JS quirk)
let value;                       // Undefined
const id = Symbol("123");        // Symbol (for unique identifiers)
const bigNumber = 1029830129n;   // BigInt (for large numbers)

// Non-primitive Types - stored in Heap memory
const myArray = ["Devnish", "twitter", "zero followers"];  // Array
const myObject = { name: "devnish", age: 17 };             // Object
const myFunction = function() { console.log("hello"); };   // Function

// Memory Management:
// Stack (Primitive) - gets copy of value
// Heap (Non-primitive) - gets reference to original object`,
  },
  {
    id: "conversion",
    title: "Type Conversion",
    description: "Converting between different data types",
    icon: <GitCompare className="w-5 h-5" />,
    color: "bg-purple-500",
    content: `// Type Conversion in JavaScript

// String to Number
let score = "31";
let valueInNumber = Number(score);  // 31
let invalidNumber = Number("31abc"); // NaN

// Conversion Rules:
// "33" => 33
// "33abc" => NaN  
// true => 1, false => 0
// null => 0, undefined => NaN

// Number to Boolean
let num1 = 1;     // Boolean(num1) => true
let num2 = 0;     // Boolean(num2) => false
let num3 = -5;    // Boolean(num3) => true

// String to Boolean  
let str1 = "";        // Boolean(str1) => false (empty string)
let str2 = "hello";   // Boolean(str2) => true (non-empty string)

// Tricky Operations:
console.log("1" + 2);      // "12" (string concatenation)
console.log(1 + "2");      // "12" (string concatenation)  
console.log("1" + 2 + 2);  // "122" (left to right)
console.log(1 + 2 + "2");  // "32" (math first, then string)

// Unary + operator converts to number:
console.log(+true);   // 1
console.log(+"");     // 0`,
  },
  {
    id: "comparison",
    title: "Comparison Operators",
    description: "Understanding ==, ===, and comparison quirks",
    icon: <Calculator className="w-5 h-5" />,
    color: "bg-orange-500",
    content: `// Comparison Operators in JavaScript

// Basic Comparisons
console.log(2 > 1);   // true
console.log(2 == 1);  // false  
console.log(2 >= 1);  // true (greater than OR equal to)
console.log(2 != 1);  // true (not equal)

// String to Number Comparison
console.log("2" > 1);   // true (string converted to number)
console.log("02" > 1);  // true

// Null Comparison Quirks
console.log(null > 0);   // false
console.log(null == 0);  // false  
console.log(null >= 0);  // true

// Why? Equality (==) and comparisons (>, <, >=, <=) work differently:
// • Comparisons convert null to 0
// • Equality check doesn't convert null

// String Comparison (lexicographic)
console.log("C" > "B");  // true (Unicode comparison)

// == vs === (Equality vs Strict Equality)
console.log("9" == 9);   // true (type conversion happens)
console.log("9" === 9);  // false (no type conversion)
console.log("" == false); // true (both convert to falsy)
console.log("" === false); // false (different types)`,
  },
  {
    id: "strings",
    title: "Strings & Methods",
    description: "String manipulation and useful methods",
    icon: <FileText className="w-5 h-5" />,
    color: "bg-pink-500",
    content: `// Strings in JavaScript

// String Declaration
const name = "kachua";
const repoCount = 50;

// String Interpolation (Template Literals)
console.log(\`Hello my name is \${name} and my repo count is \${repoCount}\`);

// String Object vs Primitive
const primitiveStr = "hello";        // primitive (stack)
const objectStr = new String("hello"); // object (heap)

// String Methods - Searching
let text = "Devnish is great";
console.log(text.indexOf("i"));        // 4 (first occurrence)
console.log(text.lastIndexOf("t"));    // 15 (last occurrence)  
console.log(text.includes("is"));      // true
console.log(text.startsWith("Devnish")); // true
console.log(text.endsWith("great"));   // true

// String Methods - Modifying
console.log(text.replace("is", "was")); // "Devnwash was great"
console.log(text.slice(0, 6));         // "Devnis"
console.log(text.toLowerCase());       // "devnish is great"
console.log(text.toUpperCase());       // "DEVNISH IS GREAT"
console.log(text.trim());              // removes whitespace
console.log(text.split(" "));          // ["Devnish", "is", "great"]

// Useful Methods
console.log("5".padStart(3, "0"));     // "005"
console.log("5".padEnd(3, "0"));       // "500"
console.log(text.repeat(2));           // repeats string twice`,
  },
  {
    id: "numbers",
    title: "Numbers & Math",
    description: "Working with numbers and Math object methods",
    icon: <Calculator className="w-5 h-5" />,
    color: "bg-indigo-500",
    content: `// Numbers and Math in JavaScript

// Number Declaration
let score = 300;                    // primitive number
let newScore = new Number(32297);   // Number object

// Number Methods
let num = 12345.6789;
console.log(num.toString());        // "12345.6789"
console.log(num.toFixed(2));        // "12345.68" (2 decimal places)
console.log(num.toPrecision(6));    // "12345.7" (6 total digits)
console.log(num.toExponential(2));  // "1.23e+4"

// Number Properties
console.log(Number.MAX_VALUE);      // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);      // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NaN);            // NaN

// Number Validation
console.log(Number.isNaN(num));     // false
console.log(Number.isFinite(num));  // true  
console.log(Number.isInteger(num)); // false
console.log(Number.parseInt("42px")); // 42
console.log(Number.parseFloat("42.42px")); // 42.42

// Math Object Methods
console.log(Math.abs(-7));          // 7 (absolute value)
console.log(Math.round(4.6));       // 5 (round to nearest)
console.log(Math.ceil(4.2));        // 5 (round up)
console.log(Math.floor(4.8));       // 4 (round down)
console.log(Math.min(1, 2, 3));     // 1
console.log(Math.max(1, 2, 3));     // 3
console.log(Math.random());         // random 0-1
console.log(Math.pow(2, 3));        // 8 (2^3)
console.log(Math.sqrt(16));         // 4`,
  },
  {
    id: "memory",
    title: "Memory Management",
    description: "Stack vs Heap memory and how data is stored",
    icon: <Database className="w-5 h-5" />,
    color: "bg-teal-500",
    content: `// Memory Management in JavaScript

// Stack Memory (Primitive Types)
// - Stores actual values
// - Creates copies when assigned
let userEmail = "user@gmail.com";
let anotherUserEmail = userEmail;  // Gets a COPY
anotherUserEmail = "another@gmail.com";

console.log(userEmail);        // "user@gmail.com" (unchanged)
console.log(anotherUserEmail); // "another@gmail.com"

// Heap Memory (Non-primitive Types)  
// - Stores references to objects
// - Multiple variables can reference same object
let user = {
  email: "pawan@gmail.com",
  age: 34
};

let user2 = user;  // Gets REFERENCE to same object
user2.email = "rahul@gmail.com";  // Modifies the original object

console.log(user.email);   // "rahul@gmail.com" (changed!)
console.log(user2.email);  // "rahul@gmail.com" (same reference)

// Key Takeaway:
// • Primitives: Pass by VALUE (copy)
// • Objects: Pass by REFERENCE (shared)`,
  },
  {
    id: "more",
    title: "More coming soon...",
    description: "Stay tuned for more JavaScript topics and notes!",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-gray-400",
    content: `// im stopping my journey of javascript as my exam \n has started so i will come back with more of my notes!\n\nHave suggestions? Let us know!`,
  },
];

export default function JavaScriptNotes() {
  const [activeTopicId, setActiveTopicId] = useState("variables");
  const activeTopic =
    topics.find((topic) => topic.id === activeTopicId) || topics[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                JavaScript Learning Notes
              </h1>
              <p className="text-sm text-muted-foreground">
                Comprehensive guide to JavaScript fundamentals
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Topics</CardTitle>
                <CardDescription>
                  Click on any topic to view detailed notes
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <div className="space-y-2 p-4">
                    {topics.map((topic) => (
                      <Button
                        key={topic.id}
                        variant={
                          activeTopicId === topic.id ? "default" : "ghost"
                        }
                        className="w-full justify-start gap-3 h-auto p-3"
                        onClick={() => setActiveTopicId(topic.id)}
                      >
                        <div
                          className={`p-1.5 rounded ${topic.color} text-white`}
                        >
                          {topic.icon}
                        </div>
                        <div className="text-left">
                          <div className="font-medium">{topic.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {topic.description}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${activeTopic.color} text-white`}
                  >
                    {activeTopic.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      {activeTopic.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {activeTopic.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Code Block */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="gap-1">
                        <Code2 className="w-3 h-3" />
                        JavaScript
                      </Badge>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                      <pre className="text-sm text-slate-100">
                        <code>{activeTopic.content}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Key Points Section */}
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                      <Braces className="w-4 h-4" />
                      Key Takeaways
                    </h3>
                    <div className="text-sm text-blue-800 dark:text-blue-200">
                      {getKeyTakeaways(activeTopic.id)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>
              JavaScript Learning Notes • Built with Next.js and Tailwind CSS
            </p>
            <p className="text-sm mt-2">Keep learning and coding! 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function getKeyTakeaways(topicId: string) {
  const takeaways = {
    variables: (
      <ul className="space-y-2">
        <li>
          • Always use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            const
          </code>{" "}
          for values that won't change
        </li>
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">let</code>{" "}
          for variables that will change
        </li>
        <li>
          • Avoid{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">var</code>{" "}
          due to scope issues
        </li>
        <li>• Never declare variables without keywords (creates globals)</li>
      </ul>
    ),
    datatypes: (
      <ul className="space-y-2">
        <li>
          • 7 primitive types: String, Number, Boolean, null, undefined, Symbol,
          BigInt
        </li>
        <li>• 3 non-primitive types: Array, Object, Function</li>
        <li>• Primitives stored in Stack (copy by value)</li>
        <li>• Non-primitives stored in Heap (copy by reference)</li>
      </ul>
    ),
    conversion: (
      <ul className="space-y-2">
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            Number()
          </code>
          ,{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            String()
          </code>
          ,{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            Boolean()
          </code>{" "}
          for explicit conversion
        </li>
        <li>• String + Number = String concatenation</li>
        <li>• Empty string and 0 are falsy values</li>
        <li>• Unary + operator converts to number</li>
      </ul>
    ),
    comparison: (
      <ul className="space-y-2">
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">===</code>{" "}
          for strict equality (no type conversion)
        </li>
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">==</code>{" "}
          allows type conversion (can be tricky)
        </li>
        <li>• Comparison operators convert null to 0</li>
        <li>• String comparison is lexicographic (Unicode based)</li>
      </ul>
    ),
    strings: (
      <ul className="space-y-2">
        <li>
          • Use template literals{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            `${}`
          </code>{" "}
          for string interpolation
        </li>
        <li>• Strings are immutable - methods return new strings</li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            slice()
          </code>
          ,{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            split()
          </code>
          ,{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            replace()
          </code>{" "}
          are commonly used
        </li>
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            trim()
          </code>{" "}
          to remove whitespace
        </li>
      </ul>
    ),
    numbers: (
      <ul className="space-y-2">
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            toFixed()
          </code>{" "}
          for decimal places
        </li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            Math.random()
          </code>{" "}
          generates 0-1 random numbers
        </li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            parseInt()
          </code>{" "}
          and{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            parseFloat()
          </code>{" "}
          for string to number
        </li>
        <li>
          • Always validate numbers with{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            isNaN()
          </code>
        </li>
      </ul>
    ),
    memory: (
      <ul className="space-y-2">
        <li>• Primitives: stored in Stack, passed by value</li>
        <li>• Objects: stored in Heap, passed by reference</li>
        <li>• Modifying object properties affects all references</li>
        <li>
          • Use spread operator{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">...</code>{" "}
          to create copies
        </li>
      </ul>
    ),
  };

  return (
    takeaways[topicId as keyof typeof takeaways] || (
      <p>Key concepts for this topic.</p>
    )
  );
}
