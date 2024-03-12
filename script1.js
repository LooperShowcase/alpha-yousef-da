// Define responses for the chatbot
const responses = {
  hi: ["Hello!", "Hi there!", "Hey!"],
  "how are you": [
    "I'm doing well, thanks!",
    "I'm great, how about you?",
    "All good!",
  ],
  bye: ["Goodbye!", "See you later!", "Bye!"],
  default: [
    "Sorry, I don't understand.",
    "Could you please rephrase that?",
    "I'm not sure I follow.",
  ],
};

// Function to generate a response based on user input
function generateResponse(userInput) {
  userInput = userInput.toLowerCase();
  for (const key in responses) {
    if (userInput.includes(key)) {
      return responses[key][Math.floor(Math.random() * responses[key].length)];
    }
  }
  return responses["default"][
    Math.floor(Math.random() * responses["default"].length)
  ];
}

// Function to send user message and receive response
function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const chatbox = document.getElementById("chatbox");

  // Display user message
  const userMessageElement = document.createElement("p");
  userMessageElement.textContent = "You: " + userInput;
  chatbox.appendChild(userMessageElement);

  // Generate and display bot response
  const botResponse = generateResponse(userInput);
  const botMessageElement = document.createElement("p");
  botMessageElement.textContent = "Bot: " + botResponse;
  chatbox.appendChild(botMessageElement);

  // Clear input field
  document.getElementById("userInput").value = "";
}
