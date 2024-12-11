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
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
  
