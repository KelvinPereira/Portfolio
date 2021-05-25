import React from 'react'
import Layout from '../../Components/Layout'
import './index.css'
import ProjectItem from '../../Components/ProjectItem'

export default function Project() {
    return (
        <Layout>
            <div className='projectContainer'>
                <h2 className="projectH2">My Projects</h2>
                
                <div className='projectList'>
                    <ProjectItem/>
                    <ProjectItem/>
                    <ProjectItem/>
                </div>
            </div>
        </Layout>
    )
}