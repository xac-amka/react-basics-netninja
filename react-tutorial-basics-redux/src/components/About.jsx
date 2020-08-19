import React from 'react';
import Rainbow from '../hoc/Rainbow.jsx';

const About = (props) => {
    // console.log(props);
    // setTimeout(()=> {
    //     props.history.push('/about');
    // }, 3000)
    return (
        <div className="container">
            <h4 className="center">This is my About page </h4>
            <p>If you have content that will take a long time to load, you should give the user feedback. For this reason we provide a number activity + progress indicators.</p>
        </div>
    )
}

export default Rainbow(About);