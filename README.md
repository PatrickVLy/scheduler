# Work Day Scheduler
## User Story

**AS AN** employee with a busy schedule<br>
**I WANT** to add important events to a daily planner<br>
**SO THAT** I can manage my time effectively<br>
<hr>

## Acceptance Criteria
**GIVEN** I am using a daily planner to create a schedule<br>
**WHEN** I open the planner<br>
**THEN** the current day is displayed at the top of the calendar<br><br>
**WHEN** I scroll down<br>
**THEN** I am presented with timeblocks for standard business hours<br><br>
**WHEN** I view the timeblocks for that day<br>
**THEN** each timeblock is color coded to indicate whether it is in the past, present, or future<br><br>
**WHEN** I click into a timeblock<br>
**THEN** I can enter an event<br><br>
**WHEN** I click the save button for that timeblock<br>
**THEN** the text for that event is saved in local storage<br><br>
**WHEN** I refresh the page<br>
**THEN** the saved events persist<br><br>
<hr>

## Description

This is what I did to finish the project. 
1. Updated index.html file to add in DOM ids to each element, link to the Bootstrap API and jQuery API. Created individual rows for each hour with a lable, textarea and and save button
2. in the JS file. I first used moment.js to show current day and time as well as created a varible and set used moment.js to set that variable to the current hour of the day. 
3. Then I created variables for each hour of the day I wanted to display
4. Then I created varibles to point to each text area DOM element in the HTML
5. Then I created variables for each hour to retrieve the localstorage values for each entry
6. Then I created variable for each hour to retrieve the value inputed into each text box. 
7. 
