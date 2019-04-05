import React, { Component } from 'react';
import Result from './Result';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query : "",
            results : [
                {
                    name : "Shahaji's Pizza",
                    rating : 4.7
                },
                {
                    name : "Shahaji's Pizza",
                    rating : 4.7
                }
            ], 
            latlng : {}
        };
        this.textSearch = this.textSearch.bind(this);
        this.updateQuery = this.updateQuery.bind(this);
    }

    componentDidMount() {
        window.currentLocation()
        .then((latlng) => {
            this.setState({...this.state, latlng : latlng});
        }).then(() => console.log(this.state))
        .then(() => {
            window.nearBySearch(this.state.latlng)
            .then((results) => this.setState({...this.state, results : results})).then(() => console.log('final state',this.state));
        }).then()
    }

    textSearch() {
        window.textSearch(this.state.latlng, this.state.query)
        .then((results) => {
            this.setState({...this.state, results : results});
            console.log('called from here', results)
        })
    }

    updateQuery(event) {
        this.setState({...this.state, query : event.target.value});
    }

    render() {
        return (
            <div className='display-container'>
                <div className="input-group input-group-lg spacing-input">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"  placeholder='Pizza' onChange={(event) => this.updateQuery(event)} />
                    <input className='btn btn-primary' type='submit' onClick={this.textSearch}/>
                </div>
                <div className='result-container'>
                {
                    this.state.results.map((result, index) => {
                        return (
                            <Result key={index} name={result.name} rating={result.rating}/>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default Display;