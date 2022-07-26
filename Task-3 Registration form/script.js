let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
    let imageurl=document.querySelector("#img").value;
    var generatedurl=`${imageurl}`;
    //console.log(generatedurl);
   
   //storing the data in objects getting from form
    const data={
        name: document.getElementById("name").value,
        img: generatedurl,
        email: document.getElementById("email").value,
        websitelink: document.getElementById("websitelink").value,
        gender: document.getElementById("gender").value,
        skills: document.getElementById("skills").value
    };
    console.log(data);
    //this part is for card template

    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
    <img src="${generatedurl}" alt="image">
    <div class="NameContainer">${data.name}</div>
    <div class="GenderContainer">${data.gender}</div>
    <div ><a href="">${data.email}</a></div><br><br>
    <a href="">${data.websitelink}</a>
    <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
    // to add one card after the other
    output.appendChild(newlist);
   
    //to clear the input fields after submission
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})