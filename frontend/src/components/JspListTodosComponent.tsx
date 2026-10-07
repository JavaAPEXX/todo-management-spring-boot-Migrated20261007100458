import React from 'react';

type JspListTodosComponentProps = {
    data?: Record<string, any>;
};

export const JspListTodosComponent: React.FC<JspListTodosComponentProps> = ({ data = {} }) => {
    const { todo, todos } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <div className="container">
        	<div>
        		<a type="button" className="btn btn-primary btn-md" href="/add-todo">Add Todo</a>
        	</div>
        	<br>
        	<div className="panel panel-primary">
        		<div className="panel-heading">
        			<h3>List of TODO's</h3>
        		</div>
        		<div className="panel-body">
        			<div className="modern-table-wrapper"><table className="modern-table table table-hover" className="table table-striped">
        				<thead>
        					<tr>
        						<th width="40%">Description</th>
        						<th width="40%">Target Date</th>
        						<th width="20%"></th>
        					</tr>
        				</thead>
        				<tbody>
        					{todos && todos.map((todo: any, index: number) => (
        						<tr>
        							<td>{todo.description}</td>
        							<td><fmt:formatDate value={todo.targetDate} pattern="dd/MM/yyyy" /></td>
        							<td><a type="button" className="btn btn-success" href="/update-todo?id={todo.id}">Update</a>
        							<a type="button" className="btn btn-warning" href="/delete-todo?id={todo.id}">Delete</a></td>
        						</tr>
        					))}
        				</tbody>
        			</table></div>
        		</div>
        	</div>
        
        </div>
            </div>
        </div>
    );
};

export default JspListTodosComponent;
