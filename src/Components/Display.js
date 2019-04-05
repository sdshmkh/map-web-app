import React, { Component } from 'react';
import Result from './Result';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            results: [],
            latlng: {}
        };
        this.textSearch = this.textSearch.bind(this);
        this.updateQuery = this.updateQuery.bind(this);
        this.currentLocation = this.currentLocation.bind(this);
    }

    componentDidMount() {
        this.currentLocation()
            .then((latlng) => {
                this.setState({ ...this.state, latlng: latlng });
            }).then(() => {
                window.nearBySearch(this.state.latlng)
                    .then((results) => this.setState({ ...this.state, results: results }))
            })
    }

    textSearch() {
        window.textSearch(this.state.latlng, this.state.query)
            .then((results) => {
                this.setState({ ...this.state, results: results });
            })
    }

    updateQuery(event) {
        this.setState({ ...this.state, query: event.target.value });
    }

    currentLocation() {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(pos => {
            resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          })
        })
      }

    render() {
        return (
            <div className='display-container'>
                <div className="input-group input-group-lg spacing-input">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Pizza' onChange={(event) => this.updateQuery(event)} />
                    <input className='btn btn-primary' type='submit' onClick={this.textSearch} />
                </div>
                <div className='result-container'>
                    {
                        this.state.results.map((result, index) => {
                            return (
                                <Result key={index} place={result} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Display;