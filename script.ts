//listing element


document.getElementById("resumeForm")?.addEventListener('submit',function(event){
    event.preventDefault()
    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement
    const emailElement = document.getElementById('email') as HTMLInputElement
    const phoneElement = document.getElementById('phone') as HTMLInputElement
    const educationElement = document.getElementById('education') as HTMLInputElement
    const experienceElement = document.getElementById('experience') as HTMLInputElement
    const skillsElement = document.getElementById('skills') as HTMLInputElement



//condition
if(nameElement && emailElement && phoneElement && educationElement && experienceElement &&skillsElement){
    const name = nameElement.value;
    const email = emailElement.value ;
    const phone =phoneElement.value;
    const education = educationElement.value ;
    const experience = experienceElement.value ;
const skills = skillsElement.value ;





    //create resume output
    const resumeOutput = `<h2>Resume</h2>
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone:</strong>${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
        <h3>Skills</h3>
    <p>${skills}</p>



    `;

    const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else{
        console.error('The resume output element are missing')
    }



}else{
    console.error('One or more output element are missing')
}

})























//Function to update the resume output
function UpdateResume() {
    // Get form elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create resume output with editable sections
        const resumeOutput = `
            <h2 contenteditable="true" id="resumeName">${name}</h2>
            <p><strong>Email:</strong> <span contenteditable="true" id="resumeEmail">${email}</span></p>
            <p><strong>Phone:</strong> <span contenteditable="true" id="resumePhone">${phone}</span></p>
            <h3>Education</h3>
            <p contenteditable="true" id="resumeEducation">${education}</p>
            <h3>Experience</h3>
            <p contenteditable="true" id="resumeExperience">${experience}</p>
            <h3>Skills</h3>
            <p contenteditable="true" id="resumeSkills">${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            AddEditListeners(); // Add listeners to new editable elements
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
}

// Function to handle inline editing
function AddEditListeners() {
    document.querySelectorAll('#resumeOutput [contenteditable]').forEach(el => {
        el.addEventListener('input', (event) => {
            const target = event.target as HTMLElement;
            switch (target.id) {
                case 'resumeName':
                    (document.getElementById('name') as HTMLInputElement).value = target.textContent || '';
                    break;
                case 'resumeEmail':
                    (document.getElementById('email') as HTMLInputElement).value = target.textContent || '';
                    break;
                case 'resumePhone':
                    (document.getElementById('phone') as HTMLInputElement).value = target.textContent || '';
                    break;
                case 'resumeEducation':
                    (document.getElementById('education') as HTMLInputElement).value = target.textContent || '';
                    break;
                case 'resumeExperience':
                    (document.getElementById('experience') as HTMLInputElement).value = target.textContent || '';
                    break;
                case 'resumeSkills':
                    (document.getElementById('skills') as HTMLInputElement).value = target.textContent || '';
                    break;
            }
        });
    });
}

// Add event listener for form submission
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    UpdateResume(); // Ensure this function is defined and accessible
});

// Update resume output on input
document.querySelectorAll('#resumeForm input, #resumeForm textarea').forEach(element => {
    element.addEventListener('input', UpdateResume);
});







// Function to generate unique URL based on the user's name
function generateUniqueURL(): void {
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const uniqueURLDisplay = document.getElementById('uniqueURLDisplay');
    const shareSection = document.getElementById('shareSection') as HTMLDivElement;

    if (nameElement && uniqueURLDisplay && shareSection) {
        // Get the user's name and format it for the URL
        const username = nameElement.value.trim().toLowerCase().replace(/\s+/g, '');

        // Generate the unique URL
        const uniqueURL = `https://${username}.example.com/resume`;

        // Display the unique URL
        uniqueURLDisplay.innerHTML = `
            <p>Share your resume with this URL:</p>
            <a href="${uniqueURL}" target="_blank">${uniqueURL}</a>
        `;

        // Show the share section
        shareSection.style.display = 'block';

        // Set up the share buttons
        setupShareButtons(uniqueURL);
    } else {
        console.error('The name input element, uniqueURLDisplay element, or shareSection element is missing');
    }
}

// Function to set up share buttons
function setupShareButtons(url: string): void {
    document.getElementById('shareFacebook')?.addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    });

    document.getElementById('shareTwitter')?.addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
    });

    document.getElementById('copyLink')?.addEventListener('click', () => {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy link: ', err);
        });
    });
}

// Add event listener for the generate unique URL button
document.getElementById('generateUniqueURL')?.addEventListener('click', generateUniqueURL);






// Function to copy the URL to clipboard
function copyURL() {
    const nameElement = document.getElementById('name') as HTMLInputElement;
    if (nameElement) {
        const username = nameElement.value.trim();
        const baseUrl = window.location.origin;
        const resumeUrl = `${baseUrl}/${username}-resume`;

        // Copy URL to clipboard
        navigator.clipboard.writeText(resumeUrl).then(() => {
            alert('URL copied to clipboard: ' + resumeUrl);
        }).catch(err => {
            console.error('Failed to copy URL: ', err);
        });
    } else {
        console.error('Name input element is missing');
    }
}

// Add event listeners to buttons
document.getElementById('downloadPDF')?.addEventListener('click', downloadPDF);
document.getElementById('copyURL')?.addEventListener('click', copyURL);

 

// Import jsPDF from the global window object
 const { jsPDF } = window.jspdf;

// // Function to generate and download the resume as a PDF
 function downloadPDF() {
//     // Create a new jsPDF instance
     const doc = new jsPDF();

//     // Get the resume content
   const resumeOutputElement = document.getElementById('resumeOutput');

    if (resumeOutputElement) {
        // Add the resume content to the PDF
        // You can adjust the position (x, y) and format as needed
        doc.text(resumeOutputElement.textContent || '', 10, 10);

        // Save the PDF
        doc.save('resume.pdf');
    } else {
        console.error('The resume output element is missing');
    }
}

// Add event listener to the download button
document.getElementById('downloadPDF')?.addEventListener('click', downloadPDF);























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
    const resumeUrl = document.location.href;

    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            text: 'Check out my resume!',
            url: resumeUrl,
        })
        .then(() => {
            console.log('Resume shared successfully');
        })
        .catch((error) => {
            console.error('Error sharing the resume:', error);
        });
    } else {
        alert(`Please copy this link to share my resume: ${resumeUrl}`);
        navigator.clipboard.writeText(resumeUrl)
            .then(() => {
                console.log('URL copied to clipboard');
            })
            .catch((error) => {
                console.error('Failed to copy URL:', error);
            });
    }
}

document.getElementById('shareResume')?.addEventListener('click', shareResume);
