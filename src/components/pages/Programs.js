import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const ProgramsTable = ( {data} ) => {
    return (
    <Container className='p-2'>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Company Name</th>
                <th>Program Name</th>
                <th>Industry</th>
                <th>Remote?</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.company_name}</td>
                    <td>{item.program_name}</td>
                    <td>{item.industry}</td>
                    <td>{item.remote}</td>
                </tr>
            ))}
            </tbody>
        </Table>
      </Container>
    );
}

export default ProgramsTable;