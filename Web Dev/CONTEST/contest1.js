let a = 42;
let b = "Hello";
let c = true;
let d = null;
let e = undefined;
console.log("########      Q1     !!!!!!!!!!!!");
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));


console.log("#################               q2       #########################################");

let subjects=["maths","english","physics","biology"];
console.log(subjects.length);

console.log("##########################        Q3        ##################################################");
let scores = [85, 92, 78, 96, 88];

console.log(scores[0]);
console.log(scores[2]);
console.log(scores[4]);

console.log("###########################        Q4         ##########################################################");


let movies=[];
movies.push("golmal");
movies.push("super 30");
movies.push("Road to success");

console.log(movies);

console.log("#############           Q5#         ##############################################################################");
let x="123";
if (x===123){
    console.log("number");

}
else{
    console.log("string");
}


console.log("#############         Q6        ###############################################################################");

let names = ["John", "Alice", "Bob", "Diana"];
let val;
for (let i=0;i<names.length;i++){
    if (names[i]=="Bob"){
        val=true;
    }
    else{
        val=false;
    }
    if (val){
        console.log("Bob found");
    }
}

console.log("################         Q7              ############################################################################");

let color=['green','yellow','red','pink','purple'];
for (let i=0;i<color.length;i++){
    console.log(color[i]);
    console.log(i);
}

console.log("#############################################################       Q8     ###############");
let cntr=0;
let grades = [85, 90, 78, 92, 85, 88, 90];
for (let i=0;i<grades.length;i++){
    if (grades[i]==85 ||  grades[i]==90){
        cntr+=1;
    }
}
console.log("no of times it appeared "+cntr);

console.log("########################     Q9      ####################################################################");

let number1 = [85, 90, 78, 92, 85, 88, 90];
let max=number1[0];
for (let i=0;i<grades.length;i++){
    if (number1[i]>number1[i+1]){
        max=number1[i];
    }
    
}
console.log(max);

console.log("####################   Q 10    ################################################################");

let fruits = ["apple", "banana", "orange", "mango"];
console.log("before: "+fruits);
fruits[1]="grape";
console.log("after : "+fruits);

console.log("##########################    Q 11    #################################################################");

let odd=[];
let even=[];
let nums=[12,15,8,21,6,19];
for (let i=0;i<nums.length;i++){
    if (nums[i]%2==0){
        odd.push(nums[i]);
    }
    else{
        even.push(nums[i]);
    }
}

console.log("even array "+even);
console.log("odd array "+odd);

console.log("##################### Q 12  #######################################################################");
let same;
let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
for (let i=0;i<arr1.length;i++){
    if (arr1[i]==arr2[i]){
        same=true;
    }else{
        same=false;
    }
}
if (same){
    console.log("both arrays are same");
}

console.log("##################Q 13  ##########################################################################");

let student=["akshat","Raman","ram","sita","krishna"];
for(let i=0;i<student.length;i++){
    if (student[i].length>4){
        console.log(student[i]);
    }
}

console.log("############################  Q 14   ################################################################");

let marks = [78, 85, 92, 67, 88, 94];
let sum=0;
for (let i=0;i<marks.length;i++){
    sum+=marks[i];
}
console.log(sum);
console.log(sum/marks.length);

console.log("########################   Q 15   ####################################################################");

let original=[1,2,3,4,5];
let reversed=[];
for (let i=(original.length-1);i>=0;i--){
    reversed.push(original[i]);
}
console.log(reversed);

console.log("############################################################################################");

let data=[1, 2, 3, 2, 4, 1, 5, 3];
for (let i=0;i<data.length;i++){
    
}

console.log("#####     Ques 16  #######################################################################################");
let dataun=[1 , 2 , 3 , 2 , 4 , 1 , 5 ,3 ];
let newarray=[];
for (let i=0;i<dataun.length;i++){
    if (newarray.includes(dataun[i])){
        continue;
    }
    else{
        newarray.push(dataun[i]);
    }
}
console.log(newarray);

console.log("#############   Q17    ###############################################################################");

let letters = ["A", "B", "C", "D"]

for (let i=0;i<letters.length;i++){
    let output='';
    for(let j=0;j<=i;j++){
        output=output+letters[j]+" "
    }
    console.log(output);
}

console.log("###############################################      Q 18  #############################################");

let secvalues = [45, 87, 23, 67, 89, 12, 56];
let max2 = +100000000000;
let maxsechota=secvalues[1];

for (let i=0;i<secvalues.length;i++){
    if (max2<secvalues[i]){
        maxsechota=max2;
        max2=secvalues;
    }
}
console.log(maxsechota);

console.log("#######################  Q 19   #####################################################################");

let arrori = [1, 2, 3, 4, 5,6,7,8];
let n=arrori.length;
let temp0=arrori[n-1];
let temp1=arrori[n-2];

for(let i=n-1;i>=0;i--){
   
    arrori[i]=arrori[i-2];
}

arrori[0]=temp1;
arrori[1]=temp0;
console.log(arrori);
console.log("#############       Q20     ##################################################################");


console.log("matrix creation");

for (let i=0;i<4;i++){
    let bill='';
    for (let j=0;j<4;j++){
        bill=bill+(i+j)+" ";
    }
    console.log(bill);
}