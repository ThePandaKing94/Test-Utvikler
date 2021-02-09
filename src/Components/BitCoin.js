import React  from 'react'
export default class BitCoin extends React.Component {
  
    state = {
        loading: true,
        time: null,
    };

    async componentDidMount() {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const respone = await fetch(url);
        const data = await (respone).json();
        this.setState({ time: null, loading: false});
        console.log([data]);
    }

    render(){
        if(this.state.loading) {
            return <div>loading...</div>
        }

        if(!this.state.time) {
            return <div>Registrerte ikke tiden</div>
        }

    return (
        <div>
              <div>{this.state.time}</div>
        </div>
    );
}
}