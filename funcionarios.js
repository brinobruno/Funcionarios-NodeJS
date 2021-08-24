const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const country = f => f.pais === 'Brazil'
const gender = f => f.genero === 'F'
const lowestSalary = (employee, currentEmployee) => {
    return employee.salario < currentEmployee.salario ? employee : currentEmployee
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const employee = funcionarios
    .filter(country)
    .filter(gender)
    .reduce(lowestSalary)

    console.log(employee)
})