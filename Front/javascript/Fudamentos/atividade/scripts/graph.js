function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['I', 'Total', { role: 'style' }],
        ['Agentes', data_agents.length, 'lightgreen'],            // RGB value
        ['Assuntos', data_subjects.length, 'lightblue'],            // English color name
        ['Regionais', data_regionals.length, 'orange'],
        ['Relatórios', data_reports.length, 'red' ], // CSS-style declaration
    ]);

    var options = {
        legend:{position:'none'}
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));

    chart.draw(data, options);
}
