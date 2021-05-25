import React from 'react'
import Layout from '../../Components/Layout'
import './index.css'

export default function Add() {
    return (
        <Layout>
            <div className='addContainer'>
              <div className="addForm">
                <form>
                  <h2>Add a new project</h2>
                  <br/>
                  <br/>
                  <p>Project Name:</p>
                  <input className="addInput"
                    type="text"
                  />
                  <br/>
                  <br/>
                  <p>Project Description:</p>
                  <input className="addInput"
                    type="text"
                  />
                  <br/>
                  <br/>
                  <p>Repository URL:</p>
                  <input className="addInput"
                    type="text"
                  />
                  <br/>
                  <br/>
                  <br/>
                  <button className="addButton" type='submit' >
                    Add
                  </button>
                </form>
              </div>
            </div>
        </Layout>
    )
}
