
  
   //  for work Experience
   function addNewWEField() {
    let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('weField');
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute('placeholder','Enter here')

let weOb = document.getElementById("we");
let weAddButtonOb = document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);
      }

      // for Skills

//       function addNewSkillField() {
//     let newNode=document.createElement('textarea');
// newNode.classList.add('form-control');
// newNode.classList.add('skField');
// newNode.classList.add("mt-2");
// newNode.setAttribute("rows",3);
// newNode.setAttribute('placeholder','Enter here')

// let skillOb = document.getElementById("sk");
// let skillAddButtonOb = document.getElementById("skillAddButton");

// skillOb.insertBefore(newNode, skillAddButtonOb);
//       }

      //For academic Qualificaton
      function addAQNewField() {
    let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('aqField');
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute('placeholder','Enter here')

let aqOb = document.getElementById("aq");
let aqAddButtonOb = document.getElementById("aqAddButton");

aqOb.insertBefore(newNode, aqAddButtonOb);
      }

      //Add Button  for Projects
      function addNewPField(){
        console.log("hello project");
        let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
 newNode.classList.add('pField');
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute('placeholder','Enter here')




        let pOb = document.getElementById("p");
let pAddButtonOb = document.getElementById("pAddButton");
pOb.insertBefore(newNode, pAddButtonOb);
      }

      //generating cv
      function generateCV(){
      

        let 
         nameField=document.getElementById('nameField').value;
        let nameT1=document.getElementById('nameT1');
        nameT1.innerHTML = nameField;

        //diret
        document.getElementById('nameT2');
        nameT2.innerHTML=nameField;
        
      //contact
      document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

       //address
       let 
        
  addressField=document.getElementById('addressField').value;
       let address=document.getElementById('addressT');
       address.innerHTML=addressField;
      
       //links
       //facebook link 
       let 
        facebook=document.getElementById('fbtField').value;
       let fb= document.getElementById('fbT');
       fb.innerHTML=facebook;
       fb.setAttribute("href",facebook)
       
       //instagram
       
      instagram=document.getElementById('instaField').value;
       let insta= document.getElementById('instaT');
       insta.innerHTML=instagram;
       insta.setAttribute("href",instagram);

       //linkdin
     linkdin =document.getElementById('linkdinField').value;
       let ldin= document.getElementById('linkdT');
       ldin.innerHTML=linkdin;
       ldin.setAttribute("href",linkdin)

       //github
     let  github=document.getElementById('gitField').value;
       let gitb= document.getElementById('git');
       gitb.innerHTML=github;
       gitb.setAttribute("href",github)

       //summery
       let sum=document.getElementById('summeryField').value;
       let summery= document.getElementById('summeryT');
       summery.innerHTML=sum;


     

       //Work experience
       let wes=document.getElementsByClassName('weField');

       let str=" ";

       for(let e of wes)
       {
        str= str + `<li> ${e.value} </li>`;

       }
       document.getElementById('weT').innerHTML=str;

       // Academic Qualification

       let aqs = document.getElementsByClassName('aqField')

       let str1 = " ";

       for(let e of aqs){
        str1 = str1 + `<li> ${e.value} </li>`;

       }
       document.getElementById('aqT').innerHTML=str1;
      
       //projects



       let pr = document.getElementsByClassName('pField')

       let str2 = " ";

       for(let e of pr){
        str2 = str2 + `<li> ${e.value} </li>`;

       }
       document.getElementById('pt').innerHTML=str2;




      //  skills



      // let skill= document.getElementsByClassName('skField')

      // let str4 = " ";

      // for(let e of skill){
      //   str4 = str4 + `<li> ${e.value} <li>`;
        

      // }
      // document.getElementById('sk').innerHTML=str4;

       //code for photo

       let file=document.getElementById("photo").files[0];

       console.log(file);

       let reader=new FileReader()

       reader.readAsDataURL(file);

       console.log(reader.result);
       
       reader.onloadend =function (){

        document.getElementById("img").src= reader.result;

        $(document).ready(function(){
          $("#generate-cv").click(function(){
              $("#templete").show();
          });
         });

       };


        //  skills

    //   let skill=document.getElementsByClassName('skillField');

    //    let str3=" ";

    //    for(let e of skill)
    //    {
    //     str3= str3 + `<li> ${e.value} </li>`;

    //    }
    //    document.getElementById('sT').innerHTML=str3;

      

       
       document.getElementById("cv").style.display="none";
       document.getElementById("templete").style.display="block";

     


       
      
      }
    

      

      

