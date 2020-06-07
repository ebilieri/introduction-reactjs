import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Bruno Carneiro',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Aline Carneiro',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Fulano de Tal',
    skills: ['Assembly', 'C#', 'C++']
  },
  {
    id: 4,
    name: 'José Ciclano',
    skills: ['Reason']
  }
]

const App = () => {

  const renderCustomers = (customer) => {
    return (
      <li key={`customer-${customer.id}`}>
        {customer.name}

        {/* render skillss */}
        <ul>
          {customer.skills.map(renderSkills)}
        </ul>
      </li>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <li style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        {skill}
      </li>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;