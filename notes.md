### HTML Notes

-The id is what we are going to grab onto with JavaScript
-The class is what we are going to grab onto for styling

### CSS Notes

### Box Sizing

The CSS rule \* { box-sizing: border-box; } sets the CSS box-sizing property to border-box for all elements in the HTML document.

In other words, with box-sizing: border-box, when you specify a width or height for an element, the specified width/height will be inclusive of any padding or border, and the content will be adjusted to fit within that space.

By applying this rule to all elements using the universal selector (\*), it ensures that all elements on the page will have the border-box box-sizing behavior, providing a more consistent and predictable layout.

<!-- body {
	background-color: #f9fafb;
	font-family: 'Open Sans, sans-serif';
	display: flex;
	align-items: center; // centered body vertically
	justify-content: center; // centered body horizontally
	min-height: 100vh; // Viewport Height
} -->

### Padding

The CSS style .form { padding: 30px 40px; } applies to elements with the class "form" and sets the padding values for those elements.

The padding property is used to create space around the content within an element. In this case, the specified padding values are 30px for the top and bottom, and 40px for the left and right.

So, when this style is applied to an element with the class "form", it will have 30 pixels of padding at the top and bottom, and 40 pixels of padding on the left and right. The padding creates an invisible space inside the element, pushing the content away from the edges.

For example, if you have an HTML element like <div class="form">...</div>, the content within that <div> will be visually offset by the specified padding values. This can be useful for creating spacing and separating content from the edges of the element.

You can adjust the pixel values for the top, bottom, left, and right padding to achieve the desired spacing effect for your specific form element.

### Form Control

he provided CSS styles are used to define the appearance and layout of form controls within a form. Let's break down each style and explain its purpose:

.form-control { margin-bottom: 10px; padding-bottom: 20px; position: relative; }

The .form-control selector targets elements with the class "form-control". It is commonly used to style form input fields, such as text fields or checkboxes.
margin-bottom: 10px; adds a margin of 10 pixels at the bottom of each .form-control element. This creates spacing between consecutive form controls.
padding-bottom: 20px; adds a padding of 20 pixels at the bottom of each .form-control element. This creates space between the content of the form control and its bottom border.
position: relative; sets the positioning context for the .form-control element as relative. This allows child elements inside the .form-control to be positioned relative to it.
.form-control label { color: #777; display: block; margin-bottom: 5px; }

The .form-control label selector targets the <label> elements that are descendants of elements with the class "form-control". It styles the labels associated with form controls.
color: #777; sets the color of the label text to a shade of gray (#777).
display: block; makes the labels appear as block-level elements. This causes them to start on a new line and take up the full width available.
margin-bottom: 5px; adds a margin of 5 pixels at the bottom of each label. This creates spacing between labels and the form controls they are associated with.

### Bugs Fixed

The visibility was hidden for the form error css style. Making it visible has now allowed me to see the form validation errors.

### Adding TypeScript

1. `npm init -y`

2. `npm install typescript --save-dev`

3. `npx tsc --init`
