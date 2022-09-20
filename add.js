var dateInputref= document.querySelector("#bdayInput");
var showbtnref=document.querySelector("#show-btn");
var resultref= document.querySelector("#output")


    function clickHandler(e){
    if (dateInputref.value !==""){var bdaystr=dateInputref.value;

        if(bdaystr !==''){
           var listofDate=bdaystr.split('-');
           var date={
               day: Number(listofDate[2]),
               month: Number(listofDate[1]),
               year: Number(listofDate[0])
           };
           var isPalindrome=checkPalindromeforalldateformats(date); 
   
           if(isPalindrome){
               resultref.innerText="Yeah!! Your birthday is a Palindrome!🎉🎉"
           }else{
               var [con,nextDate]=nextPalindromedate(date);
               resultref.innerText=`The  Next Palindrome Date is ${nextDate.day}-${nextDate.month}-${nextDate.year} and you missed it by ${con} days`
               
           }
           } }else{
            alert("Please Enter valid information")
           }
    
     }

     showbtnref.addEventListener("click",clickHandler)















function reverseStr(str){
    var listofChars = str.split('');
    var reverselistofchars =listofChars.reverse();
    var reversedstr = reverselistofchars.join('');
    return reversedstr;
}

function isPalindrome(str){
    var reverse= reverseStr(str);
    return str===reverse;
}

function convertDatetoStr(date){
    var dateStr = {day:'',month:'',year:''};

if(date.day< 10){
    dateStr.day='0' + date.day;

}else{
    dateStr.day=date.day.toString();
}
if(date.month< 10){
    dateStr.month='0' + date.month;

}else{
    dateStr.month=date.month.toString();
}

 dateStr.year=date.year.toString(); 
return dateStr;
}
function alldateFormats(date){
    var dateStr= convertDatetoStr(date);

 var ddmmyyyy= dateStr.day+dateStr.month+dateStr.year;
 var mmddyyyy=dateStr.month+dateStr.day+dateStr.year;
 var yyyymmdd=dateStr.year+dateStr.month+dateStr.day;
 var ddmmyy= dateStr.day+dateStr.month+dateStr.year.slice(-2);
 var mmddyy=dateStr.month+dateStr.day+dateStr.year.slice(-2);   
 var yymmdd=dateStr.year.slice(-2)+dateStr.month+dateStr.day;

 return[ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}

function checkPalindromeforalldateformats(date){
    var listofPalindromes=alldateFormats(date);

    var con=false;

for(var i=0; i<listofPalindromes.length; i++){
    if(isPalindrome(listofPalindromes[i])){
        con=true;
        break;
    }
}
return con;
}

function isleapyear(year){
    if(year%400===0){
        return true;
    }
    if(year%100===0){
        return false;
    }
    if(year%4===0){
        return true;
    }
    return false;
}

function getnextDate(date){
     var day= date.day+1;
     var month= date.month;
     var year= date.year;


     var daysinmonth=[31,28,31,30,31,30,31,31,30,31,30,31];

if (month===2){
    if(isleapyear(year)){
        if(day>29){
            day=1;
            month++;
        }
    }
else{
    if(day>28){
        day=1;
        month++;
    }
}
}
else {
    if(day> daysinmonth[month-1]){
        day=1;
        month++;
    }
}
    if(month>12){
    month=1;
    year++;
}

return {
    day:day,
    month:month,
    year:year
};
}


function nextPalindromedate(date){
    var ctr =0;
    var nextDate=getnextDate(date);
    
    while(1){
        ctr++;
        var isPalindrome=checkPalindromeforalldateformats(nextDate);
        if(isPalindrome){
            break;
        }
        nextDate=getnextDate(nextDate);
    }
 
   return[ctr,nextDate];
}

