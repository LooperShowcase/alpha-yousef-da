let conversationHistory;
conversationHistory = [
  { role: "user", content: "Hi" },
  { role: "assistant", content: "Hi,how can i help you today" },
  {
    role: "system",
    content:
      "I will always give you how happy i am out of 10 but you use this number only when it is relevant ",
  },
];
async function conversationUserAdd(question, happiness) {
  conversationHistory.push({
    role: "user",
    content:
      "My Happiness out of 10: " +
      happiness +
      " . " +
      "My input is: " +
      question,
  });
}
async function conversationAssistanAdd(answer) {
  conversationHistory.push({ role: "assistant", content: answer });
}
async function GPT_talk(question) {
  var data = {
    model: "gpt-3.5-turbo",
    messages: conversationHistory,
  };
  var url = "https://api.openai.com/v1/chat/completions";

  var apikey1 = "sk - UxV7RgGPqruNXG0Mrqz";
  var apikey2 = "fT3BlbkFJE6EHMz";
  var apikey3 = " mSckZaNnUjCSpQ";
  var apiKey = apikey1 + apikey2 + apikey3;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const responseData = await response.json();
      const message = responseData.choices[0].message.content;

      conversationAssistanAdd(message); // Add GPT's response to the    conversation history
      const chatbox = document.getElementById("chatbox");
      const utterance = new SpeechSynthesisUtterance(message); // Create the audio object
      speechSynthesis.speak(utterance); // Play the audio
      const botResponse = generateResponse(userInput);
      const botMessageElement = document.createElement("p");
      botMessageElement.textContent = "Bot: " + botResponse;
      chatbox.appendChild(botMessageElement);
      return message;
    } else {
      console.log("Request failed with status:", response.status);
    }
  } catch (error) {
    console.log("An error occurred:", error);
  }
}
