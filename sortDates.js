const input = ['Sep 29, 2012', 'Jul 30, 2009', 'Jul 31, 2009', 'Jan 23, 2012', 'Jan 24, 1975', 'Jan 23, 1975','Mar 02, 1980', 'Jan 01, 1980', 'Jun 15, 1999', 'Apr 06, 1993', 'May 13, 1999', 'Mar 22, 1975'];

function sortDates() {
// Helper array to compare against
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
// Sort by year
const sortedYear = input.sort((a, b) => a.slice(8,12) - b.slice(8,12));

//Create helper array of sorted years non-repeating
let years = [sortedYear[0].slice(8,12)]; //manually push in first year for loop to check against
for (let i = 1; i < sortedYear.length; i++) {
  if (sortedYear[i].slice(8,12) > sortedYear[i - 1].slice(8,12)) {
    years.push(sortedYear[i].slice(8,12));
  }
}

// Sort by Month & Year
let monthYear = [];
  
  for(let i = 0; i < years.length; i++) {
    for(let j = 0; j < months.length; j++) {
      for (let k = 0; k < sortedYear.length; k++) {
        if (sortedYear[k].slice(8,12) == years[i] && sortedYear[k].slice(0,3) == months[j]) {
          monthYear.push(sortedYear[k]);
        }
      }
    }
  }

// Array to push in sorted sub arrays
let fullSort = [];

// Loop over array and create sub arrays of matching year
for (let i = 0; i < years.length; i++) {
  let sub = monthYear.filter(el => 
    el.slice(8,12) == years[i]);
    
    //Loop over each sub array and sort by month and day then push sorted sub array into final sorted array
    for (let i = 0; i < months.length; i++) {
      for (let j = 0; j < 32; j++) {
        for (let k = 0; k < sub.length; k++) {
          if (sub[k].slice(0,3) == months[i] && sub[k].slice(4,6) == j) {
            fullSort.push(sub[k]);
          }
        }
      }
    }
}
  // Final sorted array is an array of arrays and needs to be flattened 1 level
  console.log(fullSort.flat());
}


sortDates(input);