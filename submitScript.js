
let jobList = []
const addJob = (e) => {
  e.preventDefault()
  let newJob = {
    id: Date.now(),
    jobTitle: document.getElementById('job-title').value,
    jobDescrip: document.getElementById('job-descrip').value,
    jobBenefits: document.getElementById('job-benefits').value
  }
  if (newJob.jobTitle === '' || newJob.jobDescrip === '' || newJob.jobBenefits === ''){
    let error = document.getElementById('error');
    error.textContent = 'You must fill out all fields'
    return
  }
  document.querySelector('#addNewJob').reset();
  const jobInfo = newJob
  const { jobTitle, jobDescrip, jobBenefits } = jobInfo
  const newJobBox = document.createElement('div');
  newJobBox.classList.add('job-box')
  const jobBoxContent = `
                        <div class='job-box-column job-box-title'><h4>Title</h4><span>${jobTitle}</span></div>
                        <div class='job-box-column job-box-content'><h5>Header</h5><span>${jobDescrip}</span></div>
                        <div class='job-box-column job-box-content'><h5>Second Header</h5><span>${jobBenefits}</span></div>
                        `

  // const newContent = document.createTextNode(`Job Title: ${jobTitle} - Job Description: ${jobDescrip} - Job Benefits: ${jobBenefits}`)
  newJobBox.innerHTML = jobBoxContent
  const jobListings = document.getElementById('job-listings')
  jobListings.append(newJobBox)
  // newDiv.append(newContent);
  // const currentDiv = document.getElementById('job-listings')
  // currentDiv.append(newDiv)
  localStorage.setItem('JobList', jobListings.innerHTML)
  }
//   let pre = document.querySelector('.job-listings div');
//   pre.textContent = '\n' + JSON.stringify(jobList, '\t', 2);
// }

const clearJobs = (e) => {
  e.preventDefault();
  var jobList = document.getElementById('job-listings')
  while (jobList.firstChild){
    jobList.firstChild.remove()
  }
  localStorage.removeItem('JobList')
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addJob)
  document.getElementById('btn2').addEventListener('click', clearJobs)
});
//should it be done like this? not sure how it'll 
document.body.onload = getSavedJobs;
function getSavedJobs() {
  const savedJobs = localStorage.getItem('JobList')
  if (!savedJobs){
    console.log('no local storage')
  } else {
    const jobList = document.getElementById('job-listings')
    jobList.innerHTML = savedJobs;
    console.log('get local storage')
  }
}

