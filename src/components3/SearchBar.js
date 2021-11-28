import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmitForm(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">

            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>

                
                {/* <input type="text" onClick={this.onInputClick} onChange={this.onInputChange}/> */}
                <input type="text" 
                // onClick={(e) => this.setState({term: ''})}
                placeholder="Enter Image to Search"
                value={ this.state.term } 
                onChange={(e) => this.setState({ term: e.target.value })}/>
                </div>
            </form>


        </div>);
    }
}

export default SearchBar;