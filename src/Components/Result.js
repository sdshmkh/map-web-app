import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                lat: props.place.geometry.location.lat(),
                lng: props.place.geometry.location.lng()
            }
        }
    }

    componentDidMount() {
        console.log('Component did mount')
        window.createMarker(this.state.location, this.props.place.name)
    }

    componentDidUpdate() {
        window.createMarker(this.state.location, this.props.place.name)
    }

    render() {
        return (
            <div onClick={() => window.showClickedResult(this.state.location, this.props.place.name)} className='result-container alert alert-primary'>
                <p>
                    {this.props.place.name}
                </p>
                <p>
                    {this.props.place.rating}
                </p>
                <p>
                    {this.props.place.formatted_address}
                </p>
            </div>
        );
    }
}


export default Result;
