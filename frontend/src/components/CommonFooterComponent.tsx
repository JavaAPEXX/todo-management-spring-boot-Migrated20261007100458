import React from 'react';

type CommonFooterComponentProps = {
    data?: Record<string, any>;
};

export const CommonFooterComponent: React.FC<CommonFooterComponentProps> = ({ data = {} }) => {
    const { format } = data;

    return (
        <div className="commonfootercomponent-wrapper">
            <script src="webjars/jquery/1.9.1/jquery.min.js"></script>
        <script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src="webjars/bootstrap-datepicker/1.0.1/js/bootstrap-datepicker.js"></script>
        <script>
        	$('#targetDate').datepicker({
        		format : 'dd/mm/yyyy'
        	});
        </script>
        
        
        <div className="footer">
        	Fixed Footer
        	<h1>
        		<a href="http://www.javaguides.net/p/spring-boot-tutorial.html">
        			Spring Boot Tutorial</a>
        	</h1>
        </div>
        </div>
    );
};

export default CommonFooterComponent;
