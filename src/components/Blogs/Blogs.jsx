import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-slate-100 h-32 pl-40 items-center justify-center mb-20'>
                <h2 className='text-5xl font-bold mt-25 text-center pt-10 '>
                    Blogs
                </h2>
            </div>
            <div className='bg-slate-200 mt-4 p-20 text-left'>
                <h2 className='text-2xl mb-5'>Question Answer Page</h2>
                <p>a. When should you use context API?</p>
                <p>Ans: Context API allows to pass data through a component tree, it works without pass props down manually and easier to share data between components. </p>
                <p>b. What is a custom hook?</p>
                <p>Ans:It allows you to reuse stateful logic across multiple components. It's powerful feature for extracting logic that is typically used by multiple components and turning it into a reusable function. </p>
                <p>c. What is useRef?</p>
                <p>Ans: useRef is a kinds of hook  that returns a mutable ref object. It is used to stored a value or a reference to a component or DOM element. It doesn't affect the rendering of the component, or for accessing and modifying DOM elements directly. </p>
                <p>d. What is useMemo?</p>
                <p>Ans: It a hook that allow to memorize the result of a function. It has dependencies that changed when recomputed. It's really useful for avoid re-computations and improve perpormance.</p>
            </div>
        </div>
    );
};

export default Blogs;