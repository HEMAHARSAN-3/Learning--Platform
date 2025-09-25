interface Language {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  popularity: number;
  logo: string;
  colorClass: string;
  trending?: boolean;
  useCases: string[];
  advantages: string[];
  syntax: {
    variables: string;
    functions: string;
    loops: string;
    conditionals: string;
  };
  helloWorld: string;
  history: string;
  realWorldApps: string[];
  learningPath: string[];
}

export const languages: Language[] = [
  {
    id: "python",
    name: "Python",
    description: "A versatile, high-level programming language known for its simple syntax and powerful libraries.",
    longDescription: "Python is an interpreted, high-level programming language with dynamic semantics. Its high-level built-in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.",
    difficulty: "Beginner",
    category: "Data Science",
    popularity: 5,
    logo: "🐍",
    colorClass: "bg-python",
    trending: true,
    useCases: ["Web Development", "Data Science", "AI/ML", "Automation", "Scientific Computing"],
    advantages: ["Easy to learn", "Extensive libraries", "Cross-platform", "Active community"],
    syntax: {
      variables: "name = 'Python'",
      functions: "def greet(name):\n    return f'Hello, {name}!'",
      loops: "for i in range(5):\n    print(i)",
      conditionals: "if age >= 18:\n    print('Adult')\nelse:\n    print('Minor')"
    },
    helloWorld: "# Simple Hello World\nprint('Hello, World!')\n\n# Example with user input\n# name = input('Enter your name: ')\n# print(f'Hello, {name}!')",
    history: "Python was created by Guido van Rossum and first released in 1991. It was designed with an emphasis on code readability and a syntax that allows programmers to express concepts in fewer lines of code.",
    realWorldApps: ["YouTube", "Instagram", "Spotify", "Netflix", "Uber"],
    learningPath: ["Basic Syntax", "Data Types", "Control Flow", "Functions", "OOP", "Libraries", "Frameworks"]
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "The programming language of the web, enabling dynamic and interactive web applications.",
    longDescription: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It's characterized by curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    difficulty: "Beginner",
    category: "Web Development",
    popularity: 5,
    logo: "⚡",
    colorClass: "bg-javascript",
    trending: true,
    useCases: ["Web Development", "Mobile Apps", "Desktop Apps", "Server-side Development", "Game Development"],
    advantages: ["Runs everywhere", "Large ecosystem", "Fast development", "No compilation needed"],
    syntax: {
      variables: "let name = 'JavaScript';",
      functions: "function greet(name) {\n  return `Hello, ${name}!`;\n}",
      loops: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
      conditionals: "if (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}"
    },
    helloWorld: "// Simple Hello World\nconsole.log('Hello, World!');\n\n// Example with user input (for Node.js)\n// const readline = require('readline');\n// const rl = readline.createInterface({\n//   input: process.stdin,\n//   output: process.stdout\n// });\n// rl.question('Enter your name: ', (name) => {\n//   console.log(`Hello, ${name}!`);\n//   rl.close();\n// });",
    history: "JavaScript was created by Brendan Eich in 1995 at Netscape. Despite its name, it has no relation to Java. It was initially developed in just 10 days.",
    realWorldApps: ["Facebook", "Netflix", "Airbnb", "WhatsApp", "LinkedIn"],
    learningPath: ["Basic Syntax", "DOM Manipulation", "ES6+", "Async Programming", "Frameworks", "Node.js"]
  },
  {
    id: "java",
    name: "Java",
    description: "A robust, platform-independent programming language widely used in enterprise applications.",
    longDescription: "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It follows the principle of 'write once, run anywhere' (WORA).",
    difficulty: "Intermediate",
    category: "Enterprise",
    popularity: 4,
    logo: "☕",
    colorClass: "bg-java",
    useCases: ["Enterprise Applications", "Android Development", "Web Services", "Desktop Applications"],
    advantages: ["Platform Independent", "Strong Memory Management", "Large Community", "Enterprise Ready"],
    syntax: {
      variables: "String name = \"Java\";",
      functions: "public static String greet(String name) {\n    return \"Hello, \" + name + \"!\";\n}",
      loops: "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}",
      conditionals: "if (age >= 18) {\n    System.out.println(\"Adult\");\n} else {\n    System.out.println(\"Minor\");\n}"
    },
    helloWorld: "import java.util.Scanner;\n\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n        \n        // Example with user input\n        // Scanner scanner = new Scanner(System.in);\n        // System.out.print(\"Enter your name: \");\n        // String name = scanner.nextLine();\n        // System.out.println(\"Hello, \" + name + \"!\");\n        // scanner.close();\n    }\n}",
    history: "Java was originally developed by James Gosling at Sun Microsystems and released in 1995. It was initially called Oak after an oak tree outside Gosling's office.",
    realWorldApps: ["LinkedIn", "Netflix", "Uber", "Airbnb", "Spotify"],
    learningPath: ["Basic Syntax", "OOP Concepts", "Collections", "Exception Handling", "Multithreading", "Frameworks"]
  },
  {
    id: "cpp",
    name: "C++",
    description: "A powerful, low-level programming language used for system programming and game development.",
    longDescription: "C++ is a general-purpose programming language created as an extension of the C programming language. It provides object-oriented programming capabilities and low-level memory manipulation.",
    difficulty: "Advanced",
    category: "System Programming",
    popularity: 4,
    logo: "⚙️",
    colorClass: "bg-cpp",
    useCases: ["System Software", "Game Development", "Embedded Systems", "High-Performance Applications"],
    advantages: ["High Performance", "Memory Control", "Large Standard Library", "Multi-paradigm"],
    syntax: {
      variables: "std::string name = \"C++\";",
      functions: "std::string greet(const std::string& name) {\n    return \"Hello, \" + name + \"!\";\n}",
      loops: "for (int i = 0; i < 5; i++) {\n    std::cout << i << std::endl;\n}",
      conditionals: "if (age >= 18) {\n    std::cout << \"Adult\" << std::endl;\n} else {\n    std::cout << \"Minor\" << std::endl;\n}"
    },
    helloWorld: "#include <iostream>\n#include <string>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    \n    // Example with user input\n    // std::string name;\n    // std::cout << \"Enter your name: \";\n    // std::getline(std::cin, name);\n    // std::cout << \"Hello, \" << name << \"!\" << std::endl;\n    \n    return 0;\n}",
    history: "C++ was developed by Bjarne Stroustrup starting in 1979 at Bell Labs as an enhancement to the C language, originally named 'C with Classes'.",
    realWorldApps: ["Adobe Photoshop", "MySQL", "MongoDB", "Mozilla Firefox", "Unreal Engine"],
    learningPath: ["C Basics", "OOP in C++", "STL", "Memory Management", "Templates", "Advanced Topics"]
  },
  {
    id: "react",
    name: "React",
    description: "A JavaScript library for building user interfaces with component-based architecture.",
    longDescription: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It's maintained by Meta and a community of individual developers and companies.",
    difficulty: "Intermediate",
    category: "Frontend Framework",
    popularity: 5,
    logo: "⚛️",
    colorClass: "bg-react",
    trending: true,
    useCases: ["Web Applications", "Mobile Apps (React Native)", "Desktop Apps", "Progressive Web Apps"],
    advantages: ["Component Reusability", "Virtual DOM", "Large Ecosystem", "Strong Community"],
    syntax: {
      variables: "const name = 'React';",
      functions: "const Greeting = ({ name }) => {\n  return <h1>Hello, {name}!</h1>;\n};",
      loops: "const items = [1, 2, 3, 4, 5];\nitems.map(item => <li key={item}>{item}</li>)",
      conditionals: "const status = age >= 18 ? 'Adult' : 'Minor';"
    },
    helloWorld: "function App() {\n  return (\n    <div>\n      <h1>Hello, World!</h1>\n    </div>\n  );\n}",
    history: "React was created by Jordan Walke at Facebook in 2013. It was first deployed on Facebook's News Feed and later on Instagram before being open-sourced.",
    realWorldApps: ["Facebook", "Netflix", "Instagram", "Uber", "Airbnb"],
    learningPath: ["JavaScript ES6+", "JSX", "Components", "State & Props", "Hooks", "Context API", "Testing"]
  },
  {
    id: "go",
    name: "Go",
    description: "A fast, simple programming language designed for modern software development.",
    longDescription: "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software. It was designed at Google to solve real-world problems at scale.",
    difficulty: "Intermediate",
    category: "Backend",
    popularity: 4,
    logo: "🐹",
    colorClass: "bg-go",
    trending: true,
    useCases: ["Web Services", "Cloud Applications", "DevOps Tools", "Network Programming"],
    advantages: ["Fast Compilation", "Concurrency Support", "Simple Syntax", "Strong Standard Library"],
    syntax: {
      variables: "name := \"Go\"",
      functions: "func greet(name string) string {\n    return \"Hello, \" + name + \"!\"\n}",
      loops: "for i := 0; i < 5; i++ {\n    fmt.Println(i)\n}",
      conditionals: "if age >= 18 {\n    fmt.Println(\"Adult\")\n} else {\n    fmt.Println(\"Minor\")\n}"
    },
    helloWorld: "package main\n\nimport (\n    \"fmt\"\n    // \"bufio\"\n    // \"os\"\n)\n\nfunc main() {\n    fmt.Println(\"Hello, World!\")\n    \n    // Example with user input\n    // reader := bufio.NewReader(os.Stdin)\n    // fmt.Print(\"Enter your name: \")\n    // name, _ := reader.ReadString('\\n')\n    // fmt.Printf(\"Hello, %s!\", name)\n}",
    history: "Go was designed at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It was announced in 2009 and became open source.",
    realWorldApps: ["Docker", "Kubernetes", "Prometheus", "Terraform", "Dropbox"],
    learningPath: ["Basic Syntax", "Goroutines", "Channels", "Packages", "Web Development", "Microservices"]
  }
];

export const getLanguageById = (id: string): Language | undefined => {
  return languages.find(lang => lang.id === id);
};

export const getLanguagesByCategory = (category: string): Language[] => {
  return languages.filter(lang => lang.category === category);
};

export const getTrendingLanguages = (): Language[] => {
  return languages.filter(lang => lang.trending);
};