import React from 'react'
import axios from "axios";

export default class BitCoin extends React.Component() {
  
    state = {
        loading: true,
        time: true,
    };

    async componentDidMount() {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const respone = fetch(url);
        const data = await (await respone).json();
        this.setState({ time: data.results[0]});
        console.log(data);
    }
//     getAPI = () => {
//         const options = {
//             method: 'GET',
//             url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
//             headers: {
//               'x-rapidapi-key': '50658ba158msh6f9b0f60ad53207p118d24jsn534a295f7e7f',
//               'x-rapidapi-host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
//             }
//           };
//           axios.request(options).then(function (response) {
//               console.log(response.data);
//           }).catch(function (error) {
//               console.error(error);
//           });
//    }

   

  render(){
    return (
        <div>
           {this.state.loading ? <div>Loading...</div> : <div>Something's wrong</div>}
        </div>
    );
}
}
