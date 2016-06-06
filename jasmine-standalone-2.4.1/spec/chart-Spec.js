describe('checking variables', function() {
	
	beforeEach(function() {
		$('#chartContainer').highcharts();
	})

	it('that counter is defined', function() {
		expect(counter).toBeDefined();
	})

	it('that counter is set to zero', function() {
		expect(counter).toBe(0);
	})

	// it('that something is clicked', function() {
	// 	$('#container').highcharts({
 //        chart: {
 //            type: 'bar'
 //        },
 //        title: {
 //            text: 'Fruit Consumption'
 //        },
 //        xAxis: {
 //            categories: ['Apples', 'Bananas', 'Oranges']
 //        },
 //        yAxis: {
 //            title: {
 //                text: 'Fruit eaten'
 //            }
 //        },
 //        series: [{
 //            name: 'Jane',
 //            data: [1, 0, 4]
 //        }, {
 //            name: 'John',
 //            data: [5, 7, 3]
 //        }]
 //    });
		

	// })

	// it('that first chart variable is defined', function() {
	// 	var chart1 = new HighCharts.Chart();
	// 	renderchart1();
	// 	expect(chart1).toBeDefined();
	// })

	// it('that second chart variable is defined', function() {
	// 	expect(chart2).toBeDefined();
	// })

	it('that there is a template object for charts', function() {
		expect(Highcharts.setOptions()).toBeDefined();
	})

	it('that the secondChart renders in a different location than chart 1', function() {
		$('#secondContainer').highcharts();
		$('#chartContainer').highcharts();
	})

	it('that the data object exists', function() {

	})

	it('that the data object has drilldown options', function() {

	})

})

describe('checking on chart functionality', function() {

	it('that the tooltip exists upon hover', function() {

	})

	it('counter increments on click', function() {

	})

	it('second chart is built on first chart click', function() {

	})

	it('modal for point is built on second chart click', function() {

	})

	it('after close modal the modal info is emptied', function() {

	})

	it('second chart is rebuilt after second click on first click', function() {

	})

	it('first chart moves upon first click', function() {

	})

	it('second chart CSS is changed on first click', function() {
		// checking setSecondChart function
	})

})

describe('Responsiveness Check', function() {

	it('checks the size of the window', function() {

	})

	it('builds charts based on size of window', function() {

	})

})