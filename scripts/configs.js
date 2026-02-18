
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('configsContainer');
  
  if (configsData.length === 0) {
    container.innerHTML = '<div class="no-data">No configs available yet</div>';
    return;
  }
  
  const configsGrid = document.createElement('div');
  configsGrid.className = 'configs-grid';
  
  configsData.forEach(config => {
    const card = createConfigCard(config);
    configsGrid.appendChild(card);
  });
  
  container.innerHTML = '';
  container.appendChild(configsGrid);
});

function createConfigCard(config) {
  const card = document.createElement('div');
  card.className = 'config-card';
  
  const header = document.createElement('div');
  header.className = 'config-card-header';
  
  const name = document.createElement('h2');
  name.textContent = config.name;
  
  header.appendChild(name);
  
  const body = document.createElement('div');
  body.className = 'config-card-body';
  
  const fullName = document.createElement('p');
  fullName.className = 'config-full-name';
  fullName.textContent = config.fullName;
  
  const lastUpdated = document.createElement('p');
  lastUpdated.className = 'config-last-updated';
  const updateDate = new Date(config.lastUpdated);
  lastUpdated.textContent = 'last updated: ' + updateDate.toLocaleDateString('ru-RU');
  
  body.appendChild(fullName);
  body.appendChild(lastUpdated);
  
  const footer = document.createElement('div');
  footer.className = 'config-card-footer';
  
  const downloadBtn = document.createElement('button');
  downloadBtn.className = 'config-download-btn';
  downloadBtn.textContent = 'Download ZIP';
  downloadBtn.onclick = function() {
    handleDownload(config);
  };
  
  footer.appendChild(downloadBtn);
  
  card.appendChild(header);
  card.appendChild(body);
  card.appendChild(footer);
  
  return card;
}

function handleDownload(config) {
  const link = document.createElement('a');
  link.href = config.file_path;
  link.download = config.file_path.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
