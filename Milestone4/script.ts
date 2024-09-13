const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
//Submission
form.addEventListener('submit',(event:Event) => {
    event.preventDefault();//prevent page reload
//collect input values
const name = (document.getElementById('name')as HTMLInputElement).value
const email = (document.getElementById('email')as HTMLInputElement).value
const phone = (document.getElementById('phone')as HTMLInputElement).value
const education = (document.getElementById('education')as HTMLInputElement).value
const experience = (document.getElementById('experience')as HTMLInputElement).value
const skills = (document.getElementById('skills')as HTMLInputElement).value

//generate resume
const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${name}<p></span>
<p><b>Email Address:</b><span contenteditable="true">${email}<p><span>
<p><b>Phone Number:</b><span contenteditable="true">${phone}<p><span>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
`;

//display the resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
} else{
    console.error('The resume display element is missing')
}
})
;