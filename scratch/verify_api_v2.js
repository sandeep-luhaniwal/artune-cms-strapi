const http = require('http');

http.get('http://localhost:1337/api/home-page', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log('STATUS:', res.statusCode);
      if (json.data && json.data.sections) {
        console.log('Total sections found:', json.data.sections.length);
        console.log('Component names in sections:');
        json.data.sections.forEach((sec, idx) => {
          console.log(`[${idx}] ${sec.__component} (ID: ${sec.id})`);
        });
      } else {
        console.log('No sections data in response:', json);
      }
    } catch(e) {
      console.error('Failed to parse response JSON:', data);
    }
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
