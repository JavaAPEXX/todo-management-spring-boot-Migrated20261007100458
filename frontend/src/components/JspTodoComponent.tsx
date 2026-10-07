import React, { useState } from 'react';

type JspTodoComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const JspTodoComponent: React.FC<JspTodoComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="modern-container">
            <div className="modern-card">
                <div className="container">
        	<div className="row">
        		<div className="col-md-6 col-md-offset-3 ">
        			<div className="panel panel-primary">
        				<div className="panel-heading">Add TODO</div>
        				<div className="panel-body">
        					<form:form method="post" modelAttribute="todo">
        						<form:hidden path="id" />
        						<fieldset className="form-group">
        							<form:label path="description">Description</form:label>
        							<form:input path="description" type="text" className="form-control" required="required" />
        							<form:errors path="description" cssClass="text-warning" />
        						</fieldset>
        
        						<fieldset className="form-group">
        							<form:label path="targetDate">Target Date</form:label>
        							<form:input path="targetDate" type="text" className="form-control" required="required" />
        							<form:errors path="targetDate" cssClass="text-warning" />
        						</fieldset>
        
        						<button type="submit" className="btn btn-success">Save</button>
        					</form:form>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
            </div>
        </div>
    );
};

export default JspTodoComponent;
