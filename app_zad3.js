const _ = require('lodash')

const user = {
name : 'Imie',
surname: 'nazwisko',
allGrades: [
  {
  
  subjectName: 'Name1',
  grades:[3,4,5,3,3],
  weght: 3
  },
  {

  subjectName: 'Name2',
  grades:[3,4,3,3,3],
  weght: 2
  },
  {
  subjectName: 'Name3',
  grades:[3,4,5,5,3],
  weght: 1

  }
]
}






function date(user){
 console.log(user.name +" "+ user.surname)
 var avage=0;
 var tolatheight= 0
 for(var i = 0 ;i<2 ;i++){
   avage += (user.allGrades[i].grades)*user.allGrades[i].weght/5;
   tolatheight+=user.allGrades[i].weght;
 }
 console.log(avage/tolatheight)
}


