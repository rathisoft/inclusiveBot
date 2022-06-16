
# Saheli

Saheli is a Web based chat bot, here is that we'll be using voice input and output. For the conversation dialog we'll of course be using Watson Assistant, but we'll also be using Watson Speech To Text to capture the user's voice, and lastly we'll use Watson Text To Speech to playback the chatbots response to the user. The web application itself is built on top of JQuery and Python Flask.

The Flow of the code pattern :

* Make a Watson Speech To Text call using a Web Socket Connection
* Make a Watson Text to Speech REST API call
* Send and receive messages to Watson Assistant using REST APIs
* Integrate Watson Speech To Text, Watson Text To Speech and Watson Assistant in a web app

![architecture](doc/source/images/architecture.png)

## Flow

1. User selects the microphone option on the browser and speaks.
2. The voice is passed on to Watson Speech To Text using a Web Socket connection.
3. The text from Watson Speech to Text is extracted and sent as input to Watson Assistant.
4. The response from Watson Assistant is passed onto Watson Text to Speech.
5. The audio output is sent to the web application and played back to the user, while the UI also displays the same text.

## Included components

* [Watson Speech-to-Text](https://www.ibm.com/watson/services/speech-to-text/): A service that converts human voice into written text.
* [Watson Text-to-Speech](https://www.ibm.com/watson/services/text-to-speech/): Converts written text into natural sounding audio in a variety of languages and voices.
* [Watson Assistant](https://www.ibm.com/watson/ai-assistant/): Create a chatbot with a program that conducts a conversation via auditory or textual methods.

## Featured technologies

* [Flask](http://flask.pocoo.org/): Python is a programming language that lets you work more quickly and integrate your systems more effectively.
* [jQuery](https://jquery.com/): It is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.

## Deployment options

Click on one of the options below for instructions on deploying the app.

|   |   |   |
| - | - | - |
| [![openshift](https://raw.githubusercontent.com/IBM/pattern-utils/master/deploy-buttons/openshift.png)](doc/source/openshift.md) | [![public](https://raw.githubusercontent.com/IBM/pattern-utils/master/deploy-buttons/cf.png)](doc/source/cf.md) | [![local](https://raw.githubusercontent.com/IBM/pattern-utils/master/deploy-buttons/local.png)](doc/source/local.md) |

# Sample output

Follow the script below for a sample conversation with Saheli.

```text
Saheli: Welcome to Saheli. I am a bot who can help in finding the best career options for you regardless of the reason or the length of your break.
User Reply: I am housewife, want to restart my career

Saheli: You have come to the right place. I will help you in guiding the career path, Before that could you let me know few questions ?
What is your educational background ?
User Reply: Degree

Saheli: What kind of jobs are you interested in? Like Software & IT, Data Science, Sales, Marketing
User Reply: Data Science

Saheli: How much work experience do you have ?
User Reply: I am a Fresher

Saheli: Alright! Which cities are you looking for jobs in? Like Mumbai, Pune
User Reply: Mumbai

Saheli: Thank you, we found the details below, based on your technology selection :

you can see the insights of the hiring trends of the technology to have selected :

https://insights.naukri.com/career-tools/skills-trends/demand-for-data-science, https://insights.naukri.com/career-tools/tech-careers/how-to-become-data-analyst

List of Job Recommendations based on your technology selection :

https://insights.naukri.com/career-tools/tech-careers/top-companies-for-data-analyst
User Reply: ok Thanks

Saheli: Have a great day
```

## Links

* [Watson Node.js SDK](https://github.com/watson-developer-cloud/node-sdk)
* [Relevancy Training Demo Video](https://www.youtube.com/watch?v=8BiuQKPQZJk)
* [Relevancy Training Demo Notebook](https://github.com/akmnua/relevancy_passage_bww)
