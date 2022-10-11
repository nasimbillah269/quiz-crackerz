import React from 'react';

const Blog = () => {
    return (
        <div className='lg:flex  text-left mt-12 container mx-auto '>
            <div className=' border p-4 mr-4'>
                <h1 className='text-1xl font-bold'> 1. What is the purpose react router</h1>
                <p>Ans..is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
            </div>
            <div className=' border p-4 mr-4'>
                <h3 className='text-1xl font-bold'>2.How dose cotext api works</h3>
                <p>Ans..The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context is a method to pass props from parent to child component(s), by storing the props in a store The information is first declared in an interface MarksContext, then the interface information is defined in contextmarks. Provider(MarksContextProvider) and consumer(MarksContextConsumer) are defined in this context. </p>
            </div>
            <div className=' border p-4 '>
                <h3 className='text-1xl font-bold'>3.What is UseRef</h3>
                <p>Ans.. The useRef is a hook that allows to directly create a reference to the DOM element in the functional componentThe useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object.</p>
            </div>
        </div>
    );
};

export default Blog;