function loadPieChart(femalePercent) {
    //1.
  let pieChart = document.getElementById("pie-chart");
    //2.
  pieChart = new Chart(pieChart, {
    type: "pie",
    data: {
      datasets: [1935441, 1642253]
    }
          //data: [femalePercent, 100 - femalePercent], // female, male
            // backgroundColor: [
               //blue for male
                ],
        //add custom labels, female first then male
        labels: ["Female", "Male"],
    }
  }),
}
  