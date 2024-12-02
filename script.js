// script.js

// Sample employee data
const employees = [
    { name: 'Ramesh', position: 'Developer', status: 'Active' },
    { name: 'Suresh', position: 'Designer', status: 'Inactive' },
    { name: 'Ram', position: 'Manager', status: 'Active' },
    { name: 'sita', position: 'HR', status: 'Active' },
    { name: 'mohan', position: 'Sales', status: 'Inactive' }
];

// Sample statistics
const stats = {
    totalEmployees: employees.length,
    pendingTasks: 5,
    performance: 'Excellent'
};

// Function to update employee count and stats
function updateDashboard() {
    document.getElementById('employeeCount').textContent = stats.totalEmployees;
    document.getElementById('pendingTasks').textContent = stats.pendingTasks;
    document.getElementById('performance').textContent = stats.performance;

    const tableBody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    employees.forEach(employee => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${employee.status}</td>
        `;
    });
}

// Call the updateDashboard function when the page loads
document.addEventListener('DOMContentLoaded', updateDashboard);
