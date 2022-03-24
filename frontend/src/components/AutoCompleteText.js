
import React from 'react';

export default class AutoCompleteText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: '',

        };
    }

    onTextChanged = (e) => {

        const value = e.target.value;
        const { items } = this.props;
        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }

        this.setState(() => ({ suggestions, text: value }));


    }

    suggestionSelected(value) {

        this.setState(() => ({
            text: value,
            suggestions: [],
        }))

    }

    renderSuggestions() {
        const { suggestions } = this.state;
        console.log(suggestions.length);
        if (suggestions.length < 5) {

            return (
                <ul>
                    {suggestions.map((item) =>

                        <li onClick={() =>
                            this.suggestionSelected(item)}>{item}</li>
                    )
                    }
                </ul>
            )
        }
        else {
            return null;
        }
    }

    render() {

        const { text } = this.state;

        return (

            <div>
                <label>Destination</label>
                <div className="AutoCompleteText">
                    <input value={text} placeholder="Enter City" onChange={this.onTextChanged} type="text" />
                    {this.renderSuggestions()}
                </div>
            </div>

        )

    }

}
