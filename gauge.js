google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

				var temp = 0;
        const api_url = "https://t2consult.net/test-tasks/airport-api/status/SFO";
        
        getApi(api_url);
        
        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Network', 68],
          ['Temp', temp]
        ]);
        
        async function getApi(url) {
        	fetch("https://t2consult.net/test-tasks/airport-api/status/SFO")
          .then(response => {
             return response.json();
          })
          .then(getData => {
          	temp = getData.Weather.Temp[0]
            const replaced = temp.replace(/\D/g, '');
            data = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['Memory', 80],
              ['CPU', 55],
              ['Network', 68],
              ['Temp', replaced]
            ]);
            })

          setInterval(function() {
          console.log( temp);
          }, 5000);
            console.log(res);
          }

        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()), temp);
          chart.draw(data, options);
        }, 13000);
        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()), temp);
          chart.draw(data, options);
        }, 5000);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()), temp);
          chart.draw(data, options);
        }, 26000);
      }


      https://jsfiddle.net/crackquc/poxyjnsu/3/
