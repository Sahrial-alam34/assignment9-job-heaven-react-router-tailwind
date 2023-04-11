import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-slate-100 h-32 pl-40 items-center justify-center mb-20'>
                <h2 className='text-5xl font-bold mt-25 text-center pt-10 '>
                    Blogs
                </h2>
            </div>
            <div className='bg-slate-200 mt-4 text-left p-5'>
                <h2 className='text-2xl mb-5'>Question Answer Page</h2>
                <p>a. When should you use context API?</p>
                <p>Ans: </p>
                <p>b. What is a custom hook?</p>
                <p>c. What is useRef?</p>
                <p>d. What is useMemo?</p>
            </div>
        </div>
    );
};

export default Blogs;