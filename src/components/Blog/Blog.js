import React from 'react';

const Blog = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Blogs</h2>
        <div className="divide-y divide-gray-700">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">What is CORS?</h3>
            <p className="md:pl-0 md:col-span-7">CORS means <span className="font-semibold">Cross-Origin Resource Sharing</span> CORS is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p className="md:pl-0 md:col-span-7">
              <span>Firebase is a secure authentication system provided by Google. I am using firebase because firebase is secure, firebase has integrated other platform authentication option like Facebook, Github, Twitter etc. Firebase has integrated reliable and extensive realtime database and fast and safe hosting etc.</span>
              <span className="block">
                Firebase alternatives: <em>Supabase, Okta, PingIdentity, Keycloak, Frontegg, Authress, Auth0, Amazon Cognito, OneLogin etc.</em>
              </span>
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">How does private route work?</h3>
            <p className="md:pl-0 md:col-span-7">Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">What is Node? How does Node work?</h3>
            <p className="md:pl-0 md:col-span-7">
              <span>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</span>
              <span className="block">
                Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concept - Asynchronous, Non-blocking I/O.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;