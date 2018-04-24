window.addEventListener('load',init);

function init(){
	// on page load, build the charts
	buildBarChart();
	//buildBarChart2();
	buildDoughnutChart();
	buildDoughnutChart1();
	buildDoughnutChart2();
	buildLineChart();
}

function buildDoughnutChart(){
// a chart can take 2 objects:
// 1. data - the data/information (required)
// 2. options - chart options (optional)

		// first, get the context of the canvas where we're drawing the chart
		var ctx = document.getElementById("doughnutChart").getContext("2d");

		var data = {
				labels: [
						"Aha!",
						"Nada"
				],
				datasets: [{
								data: [4, 11],
								backgroundColor: [
										"#fadcca",
										"#191F58"
								],
								hoverBackgroundColor: [
										"#fadcca",
										"#191F58"
								]
						}]
		};

		// create chart options (this is optional)
		// see list of options:
		// http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
		var options = {
			title: {
            display: true,
            text: 'Profound thoughts generated through activity'
      },
			tooltips: {
					backgroundColor: 'black'
			},
			animation:{
					animateScale:true
			}
		}

		var myDoughnutChart = new Chart (ctx, {
				// type: 'bar',
				type: 'doughnut',
				data: data,
				options: options
		});

}

function buildDoughnutChart1(){

		var ctx = document.getElementById("doughnutChart1").getContext("2d");

		var data = {
				labels: [
						"yes",
						"no"
				],
				datasets: [{
								data: [3, 12],
								backgroundColor: [
										"#fadcca",
										"#191F58"
								],
								hoverBackgroundColor: [
										"#fadcca",
										"#191F58"
								]
						}]
		};

		var options = {
			title: {
            display: true,
            text: 'Have I have tried this activity before'
      },
			tooltips: {
					backgroundColor: 'black'
			},
			animation:{
					animateScale:true
			}
		}

		var myDoughnutChart = new Chart (ctx, {
				// type: 'bar',
				type: 'doughnut',
				data: data,
				options: options
		});

}

function buildDoughnutChart2(){

		var ctx = document.getElementById("doughnutChart2").getContext("2d");

		var data = {
				labels: [
						"food",
						"no food"
				],
				datasets: [{
								data: [6, 9],
								backgroundColor: [
										"#fadcca",
										"#191F58"
								],
								hoverBackgroundColor: [
										"#fadcca",
										"#191F58"
								]
						}]
		};

		var options = {
			title: {
            display: true,
            text: 'Machine reads food in the frame'
      },
			tooltips: {
					backgroundColor: 'black'
			},
			animation:{
					animateScale:true
			}
		}

		var myDoughnutChart = new Chart (ctx, {
				// type: 'bar',
				type: 'doughnut',
				data: data,
				options: options
		});

}


function buildBarChart(){

			// first, get the context of the canvas where we're drawing the chart
			var ctx = document.getElementById("barChart").getContext("2d");

			var data = {
			    // chart labels
		      //insert key for taglist
			    labels: ["train", "view", "bridge", "cars", "window", "art", "human", "ceiling", "food", "light"],
			    // array of datasets to plot
			    // could be only 1 if there's just 1 dataset
			    datasets: [{
			            label: "no. of times seen",
			           // backgroundColor: "rgba(75,192,192,0.3)",
			            borderColor: "#191F58",//rgba(75,192,192,0.5)
			            borderWidth: 1,
		              //**need frequency inserted here
			            data: [3, 3, 2, 2, 4, 1, 10, 3, 7, 3]
			    }]
			};

			var options = {
						title: {
			            display: true,
			            text: 'How many times objects were tagged'
			      },
		        tooltips: {
		            backgroundColor: '#191F58'
		        },
		        legend: {
		            display: false
		        }
			}
			var myBarChart = new Chart(ctx, {
					// type: 'bar',
					type: 'horizontalBar', // horizontal bards
					data: data,
					options: options
			});

}


function buildLineChart(){

	// NOW, we actually create the chart
	// first, get the context of the canvas where we're drawing the chart
	var ctx = document.getElementById("lineChart").getContext("2d");

	// a chart can take 2 objects:
	// 1. data - the data/information (required)
	// 2. options - chart options (optional)

	var data = {
		// chart labels
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15"],
    // an array of datasets to plot
    datasets: [
    		// dataset 1
        {
            label: "snaps taken per day",
            backgroundColor: "#191F58",
            borderColor: "#191F58",
            pointBackgroundColor: "#fadcca",
            pointRadius: 5,
            // the data values that actually get plotted
            data: [1, 38, 16, 13, 5, 6, 1, 35, 8, 3, 7,1,4,6,4]
        }
        // // dataset 2
        // {
        //     label: "My Second dataset",
        //     backgroundColor: "rgba(107,185,240,0.2)",
        //     borderColor: "rgba(107,185,240,1)",
        //     pointBackgroundColor: "rgba(107,185,240,1)",
        //     pointRadius: 5,
        //     // the data values that actually get plotted
        //     data: [28, 48, 40, 19, 86, 27, 90]
        // }
    ]
	};

	var options = {
      title: {
            display: true,
            text: 'Ten-second snaps taken per day'
       },
	    tooltips: {
	        backgroundColor: "#191F58"
	    },
			legend: {
					display: false
			}
   }

	// now, create the line chart, passing in:
	// 1. the type (required)
	// 2. the data (required)
	// 3. chart options (optional)
	var myLineChart = new Chart(ctx, {
	    type: 'line',
	    data: data,
	    options: options
	});
}
