//listing element
var _a, _b, _c, _d, _e, _f, _g;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //condition
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //create resume output
        var resumeOutput = "<h2>Resume</h2>\n    <p><strong>Name:</strong>".concat(name_1, "</p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Phone:</strong>").concat(phone, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n\n\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element are missing');
        }
    }
    else {
        console.error('One or more output element are missing');
    }
});
//Function to update the resume output
function UpdateResume() {
    // Get form elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_2 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output with editable sections
        var resumeOutput = "\n            <h2 contenteditable=\"true\" id=\"resumeName\">".concat(name_2, "</h2>\n            <p><strong>Email:</strong> <span contenteditable=\"true\" id=\"resumeEmail\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\" id=\"resumePhone\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\" id=\"resumeEducation\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\" id=\"resumeExperience\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\" id=\"resumeSkills\">").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            AddEditListeners(); // Add listeners to new editable elements
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
}
// Function to handle inline editing
function AddEditListeners() {
    document.querySelectorAll('#resumeOutput [contenteditable]').forEach(function (el) {
        el.addEventListener('input', function (event) {
            var target = event.target;
            switch (target.id) {
                case 'resumeName':
                    document.getElementById('name').value = target.textContent || '';
                    break;
                case 'resumeEmail':
                    document.getElementById('email').value = target.textContent || '';
                    break;
                case 'resumePhone':
                    document.getElementById('phone').value = target.textContent || '';
                    break;
                case 'resumeEducation':
                    document.getElementById('education').value = target.textContent || '';
                    break;
                case 'resumeExperience':
                    document.getElementById('experience').value = target.textContent || '';
                    break;
                case 'resumeSkills':
                    document.getElementById('skills').value = target.textContent || '';
                    break;
            }
        });
    });
}
// Add event listener for form submission
(_b = document.getElementById('resumeForm')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', function (event) {
    event.preventDefault();
    UpdateResume(); // Ensure this function is defined and accessible
});
// Update resume output on input
document.querySelectorAll('#resumeForm input, #resumeForm textarea').forEach(function (element) {
    element.addEventListener('input', UpdateResume);
});
// Function to generate unique URL based on the user's name
function generateUniqueURL() {
    var nameElement = document.getElementById('name');
    var uniqueURLDisplay = document.getElementById('uniqueURLDisplay');
    var shareSection = document.getElementById('shareSection');
    if (nameElement && uniqueURLDisplay && shareSection) {
        // Get the user's name and format it for the URL
        var username = nameElement.value.trim().toLowerCase().replace(/\s+/g, '');
        // Generate the unique URL
        var uniqueURL = "https://".concat(username, ".example.com/resume");
        // Display the unique URL
        uniqueURLDisplay.innerHTML = "\n            <p>Share your resume with this URL:</p>\n            <a href=\"".concat(uniqueURL, "\" target=\"_blank\">").concat(uniqueURL, "</a>\n        ");
        // Show the share section
        shareSection.style.display = 'block';
        // Set up the share buttons
        setupShareButtons(uniqueURL);
    }
    else {
        console.error('The name input element, uniqueURLDisplay element, or shareSection element is missing');
    }
}
// Function to set up share buttons
function setupShareButtons(url) {
    var _a, _b, _c;
    (_a = document.getElementById('shareFacebook')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(url)), '_blank');
    });
    (_b = document.getElementById('shareTwitter')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        window.open("https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(url)), '_blank');
    });
    (_c = document.getElementById('copyLink')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        navigator.clipboard.writeText(url).then(function () {
            alert('Link copied to clipboard!');
        }).catch(function (err) {
            console.error('Failed to copy link: ', err);
        });
    });
}
// Add event listener for the generate unique URL button
(_c = document.getElementById('generateUniqueURL')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', generateUniqueURL);
// Function to copy the URL to clipboard
function copyURL() {
    var nameElement = document.getElementById('name');
    if (nameElement) {
        var username = nameElement.value.trim();
        var baseUrl = window.location.origin;
        var resumeUrl_1 = "".concat(baseUrl, "/").concat(username, "-resume");
        // Copy URL to clipboard
        navigator.clipboard.writeText(resumeUrl_1).then(function () {
            alert('URL copied to clipboard: ' + resumeUrl_1);
        }).catch(function (err) {
            console.error('Failed to copy URL: ', err);
        });
    }
    else {
        console.error('Name input element is missing');
    }
}
// Add event listeners to buttons
(_d = document.getElementById('downloadPDF')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', downloadPDF);
(_e = document.getElementById('copyURL')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', copyURL);
// Import jsPDF from the global window object
var jsPDF = window.jspdf.jsPDF;
// // Function to generate and download the resume as a PDF
function downloadPDF() {
    //     // Create a new jsPDF instance
    var doc = new jsPDF();
    //     // Get the resume content
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        // Add the resume content to the PDF
        // You can adjust the position (x, y) and format as needed
        doc.text(resumeOutputElement.textContent || '', 10, 10);
        // Save the PDF
        doc.save('resume.pdf');
    }
    else {
        console.error('The resume output element is missing');
    }
}
// Add event listener to the download button
(_f = document.getElementById('downloadPDF')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', downloadPDF);
// // Function to share the resume
// function shareResume() {
//     // Create the content to share
//     const resumeContent = {
//         title: 'My Resume',
//         text: 'Check out my resume!',
//         url: document.location.href, // Replace with specific URL if needed
//     };
//     // Check if the Web Share API is supported
//     if (navigator.share) {
//         navigator.share(resumeContent)
//             .then(() => {
//                 console.log('Resume shared successfully');
//             })
//             .catch((error) => {
//                 console.error('Error sharing the resume:', error);
//             });
//     } else {
//         // Fallback for unsupported browsers
//         alert('Sharing not supported on this browser. Please copy and paste the link.');
//     }
// }
// // Add event listener to the Share button
// document.getElementById('shareResume')?.addEventListener('click', shareResume);
function shareResume() {
    var resumeUrl = document.location.href;
    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            text: 'Check out my resume!',
            url: resumeUrl,
        })
            .then(function () {
            console.log('Resume shared successfully');
        })
            .catch(function (error) {
            console.error('Error sharing the resume:', error);
        });
    }
    else {
        alert("Please copy this link to share my resume: ".concat(resumeUrl));
        navigator.clipboard.writeText(resumeUrl)
            .then(function () {
            console.log('URL copied to clipboard');
        })
            .catch(function (error) {
            console.error('Failed to copy URL:', error);
        });
    }
}
(_g = document.getElementById('shareResume')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', shareResume);
