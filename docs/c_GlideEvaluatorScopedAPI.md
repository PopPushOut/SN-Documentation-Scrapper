GlideScopedEvaluator
--------------------

The GlideScopedEvaluator API allows you to evaluate scripts in a GlideRecord field from both scoped and global server scripts.

The GlideScopedEvaluator API evaluates records with script fields defined. The scope of the script is defined by the scope of the record.

#### GlideScopedEvaluator()

Instantiates a GlideScopedEvaluator object.

#### evaluateScript(GlideRecord grObj, String scriptField, Object variables)

Evaluates a script from a GlideRecord field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| grObj | GlideRecord | The GlideRecord containing a script expression. |
| scriptField | String | (Optional) The name of the field containing the script expression. |
| variables | Object | (Optional) A map of variables with name-value pairs. These variables are available to the script during execution of this method. |

Return:

| Type | Description |
| --- | --- |
| Object | The result of the script execution. |

Example

    // For this example, we created a table: "x_app_table" with two columns: "short_description", "test_script"
    // "test_script" will store the script to be evaluated by GlideScopedEvaluator.
    gr = new GlideRecord('x_app_table'); 
    gr.short_description = 'Testing GlideScopedEvaluator';  
    gr.test_script = "gs.getUser().getName() + ' says ' + greeting; "; 
    gr.insert(); 
     
    // setup variables to be used by the script
    var vars = {'greeting' : 'hello'};
     
    //Evaluate the script from the field
    var evaluator = new GlideScopedEvaluator(); 
    gr = new GlideRecord('x_app_table'); 
    gr.addQuery('short_description','Testing GlideScopedEvaluator'); 
    gr.query(); 
    if (gr.next()) { 
        gs.info(evaluator.evaluateScript(gr, 'test_script', vars));
    }

Output

admin says hello

#### getVariable(String name)

Returns a variable from a GlideScopedEvaluator object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the variable. |

Return:

| Type | Description |
| --- | --- |
| Object | The value of the specified variable. |

Example

    //setting up a record that contains the script to be executed.
    gr = new GlideRecord('x_app_table'); 
    gr.short_description = 'Calculate Addition';  
    gr.calculate = "result = x + y"; 
    gr.insert(); 
     
    var evaluator = new GlideScopedEvaluator();
    evaluator.putVariable('x', 100);
    evaluator.putVariable('y', 200);
    evaluator.putVariable('result', null);
     
    // Now retrieve the result 
    gr = new GlideRecord('x_app_table'); 
    gr.addQuery('short_description','Calculate Addition'); 
    gr.query(); 
    if (gr.next()) { 
        evaluator.evaluateScript(gr, 'calculate', null);
        gs.info(evaluator.getVariable('result'));
    }

Output

#### putVariable(String name, Object value)

Puts a variable into the GlideScopedEvaluator object. These variables are available to the script that this GlideScopedEvaluator object runs.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the variable. |
| value | Object | The value of the variable. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    /setting up a record that contains the script to be executed.
    gr = new GlideRecord('x_app_table'); 
    gr.short_description = 'Calculate Addition';  
    gr.calculate = "result = x + y"; 
    gr.insert(); 
     
    var evaluator = new GlideScopedEvaluator();
    evaluator.putVariable('x', 100);
    evaluator.putVariable('y', 200);
    evaluator.putVariable('result', null);
     
    // Now retrieve the result 
    gr = new GlideRecord('x_app_table'); 
    gr.addQuery('short_description','Calculate Addition'); 
    gr.query(); 
    if (gr.next()) { 
        evaluator.evaluateScript(gr, 'calculate', null);
        gs.info(evaluator.getVariable('result'));
    }

Output

300