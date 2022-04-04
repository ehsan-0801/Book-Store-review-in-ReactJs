import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <h4 className="text-primary fw-bold">What is Context API?</h4>
                        <p>Context API is Introduced in React 16.3 Which actually works like global variable from other programming language concpets.This is an alternative to "prop drilling," which entails passing props from grandma to kid to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management.React.createContext() is all we need. It will provide you a customer and a provider. Provider is a component that supplies the state to its children, as its name indicates. It will contain the "store" and serve as the parent of any components that may require it.</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h4 className="text-primary fw-bold">What is Semantic Tag?</h4>
                        <p>Semantic HTML tags give information about their contents in addition to how they appear on a page. The browser recognizes text encased in the code> element as some kind of coding language right away.Instead of attempting to display the code, the browser recognizes that the text is being used as an example of code in an article or online tutorial.Semantic tags also provide you with a lot more hooks for customizing the text.</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h4 className="text-primary fw-bold">What is inline, Block and Inline-Block?</h4>
                        <p><span className="text-secondary fw-bold">Inline:</span> Inline elements are elements does not start in the new line.An inline element takes up only as much space as is required.</p>
                        <p><span className="text-secondary fw-bold">Block:</span> A block-level element is an HTML element that starts a new line on a web page and spans the whole width of its parent element's available horizontal space. It produces huge content chunks such as paragraphs or page divides. In reality, the majority of HTML components reside at the block level.</p>
                        <p><span className="text-secondary fw-bold">Inline-Block:</span> It's structured similarly to the inline element, with the exception that it doesn't start on a new line. Height and Width can be changed.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;