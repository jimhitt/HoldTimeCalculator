# Hold Time Calculator

This repository contains an HTML application for calculating hold time, implemented in VS Code. Below are the steps to understand and run the application.

## How to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hold-time-calculator.git

---

# Anticoagulant Hold Time Calculator

## Overview
This project provides a web-based solution for calculating the appropriate hold time for anticoagulant and antiplatelet medications before a procedure. 
I used a published anticoagulation reference sheet and ChatGPT to write a web-based application. I am not experienced in writing CCS or JavaScript code, and
ChatGPT was indispensable for accomplishing that goal.
The following summarizes the iterative steps taken to develop and enhance the solution with the help of the LLM.

## Development Steps

### 1. Initial Request and PDF Presentation
- **Prompt**: I presented a PDF summarizing hold times for various medications and asked for a web-based solution.
- **Solution**: The LLM provided an initial HTML and JavaScript code iteration to create a web-based Anticoagulant Hold Time Calculator.

### 2. First Code Iteration Debugging
- **Prompt**: In a new session, I presented the initial code, which had bugs and did not work as expected.
- **Solution**: The LLM debugged the code, ensuring it correctly handled date calculations and user input validation.

### 3. Alphabetize Medications and Use Radio Buttons
- **Prompt**: Asked to alphabetize the list of medications and change the selection to radio buttons, ensuring only one selection is allowed.
- **Solution**: Modified the HTML to use radio buttons and alphabetized the medications list.

### 4. Include Hold Time in Parentheses
- **Prompt**: Asked to include the hold time in parentheses next to each medication name in the radio buttons.
- **Solution**: Updated the radio button labels to include the hold time in parentheses.

### 5. Add Reference and Disclaimer
- **Prompt**: Asked to add a reference to the original PDF and today's date below the header, and include a disclaimer at the bottom.
- **Solution**: Added the reference and disclaimer in the HTML.

### 6. Include Antiplatelet Agents
- **Prompt**: Asked to include the antiplatelet agents clopidogrel, prasugrel, and ticagrelor.
- **Solution**: Added these agents to the medications list with their respective hold times.

### 7. Display Hold Time in Hours and Days
- **Prompt**: Asked to display the hold time in both hours and days for any hold time greater than 24 hours.
- **Solution**: Modified the display format to show both hours and days.

### 8. Enhance Visual Appeal
- **Prompt**: Asked to make the form more visually appealing.
- **Solution**: Added CSS styles to enhance the appearance of the form, including background, padding, borders, and hover effects.

### 9. Simplify Data Table and Dynamic Creation of Options
- **Prompt**: Asked to create a simpler data table for medications and use it to generate the radio buttons dynamically to improve the process of editing the hold times or adjusting the medication list.
- **Solution**: Created a data table with medications and hold times and updated the JavaScript to generate the options dynamically.

### 10. Change to Checkboxes for Multiple Selections
- **Prompt**: Asked to use checkboxes instead of radio buttons to allow multiple selections and generate multiple stop times.
- **Solution**: Changed the input type to checkboxes and updated the JavaScript to handle multiple selections.

### 11. Combine Date and Time Input
- **Prompt**: Asked to remove the separate text box for the procedure hour and include it in a single datetime field.
- **Solution**: Replaced the date and hour inputs with a single `datetime-local` input and updated the JavaScript accordingly.

### 12. Expand Medication List Container
- **Prompt**: Asked to expand the container size that holds the list of medications to make most or all of them visible.
- **Solution**: Adjusted the CSS to increase the `max-height` of the container and ensure it is scrollable if necessary.

## Final Implementation
The final implementation includes:
- A single `datetime-local` input for procedure date and time.
- Dynamically generated checkbox options for medications.
- Enhanced visual styling.
- Comprehensive handling of multiple medication selections and their respective hold times.

This iterative process allowed us to refine and enhance the functionality and user experience of the Anticoagulant Hold Time Calculator.
