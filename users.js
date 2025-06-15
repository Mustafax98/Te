<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Registered Users</title>
  <link rel="stylesheet" href="/main.css">
</head>
<body>
  <div class="topbar">
    <button onclick="goBack()">← رجوع</button>
    <h1>نظام الإدارة</h1>
    <button onclick="logout()">تسجيل خروج</button>
  </div>
  
  <div class="container">
    <h2>Registered Users</h2>
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Business</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Email</th>
          <th>Username</th>
          <th>Password</th>
          <th>Date Created</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="user-table-body">
        <!-- Dynamic content -->
      </tbody>
    </table>
  </div>

  <script>
    const tableBody = document.getElementById("user-table-body");
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    function renderUsers() {
      tableBody.innerHTML = "";
      users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td><input type="text" value="${user.fullname}" id="fullname-${index}" /></td>
          <td><input type="text" value="${user.business}" id="business-${index}" /></td>
          <td><input type="text" value="${user.mobile}" id="mobile-${index}" /></td>
          <td><input type="text" value="${user.address}" id="address-${index}" /></td>
          <td><input type="email" value="${user.email}" id="email-${index}" /></td>
          <td><input type="text" value="${user.username}" id="username-${index}"/></td>
          <td><input type="text" value="${user.password}" id="password-${index}" /></td>
          <td>${user.date}</td>
          <td>
            <select onchange="updateRole(${index}, this.value)">
              <option value="user" ${user.role === 'user' ? 'selected' : ''}>User</option>
              <option value="owner" ${user.role === 'owner' ? 'selected' : ''}>Owner</option>
              <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Admin</option>
              <option value="restaurant" ${user.role === 'restaurant' ? 'selected' : ''}>Restaurant</option>
              <option value="supplier" ${user.role === 'supplier' ? 'selected' : ''}>Supplier</option>
            </select>
          </td>
          <td>${user.isActive ? '✅ Active' : '❌ Inactive'}</td>
            <td>
              <button onclick="toggleUser(${index})">${user.isActive ? 'Deactivate' : 'Activate'}</button>
              <button onclick="saveUser(${index})" style="margin-top:5px;">Save</button>
            </td>
        `;
        tableBody.appendChild(row);
      });
    }
    
    function toggleUser(index) {
      users[index].isActive = !users[index].isActive;
      localStorage.setItem("users", JSON.stringify(users));
      renderUsers();
    }
    
    function changeRole(index, newRole) {
      users[index].role = newRole;
      localStorage.setItem("users", JSON.stringify(users));
    }
    
    function saveUser(index) {
      users[index].fullname = document.getElementById(`fullname-${index}`).value;
      users[index].business = document.getElementById(`business-${index}`).value;
      users[index].mobile = document.getElementById(`mobile-${index}`).value;
      users[index].address = document.getElementById(`address-${index}`).value;
      users[index].email = document.getElementById(`email-${index}`).value;
      users[index].password = document.getElementById(`password-${index}`).value;
      
      localStorage.setItem("users", JSON.stringify(users));
      alert("✅ User updated!");
      renderUsers();
    }
    
    renderUsers();
    
  </script>
  <script src="/main.js"></script>
</body>
</html>
