import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ProjectDetails = () => {
    const projectsData=useLoaderData();
    const { id } = useParams();
    console.log(projectsData);
    return (
        <div>
            
        </div>
    );
};

export default ProjectDetails;