// render(){
//   return (
//     <div className='sub-container'>
//       <h1 className='chuck-quote'> {this.state.randomJoke} </h1>
//       <div className='new-joke-section'>
//         <Button className='new-jokes-btn' title='New Jokes' handleClick={ ()=> this.getNewJoke() } />
//         <Input className='jokes-input' type='number' value={ this.state.input } onChange={ (e)=> {this.setState({ input: e.target.value })} }/>
//       </div>
//       <Button className='favorites-btn' title='Favorites' handleClick={ ()=> this.getFavorites() } />
//       <p className='click-new-jokes'> Click New Jokes! </p>
//       <div className='joke-container'>
//         <p className='joke'> { this.state.jokeList } </p>
//         <Button className='star-btn' title='star' handleClick={ ()=> this.setFavorite() } />
//       </div>
//     </div>
//   )
// }
// }
