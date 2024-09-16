//Get References to the form and display area//
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//Handle form submission//
form.addEventListener('submit', (event: Event)=> {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone')as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value  
    const skills = (document.getElementById('skills') as HTMLInputElement).value

//Generate the resume content dynamically//
const resumeHtml = `
<h2><b>Editable Resume</b><h2>
<h3>Personal Information</h3>
<P><b>Name:</b><span contentEditable="true">${name}</span></p>
<P><b>email:</b><span contentEditable="true">${email}</span></p>
<P><b>phone:</b><span contentEditable="true">${phone}</span></p>

<h3>Education</h3>
<p contentEditable="true">${education}</p>

<h3>Experience</h3>
<p contentEditable="true">${experience}</p>

<h3>Skills</h3>
<p contentEditable="true">${skills}</p>
`;

//Display the generated Resume//
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHtml
}else{
    console.error('The resume display element is missing.');
}
});
