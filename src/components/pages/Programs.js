import React from 'react';
import Table from 'react-bootstrap/Table';

const ProgramsTable = ( {data} ) => {
    return (
        <Table striped bordered hover className='mt-2'>
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
                    <td>{item.company_name}</td>
                    <td>{item.program_name}</td>
                    <td>{item.industry}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default ProgramsTable;