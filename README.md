Online Quiz Application Api

The Quiz App is a simple and interactive application built using Node.js and Express that allows users to create and manage quizzes. Each quiz can contain multiple questions, and each question can have multiple options with one or more correct answers.

This app is designed to demonstrate CRUD operations on quizzes, handle structured JSON data for questions and options, and provide a RESTful API that can be consumed by frontend applications or tested using Postman.

Key features include:

Creating quizzes with unique IDs and names.

Adding multiple questions with multiple options.

Retrieving quizzes and their questions.

Lightweight, easy-to-extend backend suitable for learning or prototyping quiz-based applications.

Instructions On how to Run 

Open terminal and navigate to folder path (in our case its quiz)
Install all require dependencies (npm install if not already)
To start server in terminal write node server.js or nodemon server.js
By default server runs on http://localhost:8080

You can test the API using Postman, curl, or any API client.
Have Provided a text.txt file which has json data can be used to test api in postman

Create-quiz Api
For creating quiz where we give name and id to our quiz 
in postmam set method to POST and giv URL- http://localhost:8080/create-quiz
and in body pass raw json 
{
  "quizId": "1",
  "quizName": "Animal Quiz"
}

once you press send it will give json response "Quiz Created Sucessfully"

#Add Question and options to quiz

For adding question and option to quiz 
in postman set method to POST and give URl - http://localhost:8080/add-question-option
for adding question and option you need to provide id of quiz to which you arr adding ;

{
    "quizId": "1",
        "question": 
      { "id": "q1", "text": "Which animal is known as the King of the Jungle?" }
    ,
    "options": [
      { "optId": "q1o1", "text": "Elephant", "correct": false },
      { "optId": "q1o2", "text": "Lion", "correct": true },
      { "optId": "q1o3", "text": "Tiger", "correct": false },
      { "optId": "q1o4", "text": "Cheetah", "correct": false }
    ]
}

#Getting all question for Particular Quiz

for getting question for particlar quiz you need to give query parameter in url for which quiz question you want
in postman set method to GET and URL - http://localhost:8080/question/:id
It will give question for quiz with id 

output
{
    "question": [
        "What is the capital of India?"
    ]
}

#Submit answer Api 
for submitting answer for particular quiz question you need to give quizId , Array of Question and Array of selected options
in postman set method to POST and URL- http://localhost:8080/submit-answer
it will give response in json about your score and number of question in quiz

in body give data as 
{
    "quizId":"1",
    "questionId":["q1"],
    "optionId":["q1o2"]
}

output

Design Choices and Assumptions
1. Data Structure

Quiz Object: Each quiz has a unique quizId, a quizName, and a questions array.

Question Object: Each question has an id, text, and options.

Options: Options are represented as an array of objects containing optId, text, and correct boolean.

Reason:

Arrays allow easy looping and dynamic addition of questions and options.

Using id and optId ensures uniqueness and easy reference for validations.

2. In-Memory Storage

All quizzes and questions are stored in memory (inside quiz array in server.js).

Assumption:

This is a prototype/demo app; no database is required yet.

If the server restarts, all data is lost.

Reason for Choice:

Simplicity for learning and quick development.

Easy to test API endpoints without setting up a database.

3. RESTful API Design

Each operation (create quiz, add question, get quiz) has its own endpoint.

Uses HTTP status codes properly:

200 for success

400 for bad request

404 for not found

Assumption:

Frontend or API consumer will handle input validation and UI.

Reason for Choice:

Keeps the backend focused on CRUD operations only.

Easier to extend in the future with authentication or database support.




