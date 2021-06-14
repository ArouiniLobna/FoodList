As start and to save time for this test, i have used code bootstrapping tool called react-boilerplate which help save building the project base time. This tool set up by default a Redux store and attach the reducer/saga/selectors to it.

<h3>ASSEMPTIONS</h3>:
<ol>
    <li>As no actual api used to update details, i tried to mock data using the provided one and demonstrate basic use of actions/selectors/Sagas/Reducers</li>
    <li>As no design or ux provided, the checkboxes can't each have a separate label , but need table UI format with headings to highlight the checkbox functionality</li>
    <li>No big fan for tables, however in this scenario to keep accessibility standards, it is preferred to use tables so the reader read each cell with its header</li>
    <li>for the requirement to animate the row to the right with 30px,  with current basic UX, it will not be a good UI to animate the full row, as need to keep the checkboxes aligned with it heading to avoid miscounting the customer. So, animated the row by indenting the row label.</li>
    <li>as part of single A accessibility, made sure the checkboxes outline is visible on the focus and also the TAB navigation highlight the checkbox on the focus, when SPACE clicked, the checkbox toggles.</li>
</ol>

<h3>THINGS TO CONSIDER IN REAL TIME APP</h3>
<ol>
<li>Keep running the screen reader while development to make sure the it is understandable and can be navigated all the times</li>
<li>better structure with more specific requirements and designs</li>
<li>In Real time application with bigger Data, the update functionality should not be linked to main redux container, as will cause refresh fr the full table items. Best approach will be,  ListItem component will be a connected component that is linked to an api that update a single item. This api can be listened to using something line WebSocket, so the UI will be updated immediate using the local state to reflect the changes, however the checkboxes will keep disabled until our Api listener comes back with success response. This pattern help to guide the user step by step on what is happing without locking them from interacting with the application.</li>
<li>The previous point leads also to better performance that should be monitored during real application development</li>
<li>The Loading should be in better UI, as example, display table with heading and the body as a skeleton animated. </li>
<li>More Unit test to cover all functionalities in debt</li>

</ol>

<h3>STRUCTURE:</h3>
1. Containers/FoodList is the parent component connected to the redux store where food list can be loaded from an Api ==> <em>(pass food list to</em>) => <code>components/layout/organisms/List </code>==> <em>(mapping)</em> => <code>omponents/layout/molecules/ListItem</code> ==> <code>components/layout/atoms/CheckBox</code>

<h3>RUNNING THE PROJECT LOCALLY</h3>
1. clone the project into your local machine
2. npm install
3. npm start
4. run the application on your localhost port 3000
