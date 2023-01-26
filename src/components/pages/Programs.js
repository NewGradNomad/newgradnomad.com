import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const ProgramsTable = ( {data} ) => {
    return (
        <Table striped bordered hover className='text-center'>
            <thead>
            <tr>
                <th>Company Name</th>
                <th>Program Name</th>
                <th>Industry</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td width="33.33%">{item.company_name}</td>
                    <td width="33.33%">{item.program_name}</td>
                    <td width="33.33%">{item.industry}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default ProgramsTable;