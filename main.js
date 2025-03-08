let timeline;

// 加载数据
fetch('data.json')
  .then(response => response.json())
  .then(data => window.dynastyData = data);

function generate() {
  const selected = Array.from(document.getElementById('dynastySelect').selectedOptions)
    .map(opt => opt.value);
  const items = selected.flatMap(dynasty => window.dynastyData[dynasty]);

  timeline = new vis.Timeline(
    document.getElementById('timeline'),
    items,
    { zoomable: true, stack: false }
  );
}

function exportImage() {
  html2canvas(document.querySelector('#timeline')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'timeline.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
