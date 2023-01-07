import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const react_bootstrap = () => {
   return (
      <div>
         <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey='0'>
               <Accordion.Header>How to learn HTML</Accordion.Header>
               <Accordion.Body>Can you send me proper information</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
               <Accordion.Header>How to learn HTML</Accordion.Header>
               <Accordion.Body>Can you send me proper information</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
               <Accordion.Header>How to learn HTML</Accordion.Header>
               <Accordion.Body>Can you send me proper information</Accordion.Body>
            </Accordion.Item>
         </Accordion>

      </div>
   )
}

export default react_bootstrap