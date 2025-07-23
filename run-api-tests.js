const newman = require('newman');
const dayjs = require('dayjs');
const fs = require('fs');

// Генерация таймстемпа
const timestamp = dayjs().format('YYYY-MM-DD_HH-mm-ss');

// Путь к файлу отчёта
const reportPath = `reports/report_${timestamp}.html`;

// Убедиться, что папка reports существует
if (!fs.existsSync('reports')) {
  fs.mkdirSync('reports');
}

// Запуск Newman
newman.run({
  collection: require('./collections/Testing_Collection.postman_collection.json'),
  environment: require('./environments/prod_env.postman_environment.json'),
  reporters: ['cli', 'htmlextra'],
  reporter: {
    htmlextra: {
      export: reportPath,
      title: `Postman Test Report (${timestamp})`
    }
  }
}, (err) => {
  if (err) {
    console.error('Newman run failed:', err);
    process.exit(1);
  } else {
    console.log(`✅ Report saved: ${reportPath}`);
  }
});
