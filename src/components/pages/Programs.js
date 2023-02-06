import React from 'react';
import Table from 'react-bootstrap/Table';

const ProgramsTable = ( {data} ) => {
    return (
        <Table responsive striped bordered hover className='text-center'>
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
                    <td col p-3>{item.company_name}</td>
                    <td col p-3>{item.program_name}</td>
                    <td col p-3>{item.industry}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default ProgramsTable;
