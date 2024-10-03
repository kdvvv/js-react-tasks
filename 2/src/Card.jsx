import React from 'react';

// BEGIN (write your solution here)
const getCard = ({title, text}) => {
    if (!title && !text)
        return null;

    let titleElement = null;
    if (title)
        titleElement = <h4 className="card-title">{title}</h4>;

    let textElement = null;
    if (text)
        textElement = <p className="card-text">{text}</p>;

    return (
        <div className="card">
            <div className="card-body">
                {titleElement}
                {textElement}
            </div>
        </div>
    );
};

export default getCard;

// END
