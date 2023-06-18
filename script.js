let ans=[];
        for(let i=0;i< studentRecords.length;i++){
            ans.push(studentRecords[i].name.toUpperCase());
        }
        console.log(ans);

        let ans1=[];
        for(let i=0;i< studentRecords.length;i++){
            if(studentRecords[i].marks>50){
                ans.push(studentRecords[i]);
            }
        }
        console.log(ans1);

        let ans3=[];
        for(let i=0;i< studentRecords.length;i++){
            if(studentRecords[i].marks>50 && studentRecords[i].id>120){
                ans.push(studentRecords[i]);
            }
        }
        console.log(ans3);


        let ans4=0;
        for(let i=0;i< studentRecords.length;i++){
                ans+=studentRecords[i].marks;
        }
        console.log(ans4);


        let ans5=[];
        for(let i=0;i< studentRecords.length;i++){
            if(studentRecords[i].marks>50){
                ans.push(studentRecords[i].name);
            }
        }
        console.log(ans5);


        let ans6=0;
        for(let i=0;i< studentRecords.length;i++){
            if(studentRecords[i].id>120){
                ans+=studentRecords[i].marks;
              }
        }
        console.log(ans6);


        let ans7=0;
        for(let i=0;i< studentRecords.length;i++){
            if(studentRecords[i].marks< 50){
               studentRecords[i].marks+=15;
            }
             if(studentRecords[i].marks>50){
                ans+=studentRecords[i].marks;
              }
        }
        console.log(ans7);
        
        
        let students = [ object1={name: 'John', class: 1, rollno: 1 },
        object2= {name: 'Aman', class: 2, rollno: 4 },
        object3= {name: 'Sai', class: 3, rollno: 6 },
        object4= {name: 'Kiran', class: 4, rollno: 8 },
        object5= {name: 'Priya', class: 5, rollno: 5 },
        object6= {name: 'Saipriya', class: 6, rollno: 2 }]     
        console.log(students);