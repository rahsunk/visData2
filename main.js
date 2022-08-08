
fetch('https://randomuser.me/api/?results=50')
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
            for(let i=0;i<data.results.length;i++){
                const newDiv=document.createElement('div')
                newDiv.className="newDiv"
                newDiv.id=i

                const userImg=document.createElement('img')
                userImg.src=data.results[i].picture.large

                const userName=document.createElement('h2')
                userName.innerHTML=data.results[i].name.first+" "+data.results[i].name.last

                const userGender=document.createElement('p')
                userGender.innerHTML="Gender: "+data.results[i].gender.charAt(0).toUpperCase()+data.results[i].gender.slice(1)

                const userLocal=document.createElement('p')
                userLocal.innerHTML="Address: "+data.results[i].location.street.number+" "+data.results[i].location.street.name+", "+data.results[i].location.city+", "+data.results[i].location.state+", "+data.results[i].location.country

                const userDob=document.createElement('p')
                userDob.innerHTML="Date of Birth: "+data.results[i].dob.date.substr(0,10)

                const userMail=document.createElement('p')
                userMail.innerHTML="Email: "+data.results[i].email

                const userCell=document.createElement('p')
                userCell.innerHTML="Cell Phone #: "+data.results[i].cell

                newDiv.append(userImg,userName,userGender,userLocal,userDob,userMail,userCell)
                document.body.append(newDiv)
            }
                
            submitBtn.onclick=function(event){
                event.preventDefault()
                for(let i=0;i<data.results.length;i++){
                    console.log('test')
                    let fn=document.getElementById('fn_value')
                    let ln=document.getElementById('ln_value')
                    let gen=document.getElementById('gen_value')
                    
                    let fnValue=fn.value
                    let lnValue=ln.value
                    let genValue=gen.value
                    let userValues=[fnValue,lnValue,genValue]
                    console.log(userValues)
                    if(userValues[0].length>0){
                        if(userValues[0]==data.results[i].name.first){
                        
                        }
                        else{
                            if(document.getElementById(i)!=null){
                                document.getElementById(i).outerHTML = ""
                            } 
                        }
                    }
                    if(userValues[1].length>0){
                        if(userValues[1]==data.results[i].name.last){
                        
                        }
                        else{
                            if(document.getElementById(i)!=null){
                                document.getElementById(i).outerHTML = ""
                            } 
                        }
                    }
                    if(userValues[2].length>0){
                        if(userValues[2]==data.results[i].gender){
                        
                        }
                        else{
                            if(document.getElementById(i)!=null){
                                document.getElementById(i).outerHTML = ""
                            } 
                        }
                    }
                    

                }  
            }
        })


let submitBtn=document.querySelector('button')























// let userValues=[]
// executeAll()
// let submitBtn=document.querySelector('button')

// submitBtn.onclick=function(event){
//     event.preventDefault()
//     let fn=document.getElementById('fn_value')
//     let ln=document.getElementById('ln_value')
//     let gen=document.getElementById('gen_value')
    
//     let fnValue=fn.value
//     let lnValue=ln.value
//     let genValue=gen.value
//     let userValues=[fnValue,lnValue,genValue]
//     console.log(userValues)
//     // document.body.remove(newDiv)
//     executeAll(userValues)
// }

// function executeAll(userValues){
//     fetch('https://randomuser.me/api/?results=5')
//         .then(function(response){
//             return response.json()
//         })
//         .then(function(data){
//             console.log(data)
//             for(let i=0;i<data.results.length;i++){
//                 execute(data,i,userValues)
//             }
//         })  
// }

// function execute(data,i,values){
//     if(values.length==0){
//         console.log(values)
//         console.log(values.length)
//         const newDiv=document.createElement('div')
//         newDiv.className="newDiv"

//         const userImg=document.createElement('img')
//         userImg.src=data.results[i].picture.large

