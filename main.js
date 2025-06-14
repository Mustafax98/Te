const sections = document.querySelectorAll('.section');
const tabs = document.querySelectorAll('.tab');
const loginRole = document.getElementById('loginRole');

const permissions = {
  client: ['profile', 'menu'],
  owner: ['profile', 'partners', 'menu', 'crm', 'logistics', 'pos', 'stocks'],
  supplier: ['profile', 'stocks'],
  restaurant: ['profile', 'menu', 'logistics', 'pos', 'stocks'],
  restaurantAdmin: ['profile', 'menu', 'pos']
};

loginRole.addEventListener('change', () => {
  sections.forEach(sec => sec.style.display = 'none');
});

function showSection(id) {
  const role = loginRole.value;
  if (!permissions[role]?.includes(id)) {
    alert('ليست لديك صلاحية الوصول لهذه الصفحة');
    return;
  }
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showTab(tabId) {
  tabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}