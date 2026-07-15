const flashcards = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces using reusable components.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript.",
  },
  {
    id: 3,
    question: "Why do we use JSX?",
    answer:
      "JSX makes UI code easier to read and write by combining HTML structure with JavaScript logic.",
  },
  {
    id: 4,
    question: "What is a component?",
    answer: "A component is a reusable piece of UI that returns JSX.",
  },
  {
    id: 5,
    question: "What is the difference between functional and class components?",
    answer:
      "Functional components are simpler and use hooks, while class components use lifecycle methods and classes.",
  },
  {
    id: 6,
    question: "What are props?",
    answer:
      "Props are read-only data passed from a parent component to a child component.",
  },
  {
    id: 7,
    question: "Can a child component modify props?",
    answer:
      "No. Props are immutable and can only be changed by the parent component.",
  },
  {
    id: 8,
    question: "What is state?",
    answer:
      "State is data managed inside a component that can change over time.",
  },
  {
    id: 9,
    question: "What hook is used to create state?",
    answer: "The useState hook.",
  },
  {
    id: 10,
    question: "What happens when state changes?",
    answer: "React re-renders the component to update the UI.",
  },
  {
    id: 11,
    question: "What is rendering?",
    answer:
      "Rendering is the process of displaying UI based on component data.",
  },
  {
    id: 12,
    question: "What is re-rendering?",
    answer:
      "Re-rendering happens when state or props change, causing React to update the UI.",
  },
  {
    id: 13,
    question: "Why do we use keys in lists?",
    answer:
      "Keys help React identify which items have changed, been added, or removed.",
  },
  {
    id: 14,
    question: "What makes a good key?",
    answer: "A unique and stable value like an ID.",
  },
  {
    id: 15,
    question: "Why shouldn't we use array indexes as keys?",
    answer: "Indexes can cause incorrect updates when the list changes.",
  },
  {
    id: 16,
    question: "What does map() do?",
    answer: "map() creates a new array by transforming each element.",
  },
];
export default flashcards;