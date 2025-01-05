const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a course Tutorial on the following detail with field as Course Name, Description, Along with chapter name, about, Duration: Category:'Programming', Topic:'Python', Level:'Basic', Duration: 1 hours, NoOfChapters:5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"CourseName\": \"Introduction to Python Programming\",\n  \"Description\": \"A beginner-friendly course covering the fundamental concepts of Python programming.  This course is perfect for individuals with little to no prior programming experience.\",\n  \"Category\": \"Programming\",\n  \"Topic\": \"Python\",\n  \"Level\": \"Basic\",\n  \"Duration\": \"1 hour\",\n  \"NoOfChapters\": 5,\n  \"Chapters\": [\n    {\n      \"ChapterName\": \"Chapter 1: Setting up your Python Environment\",\n      \"About\": \"Learn how to install Python and a suitable code editor (like VS Code or Thonny). We'll cover different operating systems and walk through the installation process step-by-step.\",\n      \"Duration\": \"10 minutes\"\n    },\n    {\n      \"ChapterName\": \"Chapter 2: Basic Syntax and Data Types\",\n      \"About\": \"Introduction to Python syntax, including variables, comments, and basic data types like integers, floats, strings, and booleans. We'll cover basic operations and type conversions.\",\n      \"Duration\": \"15 minutes\"\n    },\n    {\n      \"ChapterName\": \"Chapter 3: Control Flow (if-else statements and loops)\",\n      \"About\": \"Learn how to control the flow of your programs using conditional statements (if, elif, else) and loops (for and while loops).  We'll cover examples and practical exercises.\",\n      \"Duration\": \"20 minutes\"\n    },\n    {\n      \"ChapterName\": \"Chapter 4: Working with Lists and Dictionaries\",\n      \"About\": \"Explore Python's powerful data structures: lists and dictionaries.  We'll cover how to create, manipulate, and access elements within these data structures.\",\n      \"Duration\": \"10 minutes\"\n    },\n    {\n      \"ChapterName\": \"Chapter 5: Functions and Modules\",\n      \"About\": \"Introduction to functions: how to define and call them.  We'll also briefly introduce the concept of modules and how to use pre-built functions.\",\n      \"Duration\": \"5 minutes\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });

    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in Detail on Topic: Python Basic,Chapter: Variables and Data Types, in JSON Format with list or array with field as title, explanation on give chapter in detail, Code Example(Code field in <precode> format) if applicable"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"title\": \"Variables: Naming and Assignment\",\n      \"explanation\": \"In Python, a variable is like a named container that holds a value.  You can think of it as a label attached to a memory location where data is stored. Unlike some other languages, Python is dynamically typed, meaning you don't explicitly declare the data type of a variable. Python infers the type based on the value assigned to it. Variable names must follow certain rules: they can contain letters (a-z, A-Z), numbers (0-9), and underscores (_), but they cannot start with a number. They are also case-sensitive (e.g., 'myVar' is different from 'myvar').  Assignment is done using the equals sign (=).\",\n      \"code_example\": \"<precode># Variable assignment\\nmessage = \\\"Hello, Python!\\\"\\ncount = 10\\nprice = 99.99\\nis_valid = True\\n\\n# Printing the variables\\nprint(message)\\nprint(count)\\nprint(price)\\nprint(is_valid)\\n</precode>\"\n    },\n    {\n      \"title\": \"Data Types: Introduction\",\n      \"explanation\": \"Data types categorize the values a variable can hold. Python has several built-in data types, including:\\n\\n* **Integers (int):** Whole numbers (e.g., 10, -5, 0).\\n* **Floating-Point Numbers (float):** Numbers with decimal points (e.g., 3.14, -2.5, 0.0).\\n* **Strings (str):** Sequences of characters enclosed in single (' ') or double (\\\" \\\") quotes (e.g., 'hello', \\\"Python\\\").\\n* **Booleans (bool):** Represents truth values, either `True` or `False`.\\n* **Lists (list):** Ordered, mutable collections of items enclosed in square brackets `[ ]`. Items can be of different data types.\\n* **Tuples (tuple):** Ordered, immutable collections of items enclosed in parentheses `( )`. Items can be of different data types.\\n* **Dictionaries (dict):** Unordered collections of key-value pairs enclosed in curly braces `{ }`. Keys must be immutable (e.g., strings, numbers, tuples).\\n* **Sets (set):** Unordered collections of unique items enclosed in curly braces `{ }`.\\n\\nPython automatically infers the data type during variable assignment.\",\n      \"code_example\": \"<precode># Examples of different data types\\nmy_int = 10\\nmy_float = 3.14\\nmy_string = \\\"Python is fun!\\\"\\nmy_bool = True\\nmy_list = [1, 2, \\\"three\\\", 4.0]\\nmy_tuple = (5, 6, 7)\\nmy_dict = {\\\"name\\\": \\\"Alice\\\", \\\"age\\\": 30}\\nmy_set = {1, 2, 3}\\n\\n# Printing the data types\\nprint(type(my_int))\\nprint(type(my_float))\\nprint(type(my_string))\\nprint(type(my_bool))\\nprint(type(my_list))\\nprint(type(my_tuple))\\nprint(type(my_dict))\\nprint(type(my_set))</precode>\"\n    },\n    {\n      \"title\": \"Integers (int)\",\n      \"explanation\": \"Integers represent whole numbers without any fractional part. Python can handle very large integers, limited only by available memory. You can perform arithmetic operations on integers such as addition, subtraction, multiplication, division, modulo, and exponentiation.\",\n      \"code_example\": \"<precode>a = 10\\nb = -5\\nc = 0\\n\\nprint(a + b)  # Addition\\nprint(a - b)  # Subtraction\\nprint(a * b)  # Multiplication\\nprint(a / b)  # Division (result is float)\\nprint(a // b) # Floor division (result is int)\\nprint(a % b)  # Modulo (remainder)\\nprint(a ** 2) # Exponentiation</precode>\"\n    },\n    {\n      \"title\": \"Floating-Point Numbers (float)\",\n       \"explanation\": \"Floating-point numbers represent numbers with a fractional part, often stored using a specific form of scientific notation. They are used for decimal values.  Be aware of potential precision issues with floating-point arithmetic due to how computers represent these numbers. Operations are similar to integers (addition, subtraction, multiplication, division etc.)\",\n      \"code_example\": \"<precode>x = 3.14\\ny = -2.5\\nz = 0.0\\n\\nprint(x + y)\\nprint(x * y)\\nprint(x / y)</precode>\"\n    },\n     {\n      \"title\": \"Strings (str)\",\n      \"explanation\": \"Strings are sequences of characters enclosed in single or double quotes. Python strings are immutable, meaning you cannot change a string after it has been created. You can perform various operations on strings like concatenation, slicing, and formatting.\",\n      \"code_example\": \"<precode>str1 = 'hello'\\nstr2 = \\\"world\\\"\\n\\nprint(str1 + \\\" \\\" + str2) # Concatenation\\nprint(str1[0])       # Accessing characters by index\\nprint(str1[1:3])    # Slicing\\nprint(len(str1))      # Length of string\\n\\nname = \\\"Bob\\\"\\nmessage = f\\\"Hello, {name}!\\\"  # F-string formatting (Python 3.6+)\\nprint(message)</precode>\"\n    },\n     {\n      \"title\": \"Booleans (bool)\",\n      \"explanation\": \"Booleans represent truth values, which can be either `True` or `False` (note the capitalization). They are often the result of comparisons or logical operations.\",\n      \"code_example\":\"<precode>a = True\\nb = False\\n\\nprint(a and b) # Logical AND\\nprint(a or b)  # Logical OR\\nprint(not a)   # Logical NOT\\n\\nprint(10 > 5) # Result is True\\nprint(10 == 10) # Result is True\\nprint(10 != 5) # Result is True</precode>\"\n    },\n    {\n      \"title\": \"Type Conversion (Casting)\",\n      \"explanation\": \"You can convert between different data types using type conversion functions. For example, `int()` converts to an integer, `float()` to a floating-point number, `str()` to a string, `bool()` to a boolean.  Be mindful that not all conversions are valid (e.g., trying to convert 'abc' to an integer will cause an error).\",\n      \"code_example\": \"<precode>num_str = \\\"123\\\"\\nnum_int = int(num_str)\\nnum_float = float(num_str)\\n\\nprint(num_int)\\nprint(num_float)\\nprint(str(num_int))\\n\\nprint(bool(1))\\nprint(bool(0))\\nprint(bool(\\\"string\\\"))\\nprint(bool(\\\"\\\"))\\n\\n</precode>\"\n  }\n]\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
  
