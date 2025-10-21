# Profile Card & Multi-Page Site - Frontend Wizards Stage 1

This project, initially a single profile card for Stage 0, has been expanded into a multi-page application for Stage 1 of the Frontend Wizards internship. It now includes a reflective "About Me" page and a "Contact Us" page with client-side validation. It is built using plain HTML, CSS, and vanilla JavaScript, with a strong focus on semantic markup, accessibility, and testability.

---

## ✨ Live Demo

You can view the live project hosted here:

**[https://papaya-mandazi-eb1783.netlify.app/]**

---

## 📸 Screenshots

* **Profile Card (Desktop):** [Desktop View](images/desktop-view.png)
* **Profile Card (Mobile):** [Mobile View](images/mobile-view.jpg)
* **About Me Page:** [About View](images/about-me.png)
* **Contact Page:** [Contact Page](images/contact-me.png)
* **Contact Page (Validation):** [Success Message](images/success-message.png)

---

## ✅ Core Requirements Checklist

This project successfully implements all requirements from Stage 0 and Stage 1.

### Stage 0: Profile Card

-   [x] **All `data-testid` Attributes:** Every required element on the profile card includes the specified `data-testid` for automated testing.
-   [x] **Semantic HTML:** The structure uses semantic tags like `<article>`, `<header>`, `<section>`, `<figure>`, and `<nav>`.
-   [x] **Responsiveness:** The layout is fully responsive, stacking vertically on mobile and using Flexbox for wider screens.
-   [x] **Dynamic Time Display:** The current time is accurately displayed and updates every second.
-   [x] **Accessible Images:** The avatar `<img>` includes a descriptive `alt` attribute.
-   [x] **Accessible Links:** Social media links open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
-   [x] **Keyboard Navigation:** All interactive elements are keyboard-focusable.

### Stage 1: New Pages & Features

-   [x] **Site-wide Navigation:** A consistent `<nav>` element is present on all three pages (`index.html`, `about.html`, `contact.html`) allowing users to move between them.
-   [x] **Contact Us Page:**
    -   [x] All required fields, buttons, and messages exist with correct `data-testid` attributes.
    -   [x] Client-side validation is implemented in JavaScript.
    -   [x] Validation checks for: all required fields, valid email format, and a message length of at least 10 characters.
    -   [x] A success message (`data-testid="test-contact-success"`) is shown *only* after a valid submission.
    -   [x] All inputs have associated `<label>`s using the `for` attribute for accessibility.
    -   [x] Error messages are programmatically tied to inputs (using `aria-describedby` logic) when validation fails.
-   [x] **About Me Page:**
    -   [x] All required sections (`bio`, `goals`, `confidence`, `future-note`, `extra`) exist with correct `data-testid` attributes.
    -   [x] The page uses a semantic structure, including `<main>`, `<section>`, `<h2>`, and `<ul>`.
-   [x] **General:**
    -   [x] All new pages are fully responsive and keyboard-navigable.
    -   [x] Code remains modular (e.g., one `script.js` for all pages, one `styles.css`) and readable.

---

## 🛠️ Technologies Used

-   **HTML5:** For the core structure and content.
-   **CSS3:** For styling, layout (Flexbox), and responsiveness (Media Queries).
-   **Vanilla JavaScript:** For dynamically updating the time and handling contact form validation.

---

## 🚀 How to Run Locally

To run this project on your local machine, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [[https://github.com/Deeja-ish/HNG-First-Task](https://github.com/Deeja-ish/HNG-First-Task)]
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd HNG-First-Task
    ```

3.  **Open the `index.html` file in your browser:**
    You can do this by double-clicking the file in your file explorer or by using a live server extension in your code editor (like VS Code's "Live Server").