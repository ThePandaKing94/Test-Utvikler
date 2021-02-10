import React from 'react'
import img from './bitcoin.jpg'
export default class BitCoin extends React.Component {

    state = {
        loading: true,
        time: true,
        bpi: true,
        USD: true,
        rate_float: null,
        updated: null,
    };

    async componentDidMount() {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const respone = fetch(url);
        const data = await (await respone).json();
        this.setState({ bpi: data.bpi.USD.rate_float });
        this.setState({ loading: false });
        this.setState({ updated: setInterval((data.time.updated), 1000) });
        console.log(data);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        return (
            <div>
                {this.state.loading ? <div>Loading...</div> : <div></div>}
                {this.state.updated ? <div><img src={img} alt="bitcoin"/>{"At "+this.state.updated+" BitCoin's current value is: "+Math.round(this.state.bpi)+" USD"}</div> : <div>Something's wrong</div>}
            </div>
        );
    }
}