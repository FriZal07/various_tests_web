export default function ui_load() {
    const app = document.getElementById("app");
    
    // 1. Inject the HTML string
    app.innerHTML = 
    `   <div id="container">
            <div id="top_container">
            </div>
            <div id="middle_container">
                <input type="email" id="input_email" placeholder="Enter email here">
                <input type="file" id="input_file" placeholder="Enter file here">
                <button id="counter">Test</button>
            </div>
            <div id="bottom_container">

            </div>
        </div>
    `
    ;

    const email_input = document.getElementById("input_email");
    const file_input = document.getElementById("input_file");
    const validate_button = document.getElementById("counter");

    function checkFileSize(file) {
        const maxSize = 0x20; // 5 MB in bytes
        if (file.size > maxSize) {
            file_input.setCustomValidity("File size exceeds 5 MB limit. You think we get free cloud??");
        } else {
            file_input.setCustomValidity("");
        }
        file_input.reportValidity();
        return;
    }

    function checkEmailValidity() {
        if (email_input.validity.typeMismatch) {
            if (email_input.validity.typeMismatch) {
                email_input.setCustomValidity("Please enter a valid email address dumbass");
            } else {
                email_input.setCustomValidity("");
            }
            email_input.reportValidity();
        }
    }

    email_input.addEventListener("input", () => {
        checkEmailValidity(email_input.value);
    });

    file_input.addEventListener("change", () => {
        checkFileSize(file_input.files[0]);
    });

    validate_button.addEventListener("click", () => {
        checkEmailValidity(email_input.value);
        if (file_input.files.length > 0) {
            checkFileSize(file_input.files[0]);
        }
    });

}