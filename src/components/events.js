import React, { Component } from 'react'
import eventsData from './about.json'

var eventsList = eventsData.data;

class Events extends Component{
    render(){
        return(
            <table>
                <thead>
                <tr><th>Symposium</th><th>Sponsor</th></tr>
                </thead>
                <tbody>
                { eventsList.map((item, i) => (
                <tr key = {i}>
                    <td>{item.exun}</td>
                    <td>{item.col2}</td>
                </tr>
            ))}</tbody></table>
        )
    }
}
console.log(eventsList)
export default Events