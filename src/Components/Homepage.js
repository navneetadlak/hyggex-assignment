import React from "react";

const Homepage = () => {
  return (
    <div class="bg-gray-100">
      <nav class="bg-white p-6">
        <div class="container mx-auto flex justify-between items-center">
          <a href="#" class="text-xl font-bold text-gray-800">
            HyggeX
          </a>
          <div class="inline-flex items-center space-x-8">
            <a href="#" class="text-gray-600 mx-2">
              Home
            </a>
            <a href="#" class="text-gray-600 mx-2">
              Flashcard
            </a>
            <a href="#" class="text-gray-600 mx-2">
              Contact
            </a>
            <a href="#" class="text-gray-600 mx-2">
              FAQ
            </a>
            <a href="#" class="text-gray-600 mx-2">
              Login
            </a>
          </div>
        </div>
      </nav>
      <div class="p-4 bg-white">
    <nav class="text-gray-500">
        <ul class="flex">
            <li>
                <a href="#" class="text-blue-600">Flashcard</a>
            </li>
            <li class="mx-2">
                <span>></span>
            </li>
            <li>
                <a href="#" class="text-blue-600">Mathematics</a>
            </li>
            <li class="mx-2">
                <span>></span>
            </li>
            <li>
                <a href="#" class="text-blue-600">Relation and Function</a>
            </li>
        </ul>
    </nav>
</div>

      <div class="container mx-auto p-6 ">
        <div class="bg-white p-6 rounded shadow ">
        <h2 class="text-2xl font-bold text-blue-900">
            Relations and Functions (Mathematics)
          </h2>
          <div class="flex mt-4 justify-center">
            <a href="#" class="text-gray-600 mx-2">
              Study
            </a>
            <a href="#" class="text-gray-600 mx-2">
              Quiz
            </a>
            <a href="#" class="text-gray-600 mx-2">
              Test
            </a>
            <a href="#" class="text-gray-600 mx-2">
              Game
            </a>
            <a href="#" class="text-gray-600 mx-2">
              Others
            </a>
          </div>
          <div class="mt-.2 flex w-712 h-393 items-start justify-center">
          <div 
    style={{
        marginTop: '4em',
        background: 'linear-gradient(223deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)',
        color: 'white',
        padding: '6em',
        borderRadius: '1em',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    }}
>              <p class="text-xl">9 + 6 + 7x - 2x -3</p>
            </div>
            </div>
            <div class="flex justify-between items-center mt-4">
              <p class="text-gray-600">01/10</p>
              <div class="flex">
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                  Prev
                </button>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div>
         
          <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
            Create Flashcard
          </button>
        </div>
        <div class="bg-white p-6 rounded shadow mt-6">
          <h2 class="text-2xl font-bold text-gray-800">FAQ</h2>
          <p class="mt-4 text-gray-600">
            Can education Flashcards be used for all age groups?
          </p>
          <p class="mt-4 text-gray-600">How do education Flashcards work?</p>
          <p class="mt-4 text-gray-600">
            Can education flashcards be used for test preparation?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
