import React from 'react';

const Faq = () => {
  return (
    <section>
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
        <div className="space-y-4 my-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Web Development?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management. The basic tools involved in web development are programming languages called HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript. At present developers can develop web apps by using more popular web frameworks.</p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Programming?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Programming is how you get computers to solve problems. A computer program consists of code that is executed on a computer to perform particular tasks. This code is written by programmers. Programming is the process of giving machines a set of instructions that describe how a program should be carried out. Programmers will spend their whole careers learning a variety of programming languages and tools so they can effectively build computer programs. Programmers will start by using a code editor or IDE to write what is called source code. This is a collection of code written in a programming language that other programmers can read.. Source code needs to be converted into machine language so machines can understand the instructions and execute the program. This process of converting source code into machine language is known as compiling.</p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Authentication?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Authentication is a term that refers to the process of proving that some fact or some document is genuine. In computer science, this term is typically associated with proving a user’s identity. Usually, a user proves their identity by providing their credentials, that is, an agreed piece of information shared between the user and the system. A well-known example is accessing a user account on a website or a service provider such as Facebook or Gmail. Before you can access your account, you must prove you own the correct login credentials. Services typically present a screen that asks for a username along with a password. Then, they compare the data inserted by the user with the values previously stored in an internal repository.</p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;