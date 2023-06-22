const input = [
  {
    name: "Aspirin",
    startedOn: "10-2-2021",
    endedOn: "08-2-2022",
    times: ["8:00", "12:30", "15:30"]
  },
  {
    name: "Advil",
    startedOn: "12-2-2021",
    endedOn: "05-2-2022",
    times: ["7:00", "19:30"]
  }
];
/*  output={  
 '7:00': 'Advil',  
 '8:00' : 'Aspirin',  
 '12:30' : 'Aspirin',  
 '15:30' : 'Aspirin',  
 '19:30' : 'Advil', } */

const solution = (input) => {
  const output = {};

  for (const item of input) {
    const { name, times } = item;

    for (const time of times) {
      output[time] = name;
    }
  }

  return output;
};

console.log(solution(input));
