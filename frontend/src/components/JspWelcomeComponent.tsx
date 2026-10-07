import React from 'react';

type JspWelcomeComponentProps = {
    data?: Record<string, any>;
};

export const JspWelcomeComponent: React.FC<JspWelcomeComponentProps> = ({ data = {} }) => {
    const { name } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <div className="container">
        
        	<div className="panel panel-primary">
        		<div className="panel-heading">Home Page</div>
        		<div className="panel-body">
        			Welcome {name}!! <a href="/list-todos">Click here</a> to manage your
        			todo's.
        		</div>
        	</div>
        </div>
            </div>
        </div>
    );
};

export default JspWelcomeComponent;