//         const userName=document.createElement('h2')
//         userName.innerHTML=data.results[i].name.first+" "+data.results[i].name.last

//         const userGender=document.createElement('p')
//         userGender.innerHTML="Gender: "+data.results[i].gender.charAt(0).toUpperCase()+data.results[i].gender.slice(1)

//         const userLocal=document.createElement('p')
//         userLocal.innerHTML="Address: "+data.results[i].location.street.number+" "+data.results[i].location.street.name+", "+data.results[i].location.city+", "+data.results[i].location.state+", "+data.results[i].location.country

//         const userDob=document.createElement('p')
//         userDob.innerHTML="Date of Birth: "+data.results[i].dob.date.substr(0,10)

//         const userMail=document.createElement('p')
//         userMail.innerHTML="Email: "+data.results[i].email

//         const userCell=document.createElement('p')
//         userCell.innerHTML="Cell Phone #: "+data.results[i].cell

//         newDiv.append(userImg,userName,userGender,userLocal,userDob,userMail,userCell)
//         document.body.append(newDiv)
//     }
//     // else if(values[0].toLowerCase==data.results[i].name.first.toLowerCase){
//     //     const newDiv=document.createElement('div')
//     //     newDiv.className="newDiv"

//     //     const userImg=document.createElement('img')
//     //     userImg.src=data.results[i].picture.large

//     //     const userName=document.createElement('h2')
//     //     userName.innerHTML=data.results[i].name.first+" "+data.results[i].name.last

//     //     const userGender=document.createElement('p')
//     //     userGender.innerHTML="Gender: "+data.results[i].gender.charAt(0).toUpperCase()+data.results[i].gender.slice(1)

//     //     const userLocal=document.createElement('p')
//     //     userLocal.innerHTML="Address: "+data.results[i].location.street.number+" "+data.results[i].location.street.name+", "+data.results[i].location.city+", "+data.results[i].location.state+", "+data.results[i].location.country

//     //     const userDob=document.createElement('p')
//     //     userDob.innerHTML="Date of Birth: "+data.results[i].dob.date.substr(0,10)

//     //     const userMail=document.createElement('p')
//     //     userMail.innerHTML="Email: "+data.results[i].email

//     //     const userCell=document.createElement('p')
//     //     userCell.innerHTML="Cell Phone #: "+data.results[i].cell

//     //     newDiv.append(userImg,userName,userGender,userLocal,userDob,userMail,userCell)
//     //     document.body.append(newDiv)
//     // }
//     else if(values[2].toLowerCase()==data.results[i].gender.toLowerCase()){
//         console.log(values[2].toLowerCase())
//         console.log(data.results[i].gender.toLowerCase())
//         const newDiv=document.createElement('div')
//         newDiv.className="newDiv"

//         const userImg=document.createElement('img')
//         userImg.src=data.results[i].picture.large

//         const userName=document.createElement('h2')
//         userName.innerHTML=data.results[i].name.first+" "+data.results[i].name.last

//         const userGender=document.createElement('p')
//         userGender.innerHTML="Gender: "+data.results[i].gender.charAt(0).toUpperCase()+data.results[i].gender.slice(1)

//         const userLocal=document.createElement('p')
//         userLocal.innerHTML="Address: "+data.results[i].location.street.number+" "+data.results[i].location.street.name+", "+data.results[i].location.city+", "+data.results[i].location.state+", "+data.results[i].location.country

//         const userDob=document.createElement('p')
//         userDob.innerHTML="Date of Birth: "+data.results[i].dob.date.substr(0,10)

//         const userMail=document.createElement('p')
//         userMail.innerHTML="Email: "+data.results[i].email

//         const userCell=document.createElement('p')
//         userCell.innerHTML="Cell Phone #: "+data.results[i].cell

//         newDiv.append(userImg,userName,userGender,userLocal,userDob,userMail,userCell)
//         document.body.append(newDiv)
//     }
    
    
// }




