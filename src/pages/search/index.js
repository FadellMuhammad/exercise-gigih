import React, { useState } from 'react'
import './Search.css'

const Search = () => {

    const [search, setSearch] = useState('');
    const [data, setData] = useState('');

    const getApi = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=a7o7uMaZyfICKK7sBoww5UXHPbXMTS2p&q=${search}&limit=12`)
            .then(response => response.json())
            .then(res => setData(res.data))
    }

    const getInput = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='search'>
            <div className="title">
                <input name='search' type="text" placeholder="Search" onChange={getInput} className='input' />
                <button onClick={getApi} className='btn'>Search</button>
            </div>
            <div>
                {
                    data && data.map((item, index) => {
                        return (
                            <img key={index} src={item.images.original.url} alt="tes" />
                        )
                    })}
            </div>
        </div>
    )
}


// class Search extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             search: '',
//             data: ''
//         }
//     }

//     getApi = () => {
//         const { search } = this.state;
//         fetch(`https://api.giphy.com/v1/gifs/search?api_key=a7o7uMaZyfICKK7sBoww5UXHPbXMTS2p&q=${search}&limit=12`)
//             .then(response => response.json())
//             .then(res => this.setState({ data: res }))
//     }

//     getInput = (e) => {
//         this.setState({
//             search: e.target.value
//         })
//     }

//     render() {
//         const { data } = this.state;

//         return (
//             <div className='search'>
//                 <div className="title">
//                     <input name='search' type="text" placeholder="Search" onChange={this.getInput} className='input' />
//                     <button onClick={this.getApi} className='btn'>Search</button>
//                 </div>
//                 <div>
//                     {
//                         data && data.data.map((item, index) => {
//                             return (
//                                 <img key={index} src={item.images.original.url} alt="tes" />
//                             )
//                         })}
//                 </div>
//             </div>
//         )
//     }
// }

export default Search